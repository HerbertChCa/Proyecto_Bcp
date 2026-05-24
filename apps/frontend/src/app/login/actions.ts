'use server';

import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '../../utils/supabase/server';

export async function loginAction(formData: FormData) {
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');

  if (!email || !password) {
    redirect('/login?error=Email y contraseña son obligatorios');
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.user) {
    redirect(`/login?error=${encodeURIComponent(error?.message || 'Error en el inicio de sesión')}`);
  }

  const role = data.user.user_metadata?.role;
  redirect(role === 'org' ? '/org-panel' : '/dashboard');
}

export async function registerAction(formData: FormData) {
  const fullName = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');
  const confirmPassword = String(formData.get('confirmPassword') || '');

  const isOrg = formData.get('isOrg') === 'on';

  if (!fullName || !email || !password) {
    redirect('/login?tab=register&error=Todos los campos son obligatorios');
  }

  if (password.length < 8) {
    redirect('/login?tab=register&error=La contraseña debe tener al menos 8 caracteres');
  }

  if (password !== confirmPassword) {
    redirect('/login?tab=register&error=Las contraseñas no coinciden');
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        region: 'general',
        role: isOrg ? 'org' : 'general',
      },
    },
  });

  if (error) {
    redirect(`/login?tab=register&error=${encodeURIComponent(error.message)}`);
  }

  redirect(isOrg ? '/org-panel' : '/dashboard');
}

export async function logoutAction() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect('/login');
}
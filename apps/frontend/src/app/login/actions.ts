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
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  redirect('/dashboard');
}

export async function registerAction(formData: FormData) {
  const fullName = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');
  const confirmPassword = String(formData.get('confirmPassword') || '');

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
      },
    },
  });

  if (error) {
    redirect(`/login?tab=register&error=${encodeURIComponent(error.message)}`);
  }

  redirect('/dashboard');
}
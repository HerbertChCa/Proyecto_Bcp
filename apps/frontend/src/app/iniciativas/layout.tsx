import { AppShell } from '../../components/app-shell';
import { createSupabaseServerClient } from '../../utils/supabase/server';

export default async function IniciativasLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userRole = user?.user_metadata?.role || 'general';

  return (
    <AppShell searchPlaceholder="Buscar iniciativas activas..." userRole={userRole}>
      {children}
    </AppShell>
  );
}

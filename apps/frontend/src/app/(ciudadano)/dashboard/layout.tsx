import { AppShell } from '../../../components/app-shell';

export default function CitizenDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell searchPlaceholder="Buscar iniciativas, ideas o metas...">
      {children}
    </AppShell>
  );
}
import { AppShell } from '../../components/app-shell';

export default function IniciativasLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell searchPlaceholder="Buscar iniciativas activas...">
      {children}
    </AppShell>
  );
}

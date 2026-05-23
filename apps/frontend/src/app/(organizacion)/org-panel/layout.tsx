import { AppShell } from '../../../components/app-shell';

export default function OrgPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell searchPlaceholder="Buscar ideas, iniciativas o validaciones...">
      {children}
    </AppShell>
  );
}
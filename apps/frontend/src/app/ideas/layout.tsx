import { AppShell } from '../../components/app-shell';

export default function IdeasLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell searchPlaceholder="Buscar ideas, categorías o propuestas...">
      {children}
    </AppShell>
  );
}

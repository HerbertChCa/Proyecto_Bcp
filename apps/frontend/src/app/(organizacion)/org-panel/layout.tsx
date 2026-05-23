import { AppShell } from '../../../../components/app-shell';

const orgNavItems = [
  { href: '/', label: 'Inicio', icon: 'home' },
  { href: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { href: '/org-panel', label: 'Radar de Ideas', icon: 'explore' },
  { href: '/org-panel/nueva-iniciativa', label: 'Nueva iniciativa', icon: 'add_circle' },
  { href: '/org-panel/validacion', label: 'Validación', icon: 'verified' },
  { href: '/ideas', label: 'Ideas', icon: 'lightbulb' },
  { href: '/dashboard/perfil', label: 'Perfil', icon: 'person' },
];

export default function OrgPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      cta={{ href: '/org-panel/nueva-iniciativa', icon: 'rocket_launch', label: 'Crear iniciativa' }}
      navItems={orgNavItems}
      searchPlaceholder="Buscar ideas, iniciativas o validaciones..."
      subtitle="Panel de Organización"
      title="LánZate"
    >
      {children}
    </AppShell>
  );
}
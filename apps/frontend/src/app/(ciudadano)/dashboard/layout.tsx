import { AppShell } from '../../../components/app-shell';

const citizenNavItems = [
  { href: '/', label: 'Inicio', icon: 'home' },
  { href: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { href: '/iniciativas', label: 'Iniciativas', icon: 'hub' },
  { href: '/ideas', label: 'Ideas', icon: 'lightbulb' },
  { href: '/dashboard/perfil', label: 'Perfil', icon: 'person' },
  { href: '/org-panel', label: 'Organización', icon: 'apartment' },
];

export default function CitizenDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      cta={{ href: '/org-panel/nueva-iniciativa', icon: 'add', label: 'Participar' }}
      navItems={citizenNavItems}
      searchPlaceholder="Buscar iniciativas, ideas o metas..."
      subtitle="Participación Ciudadana"
      title="LánZate"
    >
      {children}
    </AppShell>
  );
}
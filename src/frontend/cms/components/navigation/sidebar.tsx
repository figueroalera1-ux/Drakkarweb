'use client';

import Link from 'next/link';
import { buildCmsNavigation } from '../../lib/navigation';
import { usePermissions } from '../../providers/permission-provider';

export function Sidebar() {
  const { permissions } = usePermissions();
  const navigation = buildCmsNavigation(permissions);

  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-200 bg-white p-6 lg:block">
      <div className="text-lg font-bold text-slate-950">Tiendas Drakkar</div>
      <nav className="mt-8 grid gap-2">
        {navigation.map((item) => (
          <Link key={item.id} href={item.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

'use client';

import { usePermissions } from '../../providers/permission-provider';
import type { PermissionKey } from '../../types/navigation';
import { EmptyState } from '../feedback/empty-state';

export function PermissionGuard({ children, permissions }: Readonly<{ children: React.ReactNode; permissions?: PermissionKey[] }>) {
  const { can } = usePermissions();

  if (!can(permissions)) {
    return <EmptyState title="Acceso restringido" description="No hay permisos suficientes para mostrar esta sección." />;
  }

  return children;
}

'use client';

import { createContext, useContext, useMemo } from 'react';
import { hasPermission } from '../lib/permissions';
import type { PermissionKey } from '../types/navigation';

type PermissionContextValue = {
  permissions: PermissionKey[];
  can: (requiredPermissions?: PermissionKey[]) => boolean;
};

const PermissionContext = createContext<PermissionContextValue | undefined>(undefined);

export function PermissionProvider({ children, permissions = [] }: Readonly<{ children: React.ReactNode; permissions?: PermissionKey[] }>) {
  const value = useMemo(
    () => ({
      permissions,
      can: (requiredPermissions: PermissionKey[] = []) => hasPermission(permissions, requiredPermissions),
    }),
    [permissions],
  );

  return <PermissionContext.Provider value={value}>{children}</PermissionContext.Provider>;
}

export function usePermissions() {
  const value = useContext(PermissionContext);

  if (!value) {
    throw new Error('usePermissions must be used inside PermissionProvider.');
  }

  return value;
}

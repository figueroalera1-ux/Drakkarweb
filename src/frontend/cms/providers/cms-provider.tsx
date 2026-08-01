'use client';

import { NotificationProvider } from './notification-provider';
import { PermissionProvider } from './permission-provider';
import { ThemeProvider } from './theme-provider';
import type { PermissionKey } from '../types/navigation';

export function CmsProvider({ children, permissions = [] }: Readonly<{ children: React.ReactNode; permissions?: PermissionKey[] }>) {
  return (
    <ThemeProvider>
      <PermissionProvider permissions={permissions}>
        <NotificationProvider>{children}</NotificationProvider>
      </PermissionProvider>
    </ThemeProvider>
  );
}

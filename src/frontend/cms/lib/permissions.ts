import type { PermissionKey } from '../types/navigation';

export function hasPermission(userPermissions: PermissionKey[], requiredPermissions: PermissionKey[] = []) {
  if (requiredPermissions.length === 0) {
    return true;
  }

  return requiredPermissions.every((permission) => userPermissions.includes(permission));
}

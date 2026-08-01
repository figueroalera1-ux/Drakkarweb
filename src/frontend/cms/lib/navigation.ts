import { cmsModules } from '../config/modules';
import { hasPermission } from './permissions';
import type { CmsNavigationItem, PermissionKey } from '../types/navigation';

export function buildCmsNavigation(userPermissions: PermissionKey[]): CmsNavigationItem[] {
  return cmsModules
    .filter((module) => module.enabled && module.navigation)
    .map((module) => module.navigation as CmsNavigationItem)
    .filter((item) => hasPermission(userPermissions, item.requiredPermissions));
}

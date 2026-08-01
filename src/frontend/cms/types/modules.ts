import type { CmsNavigationItem, PermissionKey } from './navigation';

export type CmsModuleDefinition = {
  id: string;
  label: string;
  basePath: string;
  navigation?: CmsNavigationItem;
  requiredPermissions?: PermissionKey[];
  enabled: boolean;
};

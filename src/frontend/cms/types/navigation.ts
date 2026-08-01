export type PermissionKey = string;

export type CmsNavigationItem = {
  id: string;
  label: string;
  href: string;
  icon?: string;
  requiredPermissions?: PermissionKey[];
  children?: CmsNavigationItem[];
};

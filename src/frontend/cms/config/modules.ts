import type { CmsModuleDefinition } from '../types/modules';

export const cmsModules: CmsModuleDefinition[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    basePath: '/admin',
    enabled: true,
    navigation: {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/admin',
      icon: 'dashboard',
    },
  },
  {
    id: 'settings',
    label: 'Settings',
    basePath: '/admin/settings',
    enabled: true,
    requiredPermissions: ['settings:read'],
    navigation: {
      id: 'settings',
      label: 'Settings',
      href: '/admin/settings',
      icon: 'settings',
      requiredPermissions: ['settings:read'],
    },
  },
  {
    id: 'media',
    label: 'Media',
    basePath: '/admin/media',
    enabled: true,
    requiredPermissions: ['media:read'],
    navigation: {
      id: 'media',
      label: 'Media',
      href: '/admin/media',
      icon: 'media',
      requiredPermissions: ['media:read'],
    },
  },
];

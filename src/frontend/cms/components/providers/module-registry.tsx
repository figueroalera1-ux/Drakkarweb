'use client';

import { createContext, useContext } from 'react';
import { cmsModules } from '../../config/modules';
import type { CmsModuleDefinition } from '../../types/modules';

const ModuleRegistryContext = createContext<CmsModuleDefinition[]>(cmsModules);

export function ModuleRegistryProvider({ children, modules = cmsModules }: Readonly<{ children: React.ReactNode; modules?: CmsModuleDefinition[] }>) {
  return <ModuleRegistryContext.Provider value={modules}>{children}</ModuleRegistryContext.Provider>;
}

export function useModuleRegistry() {
  return useContext(ModuleRegistryContext);
}

'use client';

import { Button } from '../ui/button';
import { useTheme } from '../../providers/theme-provider';

export function TopNavigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">CMS</p>
          <h1 className="text-lg font-semibold text-slate-950">Panel administrativo</h1>
        </div>
        <Button type="button" variant="secondary" onClick={toggleTheme}>
          Tema: {theme}
        </Button>
      </div>
    </header>
  );
}

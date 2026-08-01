'use client';

import { useState } from 'react';

export function useFilters(initialFilters: Record<string, string> = {}) {
  const [filters, setFilters] = useState(initialFilters);

  function setFilter(key: string, value: string) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function clearFilters() {
    setFilters({});
  }

  return { filters, setFilter, clearFilters };
}

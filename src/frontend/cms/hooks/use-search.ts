'use client';

import { useMemo, useState } from 'react';

export function useSearch<TEntity>(items: TEntity[], selector: (item: TEntity) => string) {
  const [search, setSearch] = useState('');
  const results = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return items;
    }

    return items.filter((item) => selector(item).toLowerCase().includes(normalizedSearch));
  }, [items, search, selector]);

  return { search, setSearch, results };
}

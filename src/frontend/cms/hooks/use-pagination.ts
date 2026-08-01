'use client';

import { useMemo, useState } from 'react';

export function usePagination(totalItems: number, pageSize = 10) {
  const [page, setPage] = useState(1);
  const pageCount = Math.max(1, Math.ceil(totalItems / pageSize));
  const range = useMemo(() => {
    const start = (page - 1) * pageSize;
    return { start, end: start + pageSize };
  }, [page, pageSize]);

  return { page, pageCount, pageSize, range, setPage };
}

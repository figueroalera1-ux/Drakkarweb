import { Button } from '../ui/button';

export function Pagination({ page, pageCount, onPageChange }: Readonly<{ page: number; pageCount: number; onPageChange: (page: number) => void }>) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Button type="button" variant="secondary" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
        Anterior
      </Button>
      <span className="text-sm text-slate-600">
        Página {page} de {pageCount}
      </span>
      <Button type="button" variant="secondary" disabled={page >= pageCount} onClick={() => onPageChange(page + 1)}>
        Siguiente
      </Button>
    </div>
  );
}

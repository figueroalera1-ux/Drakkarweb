import type { CrudColumn } from '../../types/crud';
import { EmptyState } from '../feedback/empty-state';

type DataTableProps<TEntity> = {
  columns: CrudColumn<TEntity>[];
  data: TEntity[];
  getRowId: (entity: TEntity) => string;
};

export function DataTable<TEntity>({ columns, data, getRowId }: DataTableProps<TEntity>) {
  if (data.length === 0) {
    return <EmptyState title="Sin registros" description="No hay datos para mostrar en esta vista." />;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th key={String(column.key)} className="px-4 py-3 text-left font-semibold text-slate-700">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((entity) => (
              <tr key={getRowId(entity)}>
                {columns.map((column) => (
                  <td key={String(column.key)} className="px-4 py-3 text-slate-700">
                    {column.render ? column.render(entity) : String((entity as Record<string, unknown>)[String(column.key)] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

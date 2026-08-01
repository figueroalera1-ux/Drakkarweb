import type { CrudResource } from '../../types/crud';
import { Card } from '../ui/card';
import { DataTable } from './data-table';
import { Pagination } from './pagination';
import { SearchBar } from './search-bar';

type CrudShellProps<TEntity> = {
  resource: CrudResource<TEntity>;
  data: TEntity[];
  getRowId: (entity: TEntity) => string;
  search: string;
  page: number;
  pageCount: number;
  onSearchChange: (value: string) => void;
  onPageChange: (page: number) => void;
};

export function CrudShell<TEntity>({ resource, data, getRowId, search, page, pageCount, onSearchChange, onPageChange }: CrudShellProps<TEntity>) {
  return (
    <Card className="grid gap-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h3 className="text-lg font-semibold text-slate-950">{resource.label}</h3>
        <div className="w-full md:w-80">
          <SearchBar value={search} onChange={onSearchChange} />
        </div>
      </div>
      <DataTable columns={resource.columns} data={data} getRowId={getRowId} />
      <Pagination page={page} pageCount={pageCount} onPageChange={onPageChange} />
    </Card>
  );
}

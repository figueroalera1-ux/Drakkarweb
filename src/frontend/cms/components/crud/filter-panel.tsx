export type FilterOption = {
  id: string;
  label: string;
  value: string;
};

export function FilterPanel({ filters, activeValue, onChange }: Readonly<{ filters: FilterOption[]; activeValue?: string; onChange: (value: string) => void }>) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          onClick={() => onChange(filter.value)}
          className={`rounded-full border px-3 py-1 text-sm ${activeValue === filter.value ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-300 bg-white text-slate-700'}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

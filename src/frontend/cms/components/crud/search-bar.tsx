export function SearchBar({ value, onChange, placeholder = 'Buscar' }: Readonly<{ value: string; onChange: (value: string) => void; placeholder?: string }>) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-950"
    />
  );
}

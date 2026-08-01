export function LoadingState({ label = 'Cargando' }: Readonly<{ label?: string }>) {
  return <div className="rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">{label}...</div>;
}

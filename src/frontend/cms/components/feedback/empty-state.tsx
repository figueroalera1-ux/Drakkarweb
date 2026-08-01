export function EmptyState({ title, description }: Readonly<{ title: string; description?: string }>) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      {description ? <p className="mt-2 text-sm text-slate-500">{description}</p> : null}
    </div>
  );
}

export function DashboardLayout({ title, description, children }: Readonly<{ title: string; description?: string; children: React.ReactNode }>) {
  return (
    <div className="grid gap-6">
      <section>
        <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
        {description ? <p className="mt-2 text-sm text-slate-600">{description}</p> : null}
      </section>
      {children}
    </div>
  );
}

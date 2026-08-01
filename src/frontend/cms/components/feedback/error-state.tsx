export function ErrorState({ title = 'Ocurrió un error', message }: Readonly<{ title?: string; message: string }>) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-800">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm">{message}</p>
    </div>
  );
}

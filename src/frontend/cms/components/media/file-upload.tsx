export function FileUpload({ onFilesSelected }: Readonly<{ onFilesSelected: (files: File[]) => void }>) {
  return (
    <label className="grid cursor-pointer gap-2 rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-600">
      Seleccionar archivos
      <input className="sr-only" type="file" multiple onChange={(event) => onFilesSelected(Array.from(event.target.files ?? []))} />
    </label>
  );
}

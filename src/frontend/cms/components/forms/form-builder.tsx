import type { CrudField } from '../../types/crud';
import { Button } from '../ui/button';

type FormBuilderProps<TEntity> = {
  fields: CrudField<TEntity>[];
  values: Record<string, unknown>;
  onChange: (name: string, value: unknown) => void;
  onSubmit: () => void;
};

export function FormBuilder<TEntity>({ fields, values, onChange, onSubmit }: FormBuilderProps<TEntity>) {
  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      {fields.map((field) => {
        const name = String(field.name);
        return (
          <label key={name} className="grid gap-2 text-sm font-medium text-slate-700">
            {field.label}
            <input
              className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-950"
              name={name}
              required={field.required}
              value={String(values[name] ?? '')}
              onChange={(event) => onChange(name, event.target.value)}
            />
          </label>
        );
      })}
      <Button type="submit">Guardar</Button>
    </form>
  );
}

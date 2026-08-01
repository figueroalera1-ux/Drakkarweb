export type CrudColumn<TEntity> = {
  key: keyof TEntity | string;
  header: string;
  render?: (entity: TEntity) => React.ReactNode;
};

export type CrudField<TEntity> = {
  name: keyof TEntity | string;
  label: string;
  input: 'text' | 'textarea' | 'number' | 'select' | 'checkbox' | 'date' | 'file';
  required?: boolean;
  options?: Array<{ label: string; value: string }>;
};

export type CrudResource<TEntity> = {
  id: string;
  label: string;
  columns: CrudColumn<TEntity>[];
  fields: CrudField<TEntity>[];
};

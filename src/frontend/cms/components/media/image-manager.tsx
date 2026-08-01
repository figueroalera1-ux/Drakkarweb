import { EmptyState } from '../feedback/empty-state';

type ManagedImage = {
  id: string;
  url: string;
  altText?: string;
};

export function ImageManager({ images }: Readonly<{ images: ManagedImage[] }>) {
  if (images.length === 0) {
    return <EmptyState title="Sin imágenes" description="La infraestructura de medios está lista para recibir archivos aprobados." />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {images.map((image) => (
        <figure key={image.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <img src={image.url} alt={image.altText ?? ''} className="aspect-square w-full object-cover" />
        </figure>
      ))}
    </div>
  );
}

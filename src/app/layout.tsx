import type { Metadata } from 'next';
import '@frontend/styles/globals.css';

export const metadata: Metadata = {
  title: 'Tiendas Drakkar',
  description: 'Plataforma comercial de Tiendas Drakkar.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}

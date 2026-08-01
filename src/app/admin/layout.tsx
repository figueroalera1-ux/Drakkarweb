import { AdminLayout } from '@frontend/cms/components/layout/admin-layout';
import { CmsProvider } from '@frontend/cms/providers/cms-provider';

export default function AdminRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <CmsProvider>
      <AdminLayout>{children}</AdminLayout>
    </CmsProvider>
  );
}

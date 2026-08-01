import { DashboardLayout } from '@frontend/cms/components/layout/dashboard-layout';
import { EmptyState } from '@frontend/cms/components/feedback/empty-state';
import { Card } from '@frontend/cms/components/ui/card';

export default function AdminDashboardPage() {
  return (
    <DashboardLayout title="Dashboard" description="Infraestructura base del CMS preparada para módulos aprobados.">
      <Card>
        <EmptyState title="Sin módulos operativos" description="Los módulos de negocio se habilitarán en fases posteriores." />
      </Card>
    </DashboardLayout>
  );
}

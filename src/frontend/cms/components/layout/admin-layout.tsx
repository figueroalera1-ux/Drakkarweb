import { NotificationCenter } from '../feedback/notification-center';
import { Sidebar } from '../navigation/sidebar';
import { TopNavigation } from '../navigation/top-navigation';

export function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <TopNavigation />
        <main className="p-4 lg:p-8">{children}</main>
      </div>
      <NotificationCenter />
    </div>
  );
}

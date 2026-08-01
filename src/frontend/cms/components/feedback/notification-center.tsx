'use client';

import { useNotifications } from '../../providers/notification-provider';
import { Button } from '../ui/button';

export function NotificationCenter() {
  const { notifications, dismiss } = useNotifications();

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed right-4 top-4 z-50 grid gap-3">
      {notifications.map((notification) => (
        <div key={notification.id} className="w-80 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
          <p className="text-sm font-semibold capitalize text-slate-900">{notification.type}</p>
          <p className="mt-1 text-sm text-slate-600">{notification.message}</p>
          <Button className="mt-3" variant="ghost" onClick={() => dismiss(notification.id)}>
            Cerrar
          </Button>
        </div>
      ))}
    </div>
  );
}

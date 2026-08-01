'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

type NotificationType = 'info' | 'success' | 'warning' | 'error';

type Notification = {
  id: string;
  type: NotificationType;
  message: string;
};

type NotificationContextValue = {
  notifications: Notification[];
  notify: (notification: Omit<Notification, 'id'>) => void;
  dismiss: (id: string) => void;
};

const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

export function NotificationProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const dismiss = useCallback((id: string) => {
    setNotifications((current) => current.filter((notification) => notification.id !== id));
  }, []);
  const notify = useCallback((notification: Omit<Notification, 'id'>) => {
    setNotifications((current) => [...current, { ...notification, id: crypto.randomUUID() }]);
  }, []);
  const value = useMemo(() => ({ notifications, notify, dismiss }), [dismiss, notifications, notify]);

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
}

export function useNotifications() {
  const value = useContext(NotificationContext);

  if (!value) {
    throw new Error('useNotifications must be used inside NotificationProvider.');
  }

  return value;
}

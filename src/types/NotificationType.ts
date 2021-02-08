export interface NotificationType {
  id: string;
  description: string;
  type?: 'default' | 'info' | 'success' | 'warning' | 'danger';
}

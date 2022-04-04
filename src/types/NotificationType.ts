export interface NotificationType {
  id: string;
  heading?: string;
  description: string;
  type?: 'default' | 'info' | 'success' | 'warning' | 'danger';
}

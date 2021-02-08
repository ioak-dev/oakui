import {Subject} from 'rxjs';
import {NotificationType} from './types/NotificationType';

export const _addNotifyEvent = new Subject<NotificationType>();
export const _removeNotifyEvent = new Subject<string>();

export const addNotification = (data: NotificationType): void => {
  _addNotifyEvent.next(data);
};
export const removeNotification = (id: string): void => {
  _removeNotifyEvent.next(id);
};

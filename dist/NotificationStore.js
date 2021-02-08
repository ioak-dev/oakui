import { Subject } from 'rxjs';
export const _addNotifyEvent = new Subject();
export const _requestRemoveNotifyEvent = new Subject();
export const _removeNotifyEvent = new Subject();
export const addNotification = (data) => {
    _addNotifyEvent.next(data);
};
export const removeNotification = (id) => {
    _requestRemoveNotifyEvent.next(id);
};
//# sourceMappingURL=NotificationStore.js.map
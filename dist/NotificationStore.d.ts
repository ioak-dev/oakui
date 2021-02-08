import { Subject } from 'rxjs';
import { NotificationType } from './types/NotificationType';
export declare const _addNotifyEvent: Subject<NotificationType>;
export declare const _requestRemoveNotifyEvent: Subject<string>;
export declare const _removeNotifyEvent: Subject<string>;
export declare const addNotification: (data: NotificationType) => void;
export declare const removeNotification: (id: string) => void;
//# sourceMappingURL=NotificationStore.d.ts.map
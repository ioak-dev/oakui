import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {repeat} from 'lit-html/directives/repeat.js';
import {globalStyles} from '../../../global-styles';
import {NotificationType} from '../../../types/NotificationType';
import {_addNotifyEvent, _removeNotifyEvent} from '../../../NotificationStore';
import {oakNotificationStyles} from './index-styles';

import '../../private/oak-internal-notification-message';

let elementIdCounter = 0;

/**
 * Notification component.
 *
 */
const customElementName = 'oak-notification';
@customElement(customElementName)
export class OakNotification extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  indicator?:
    | 'circle'
    | 'circle-dotted'
    | 'circle-outline'
    | 'ellipse'
    | 'ellipse-dotted'
    | 'ellipse-outline'
    | 'fill'
    | 'none' = 'circle';

  @property({type: Number})
  elevation?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24 = 10;

  @property({type: Boolean})
  rounded?: boolean = false;

  @property({type: Boolean})
  outlined?: boolean = false;

  @property({type: Number})
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 2;

  @property({type: Array})
  private notificationQueue: NotificationType[] = [];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  private init() {
    _addNotifyEvent.asObservable().subscribe((event: NotificationType) => {
      this.notificationQueue = [event, ...this.notificationQueue];
    });
    _removeNotifyEvent.asObservable().subscribe((notificationId: string) => {
      this.notificationQueue = this.notificationQueue.filter(
        (item) => item.id !== notificationId
      );
    });
  }

  private getClassMap(baseClass: 'base'): any {
    switch (baseClass) {
      case 'base':
        const data = {
          [customElementName]: true,
        };
        return data;
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakNotificationStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        ${repeat(
          this.notificationQueue.slice(0, 5),
          (notification) => notification.id,
          (notification) =>
            html`<oak-internal-notification-message
              .notification=${notification}
              .elevation=${this.elevation}
              ?rounded=${this.rounded}
              ?outlined=${this.outlined}
              .indicator=${this.indicator}
              .paddingVertical=${this.paddingVertical}
            ></oak-internal-notification-message>`
        )}
      </div>
    `;
  }
}

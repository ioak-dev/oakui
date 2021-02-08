import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {
  removeNotification,
  _removeNotifyEvent,
  _requestRemoveNotifyEvent,
} from '../../../NotificationStore';
import {NotificationType} from '../../../types/NotificationType';
import {oakInternalNotificationMessageBaseStyles} from './base-styles';
import {oakInternalNotificationMessageIndicatorCircleStyles} from './indicator-circle-styles';
import {oakInternalNotificationMessageIndicatorEllipseStyles} from './indicator-ellipse-styles';
import {oakInternalNotificationMessageIndicatorFillStyles} from './indicator-fill-styles';

let elementIdCounter = 0;

/**
 * oak-internal-notification-message.
 *
 */
const customElementName = 'oak-internal-notification-message';
@customElement('oak-internal-notification-message')
export class OakInternalNotificationMessage extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Object})
  notification?: NotificationType;

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
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 0;

  @property({type: Boolean})
  removing = false;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    _requestRemoveNotifyEvent
      .asObservable()
      .subscribe((notificationId: string) => {
        if (this.notification?.id === notificationId) {
          this.removing = true;
          setTimeout(() => {
            _removeNotifyEvent.next(notificationId);
          }, 100);
        }
      });
  }

  private closeNotification = () => {
    if (this.notification) {
      removeNotification(this.notification.id);
    }
  };

  private getClassMap(
    baseClass: 'base' | 'indicator' | 'content' | 'left' | 'right'
  ): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          'oak-rounded': this.rounded,
          'oak-outlined': this.outlined,
          [`oak-bs-elevation${this.elevation}`]: true,
          [`${customElementName}-${this.indicator}`]: true,
          [`${customElementName}-${this.notification?.type}`]: !!this
            .notification?.type,
          'oak-padding-horizontal2': true,
          [`oak-padding-vertical${this.paddingVertical}`]: true,
          'oak-animate__slideInLeft': !this.removing,
          'oak-animate__slideOutLeft': this.removing,
        };
      case 'indicator':
        return {
          [`${customElementName}-${baseClass}`]: true,
          [`${customElementName}-${this.indicator}`]: true,
          [`${customElementName}-${this.notification?.type}`]: !!this
            .notification?.type,
        };
      case 'content':
        return {
          [`${customElementName}-${baseClass}`]: true,
        };
      case 'left':
        return {
          [`${customElementName}-left`]: true,
          'oak-two-liner': true,
        };
      case 'right':
        return {
          [`${customElementName}-right`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [
      ...globalStyles,
      oakInternalNotificationMessageBaseStyles,
      oakInternalNotificationMessageIndicatorCircleStyles,
      oakInternalNotificationMessageIndicatorEllipseStyles,
      oakInternalNotificationMessageIndicatorFillStyles,
    ];
  }

  render() {
    return this.notification
      ? html`
          <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
              ${
                this.indicator
                  ? html`<div
                      class=${classMap(this.getClassMap('indicator'))}
                    ></div>`
                  : html``
              }
              <div class=${classMap(this.getClassMap('content'))}>
                <div class=${classMap(this.getClassMap('left'))}>
                  ${this.notification.description}
                </div>
                <div class=${classMap(this.getClassMap('right'))}>
                  <oak-link
                    block
                    blockSize="xsmall"
                    color="default"
                    @link-click=${this.closeNotification}
                    >Close</oak-link
                  >
                </div>
              </div>
            </div>
          </div>
        `
      : html``;
  }
}

import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {repeat} from 'lit-html/directives/repeat.js';
import {globalStyles} from '../../../global-styles';
import {NotificationType} from '../../../types/NotificationType';
import {
  _addNotifyEvent,
  _removeNotifyEvent,
  _requestRemoveNotifyEvent,
} from '../../../NotificationStore';
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
    | 'outline'
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

  @property({type: String})
  bodyTypographyVariant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline'
    | 'inherit' = 'inherit';

  @property({type: String})
  headingTypographyVariant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline'
    | 'inherit' = 'h6';

  @property({type: Number})
  distanceFromBaseHorizontal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 2;

  @property({type: Number})
  distanceFromBaseVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 2;

  @property({type: Number})
  distanceFromBaseHorizontalMobile?:
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
    | null = null;

  @property({type: Number})
  distanceFromBaseVerticalMobile?:
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
    | null = null;

  @property({type: Number})
  displayCount?: number = 5;

  @property({type: String})
  insert?: 'top' | 'bottom' = 'bottom';

  @property({type: String})
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center' = 'bottom-right';

  @property({type: String})
  positionOnMobile?: 'top-center' | 'bottom-center' | null = null;

  @property({type: String})
  closeLabel? = 'CLOSE';

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

  private getClassMap(baseClass: 'base' | 'container'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
        };
      case 'container':
        return {
          [`${customElementName}-${baseClass}`]: true,
          [`${customElementName}__position--${this.position}`]: true,
          [`${customElementName}__position--mobile-${
            this.positionOnMobile === null
              ? this.position
              : this.positionOnMobile
          }`]: true,
          [`${customElementName}__distance-from-base-x--${this.distanceFromBaseHorizontal}`]: true,
          [`${customElementName}__distance-from-base-y--${this.distanceFromBaseVertical}`]: true,
          [`${customElementName}__distance-from-base-x-mobile--${
            this.distanceFromBaseHorizontalMobile === null
              ? this.distanceFromBaseHorizontal
              : this.distanceFromBaseHorizontalMobile
          }`]: true,
          [`${customElementName}__distance-from-base-y-mobile--${
            this.distanceFromBaseVerticalMobile === null
              ? this.distanceFromBaseVertical
              : this.distanceFromBaseVerticalMobile
          }`]: true,
        };
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
        <div
          class=${classMap(this.getClassMap('container'))}
          id=${this.elementId}
        >
          ${repeat(
            this.insert === 'bottom'
              ? this.notificationQueue.slice(0, this.displayCount).reverse()
              : this.notificationQueue.slice(0, this.displayCount),
            (notification) => notification.id,
            (notification) =>
              html`<oak-internal-notification-message
                .notification=${notification}
                .elevation=${this.elevation}
                ?rounded=${this.rounded}
                ?outlined=${this.outlined}
                .indicator=${this.indicator}
                .paddingVertical=${this.paddingVertical}
                .headingTypographyVariant=${this.headingTypographyVariant}
                .bodyTypographyVariant=${this.bodyTypographyVariant}
                .closeLabel=${this.closeLabel}
              ></oak-internal-notification-message>`
          )}
        </div>
      </div>
    `;
  }
}

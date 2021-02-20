import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../styles/global-styles';
import '../../../component/oak-typography';
import '../../../component/oak-link';
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
import {oakInternalNotificationMessageIndicatorOutlineStyles} from './indicator-outline-styles';

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
  indicator:
    | 'circle'
    | 'circle-outline'
    | 'ellipse'
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
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 0;

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

  @property({type: Boolean})
  removing = false;

  @property({type: String})
  closeLabel? = 'CLOSE';

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
          this.updateScrollHeight(true);
          setTimeout(() => {
            _removeNotifyEvent.next(notificationId);
          }, 250);
        }
      });
    setTimeout(() => this.updateScrollHeight());
  }

  updateScrollHeight = (close = false) => {
    const element = this.shadowRoot?.getElementById(this.elementId);
    if (element) {
      element.style.maxHeight = close ? '0px' : `${element.scrollHeight}px`;
    }
  };

  private closeNotification = () => {
    if (this.notification) {
      removeNotification(this.notification.id);
    }
  };

  private getClassMap(
    baseClass:
      | 'base'
      | 'wrapper'
      | 'container'
      | 'indicator'
      | 'content'
      | 'left'
      | 'right'
  ): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          [`oak-bs-elevation${this.elevation}`]: true,
          'oak-rounded': this.rounded,
          'oak-outlined': this.outlined,
          [`${customElementName}--${this.indicator}`]: [
            'fill',
            'outline',
          ].includes(this.indicator),
          [`${customElementName}--${this.notification?.type}`]: !!this
            .notification?.type,
        };
      case 'container':
        return {
          [`${customElementName}__${baseClass}`]: true,
          'oak-padding-horizontal2': true,
          [`oak-padding-vertical${this.paddingVertical}`]: true,
          // [`${customElementName}__${baseClass}--${this.indicator}`]: ![
          //   'fill',
          //   'outline',
          // ].includes(this.indicator),
        };
      case 'indicator':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--${this.indicator}`]: true,
          [`${customElementName}__${baseClass}--${this.notification?.type}`]: !!this
            .notification?.type,
        };
      case 'content':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'left':
        return {
          [`${customElementName}__left`]: true,
          'oak-two-liner': true,
        };
      case 'right':
        return {
          [`${customElementName}__right`]: true,
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
      oakInternalNotificationMessageIndicatorOutlineStyles,
    ];
  }

  render() {
    return this.notification
      ? html`
          <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
              <div class=${classMap(this.getClassMap('container'))}>
                ${
                  this.indicator
                    ? html`<div
                        class=${classMap(this.getClassMap('indicator'))}
                      ></div>`
                    : html``
                }
                <div class=${classMap(this.getClassMap('content'))}>
                  <div class=${classMap(this.getClassMap('left'))}>
                    ${
                      this.notification.heading
                        ? html`<oak-typography
                            variant=${this.headingTypographyVariant}
                          >
                            ${this.notification.heading}
                          </oak-typography>`
                        : html``
                    }
                    <oak-typography variant=${this.bodyTypographyVariant}>
                      ${this.notification.description}
                    </oak-typography>
                  </div>
                  <div class=${classMap(this.getClassMap('right'))}>
                    <oak-button
                        size="xsmall"
                        variant=${
                          this.indicator !== 'fill' || !this.notification.type
                            ? 'block'
                            : 'appear'
                        }
                        theme=${
                          this.indicator !== 'fill' || !this.notification.type
                            ? 'info'
                            : this.notification.type
                        }
                        @button-click=${this.closeNotification}
                        >${this.closeLabel}</oak-button
                      >
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      : html``;
  }
}

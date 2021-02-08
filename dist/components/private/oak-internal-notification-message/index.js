var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { globalStyles } from '../../../global-styles';
import { removeNotification, _removeNotifyEvent, _requestRemoveNotifyEvent, } from '../../../NotificationStore';
import { oakInternalNotificationMessageBaseStyles } from './base-styles';
import { oakInternalNotificationMessageIndicatorCircleStyles } from './indicator-circle-styles';
import { oakInternalNotificationMessageIndicatorEllipseStyles } from './indicator-ellipse-styles';
import { oakInternalNotificationMessageIndicatorFillStyles } from './indicator-fill-styles';
let elementIdCounter = 0;
/**
 * oak-internal-notification-message.
 *
 */
const customElementName = 'oak-internal-notification-message';
let OakInternalNotificationMessage = class OakInternalNotificationMessage extends LitElement {
    constructor() {
        super();
        this.elementId = `${customElementName}-${elementIdCounter++}`;
        this.indicator = 'circle';
        this.elevation = 10;
        this.rounded = false;
        this.outlined = false;
        this.paddingVertical = 0;
        this.removing = false;
        this.closeNotification = () => {
            if (this.notification) {
                removeNotification(this.notification.id);
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        _requestRemoveNotifyEvent
            .asObservable()
            .subscribe((notificationId) => {
            var _a;
            if (((_a = this.notification) === null || _a === void 0 ? void 0 : _a.id) === notificationId) {
                this.removing = true;
                setTimeout(() => {
                    _removeNotifyEvent.next(notificationId);
                }, 100);
            }
        });
    }
    getClassMap(baseClass) {
        var _a, _b, _c, _d;
        switch (baseClass) {
            case 'base':
                return {
                    [customElementName]: true,
                    'oak-rounded': this.rounded,
                    'oak-outlined': this.outlined,
                    [`oak-bs-elevation${this.elevation}`]: true,
                    [`${customElementName}-${this.indicator}`]: true,
                    [`${customElementName}-${(_a = this.notification) === null || _a === void 0 ? void 0 : _a.type}`]: !!((_b = this
                        .notification) === null || _b === void 0 ? void 0 : _b.type),
                    'oak-padding-horizontal2': true,
                    [`oak-padding-vertical${this.paddingVertical}`]: true,
                    'oak-animate__slideInLeft': !this.removing,
                    'oak-animate__slideOutLeft': this.removing,
                };
            case 'indicator':
                return {
                    [`${customElementName}-${baseClass}`]: true,
                    [`${customElementName}-${this.indicator}`]: true,
                    [`${customElementName}-${(_c = this.notification) === null || _c === void 0 ? void 0 : _c.type}`]: !!((_d = this
                        .notification) === null || _d === void 0 ? void 0 : _d.type),
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
            ? html `
          <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
              ${this.indicator
                ? html `<div
                      class=${classMap(this.getClassMap('indicator'))}
                    ></div>`
                : html ``}
              <div class=${classMap(this.getClassMap('content'))}>
                <div class=${classMap(this.getClassMap('left'))}>
                  ${this.notification.description}-${this.notification.id}
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
            : html ``;
    }
};
__decorate([
    property({ type: Object })
], OakInternalNotificationMessage.prototype, "notification", void 0);
__decorate([
    property({ type: String })
], OakInternalNotificationMessage.prototype, "indicator", void 0);
__decorate([
    property({ type: Number })
], OakInternalNotificationMessage.prototype, "elevation", void 0);
__decorate([
    property({ type: Boolean })
], OakInternalNotificationMessage.prototype, "rounded", void 0);
__decorate([
    property({ type: Boolean })
], OakInternalNotificationMessage.prototype, "outlined", void 0);
__decorate([
    property({ type: Number })
], OakInternalNotificationMessage.prototype, "paddingVertical", void 0);
__decorate([
    property({ type: Boolean })
], OakInternalNotificationMessage.prototype, "removing", void 0);
OakInternalNotificationMessage = __decorate([
    customElement('oak-internal-notification-message')
], OakInternalNotificationMessage);
export { OakInternalNotificationMessage };
//# sourceMappingURL=index.js.map
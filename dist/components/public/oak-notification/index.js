var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { repeat } from 'lit-html/directives/repeat.js';
import { globalStyles } from '../../../global-styles';
import { _addNotifyEvent, _removeNotifyEvent, } from '../../../NotificationStore';
import { oakNotificationStyles } from './index-styles';
import '../../private/oak-internal-notification-message';
let elementIdCounter = 0;
/**
 * Notification component.
 *
 */
const customElementName = 'oak-notification';
let OakNotification = class OakNotification extends LitElement {
    constructor() {
        super();
        this.elementId = `${customElementName}-${elementIdCounter++}`;
        this.indicator = 'circle';
        this.elevation = 10;
        this.rounded = false;
        this.outlined = false;
        this.paddingVertical = 2;
        this.notificationQueue = [];
    }
    connectedCallback() {
        super.connectedCallback();
        this.init();
    }
    init() {
        _addNotifyEvent.asObservable().subscribe((event) => {
            this.notificationQueue = [event, ...this.notificationQueue];
        });
        _removeNotifyEvent.asObservable().subscribe((notificationId) => {
            this.notificationQueue = this.notificationQueue.filter((item) => item.id !== notificationId);
        });
    }
    getClassMap(baseClass) {
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
        return html `
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        ${repeat(this.notificationQueue.slice(0, 5), (notification) => notification.id, (notification) => html `<oak-internal-notification-message
              .notification=${notification}
              .elevation=${this.elevation}
              ?rounded=${this.rounded}
              ?outlined=${this.outlined}
              .indicator=${this.indicator}
              .paddingVertical=${this.paddingVertical}
            ></oak-internal-notification-message>`)}
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], OakNotification.prototype, "indicator", void 0);
__decorate([
    property({ type: Number })
], OakNotification.prototype, "elevation", void 0);
__decorate([
    property({ type: Boolean })
], OakNotification.prototype, "rounded", void 0);
__decorate([
    property({ type: Boolean })
], OakNotification.prototype, "outlined", void 0);
__decorate([
    property({ type: Number })
], OakNotification.prototype, "paddingVertical", void 0);
__decorate([
    property({ type: Array })
], OakNotification.prototype, "notificationQueue", void 0);
OakNotification = __decorate([
    customElement(customElementName)
], OakNotification);
export { OakNotification };
//# sourceMappingURL=index.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { containerScrolledSubject } from '../../../events/ContainerScrolledEvent';
import { globalStyles } from '../../../global-styles';
import { oakInternalModalBodyStyles } from './index-styles';
let elementIdCounter = 0;
/**
 * Form element error.
 *
 */
let OakModalBody = class OakModalBody extends LitElement {
    constructor() {
        super();
        this.elementId = `oak-internal-modal-body-${elementIdCounter++}`;
        this.heading = '';
        this.init = () => {
            var _a, _b;
            (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.elementId)) === null || _b === void 0 ? void 0 : _b.addEventListener('scroll', () => containerScrolledSubject.next({
                component: 'oak-internal-modal-body',
                id: this.elementId,
            }));
        };
    }
    connectedCallback() {
        super.connectedCallback();
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.init();
    }
    static get styles() {
        return [...globalStyles, oakInternalModalBodyStyles];
    }
    render() {
        return html `
      <div class="oak-internal-modal-body" id=${this.elementId}>
        <slot></slot>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], OakModalBody.prototype, "heading", void 0);
OakModalBody = __decorate([
    customElement('oak-internal-modal-body')
], OakModalBody);
export { OakModalBody };
//# sourceMappingURL=index.js.map
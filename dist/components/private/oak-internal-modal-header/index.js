var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { globalStyles } from '../../../global-styles';
import ModalEvent from '../../../types/ModalEventTypes';
import { oakInternalModalHeaderStyles } from './index-styles';
let elementIdCounter = 0;
/**
 * Form element error.
 *
 */
let OakModalHeader = class OakModalHeader extends LitElement {
    constructor() {
        super();
        this.elementId = `oak-internal-modal-header-${elementIdCounter++}`;
        this.heading = "";
        this.closeModal = () => {
            this.propagateEvent(ModalEvent.CLOSE_MODAL, { value: true });
        };
        this.propagateEvent = (eventType, event) => {
            this.dispatchEvent(new CustomEvent(eventType, {
                bubbles: true,
                composed: true,
                detail: {
                    id: this.elementId,
                    name: eventType,
                    value: event.value,
                },
            }));
        };
    }
    static get styles() {
        return [...globalStyles, oakInternalModalHeaderStyles];
    }
    render() {
        return html `
      <div class="oak-internal-modal-header" id=${this.elementId}>
        <div class="left">
          <div class="label one-liner">${this.heading}</div>
        </div>
        <div class="right">
          <div @click=${this.closeModal}>
            <span class="material-icons">close</span>
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], OakModalHeader.prototype, "heading", void 0);
OakModalHeader = __decorate([
    customElement('oak-internal-modal-header')
], OakModalHeader);
export { OakModalHeader };
//# sourceMappingURL=index.js.map
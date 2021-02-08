var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { globalStyles } from '../../../global-styles';
import ModalEvent from '../../../types/ModalEventTypes';
import { oakModalStyles } from './index-styles';
import '../../private/oak-internal-modal-header';
import '../../private/oak-internal-modal-body';
import '../../private/oak-internal-modal-footer';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
let elementIdCounter = 0;
/**
 * Text box form element.
 *
 */
let OakModal = class OakModal extends LitElement {
    constructor() {
        super(...arguments);
        this.elementId = `oak-modal-${elementIdCounter++}`;
        this.showModal = false;
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
    connectedCallback() {
        super.connectedCallback();
        this.init();
    }
    init() {
        fromEvent(window, 'keydown')
            .pipe(map((event) => event))
            .subscribe((event) => {
            if (['Escape'].includes(event.key)) {
                this.closeModal();
            }
        });
    }
    getClassMap(baseClass) {
        switch (baseClass) {
            case 'oak-modal-root':
                return {
                    'oak-modal-root': true,
                    show: this.showModal,
                    hide: !this.showModal,
                };
            case 'container':
                return {
                    container: true,
                    hidetext: !this.showModal,
                };
            default:
                return {};
        }
    }
    static get styles() {
        return [...globalStyles, oakModalStyles];
    }
    render() {
        return html ` ${this.showModal
            ? html `
          <div
            id=${this.elementId}
            class=${classMap(this.getClassMap('oak-modal-root'))}
          >
            <div class="oak-modal">
              <div class="backdrop-fade" @click=${this.closeModal}></div>
              <div class="modal">
                <div class=${classMap(this.getClassMap('container'))}>
                  <oak-internal-modal-header
                    heading=${this.heading}
                  ></oak-internal-modal-header>
                  <oak-internal-modal-body
                    ><slot name="body"></slot
                  ></oak-internal-modal-body>
                  <oak-internal-modal-footer
                    ><slot name="footer"></slot
                  ></oak-internal-modal-footer>
                </div>
              </div>
            </div>
          </div>
        `
            : html ``}`;
    }
};
__decorate([
    property({ type: Boolean })
], OakModal.prototype, "showModal", void 0);
__decorate([
    property({ type: String })
], OakModal.prototype, "heading", void 0);
OakModal = __decorate([
    customElement('oak-modal')
], OakModal);
export { OakModal };
//# sourceMappingURL=index.js.map
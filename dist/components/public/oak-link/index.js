var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { globalStyles } from '../../../global-styles';
import { oakLinkStyles } from './index-styles';
import '../oak-typography';
import { LINK_CLICK_EVENT } from '../../../types/LinkEventTypes';
import { oakLinkSizeStyles } from './size-styles';
import { oakButtonSizeStyles } from '../oak-button/size-styles';
import { oakLinkShapeStyles } from './shape-styles';
import { oakButtonShapeStyles } from '../oak-button/shape-styles';
let elementIdCounter = 0;
/**
 * Hyper link component.
 *
 */
const customElementName = 'oak-link';
let OakLink = class OakLink extends LitElement {
    constructor() {
        super();
        this.elementId = `${customElementName}-${elementIdCounter++}`;
        this.href = null;
        this.underline = 'hover';
        this.block = false;
        this.blockSize = 'small';
        this.blockShape = 'rectangle';
        this.color = 'inherit';
        /**
         * Set the text-align on the component. Applicable only when block = false
         */
        this.align = 'inherit';
        /**
         * Controls the display type. Applicable only when block = false
         */
        this.display = 'initial';
        /**
         * Variant type for the typography settings. Applicable only when block = false
         */
        this.variant = 'body1';
        this.handleClick = (event) => {
            this.propagateEvent(LINK_CLICK_EVENT, event);
        };
        this.propagateEvent = (eventName, event) => {
            this.dispatchEvent(new CustomEvent(eventName, {
                bubbles: true,
                composed: true,
                detail: {
                    id: this.elementId,
                    event: event,
                },
            }));
        };
    }
    getClassMap(baseClass) {
        switch (baseClass) {
            case 'base':
                return {
                    [customElementName]: true,
                    [`${customElementName}-${this.underline}`]: true,
                    [`oak-color-fg-${this.color}`]: true,
                    [`${this.color}`]: true,
                    [`${customElementName}-block`]: this.block,
                    [`size-${this.blockSize}`]: this.block,
                    [`shape-${this.blockShape}`]: this.block,
                    icon: this.block && this.blockShape === 'icon',
                };
            default:
                return {};
        }
    }
    static get styles() {
        return [
            ...globalStyles,
            oakLinkStyles,
            oakLinkSizeStyles,
            oakButtonSizeStyles,
            oakLinkShapeStyles,
            oakButtonShapeStyles,
        ];
    }
    render() {
        return html `<div class=${`${customElementName}--container`}>
      ${this.href && this.href !== '#'
            ? html `<a
            class=${classMap(this.getClassMap('base'))}
            id=${this.elementId}
            href=${this.href}
          >
            ${this.block
                ? html `<slot></slot>`
                : html ` <oak-typography
                  .align=${this.align}
                  .display=${this.display}
                  .color=${this.color}
                  .variant=${this.variant}
                >
                  <slot></slot>
                </oak-typography>`}
          </a>`
            : html ` <button
            class=${classMap(this.getClassMap('base'))}
            @click=${this.handleClick}
            id=${this.elementId}
            type="button"
          >
            ${this.block
                ? html `<slot></slot>`
                : html `<oak-typography
                  .align=${this.align}
                  .display=${this.display}
                  .color=${this.color}
                  .variant=${this.variant}
                >
                  <slot></slot>
                </oak-typography>`}
          </button>`}
    </div>`;
    }
};
__decorate([
    property({ type: String })
], OakLink.prototype, "href", void 0);
__decorate([
    property({ type: String })
], OakLink.prototype, "underline", void 0);
__decorate([
    property({ type: Boolean })
], OakLink.prototype, "block", void 0);
__decorate([
    property({ type: String })
], OakLink.prototype, "blockSize", void 0);
__decorate([
    property({ type: String })
], OakLink.prototype, "blockShape", void 0);
__decorate([
    property({ type: String })
], OakLink.prototype, "color", void 0);
__decorate([
    property({ type: String })
], OakLink.prototype, "align", void 0);
__decorate([
    property({ type: String })
], OakLink.prototype, "display", void 0);
__decorate([
    property({ type: String })
], OakLink.prototype, "variant", void 0);
OakLink = __decorate([
    customElement(customElementName)
], OakLink);
export { OakLink };
//# sourceMappingURL=index.js.map
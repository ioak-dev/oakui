var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { globalStyles } from '../../../global-styles';
import { oakCardStyles } from './index-styles';
let elementIdCounter = 0;
/**
 * Card component.
 *
 */
const customElementName = 'oak-card';
let OakCard = class OakCard extends LitElement {
    constructor() {
        super();
        this.elementId = `${customElementName}-${elementIdCounter++}`;
        this.elevation = 0;
        this.rounded = false;
        this.variant = null;
        this.fillType = 'fill';
        this.paddingHorizontal = 0;
        this.paddingVertical = 0;
        this.heading = null;
        this.headerVariant = 'subtle';
    }
    getClassMap(baseClass) {
        switch (baseClass) {
            case 'base':
                const data = {
                    [customElementName]: true,
                    [`oak-bs-elevation${this.elevation}`]: true,
                    [`oak-padding-horizontal${this.paddingHorizontal}`]: true,
                    [`oak-padding-vertical${this.paddingVertical}`]: true,
                    'oak-rounded': this.rounded,
                    'oak-container-nofill': this.fillType === 'none',
                };
                if (this.variant) {
                    data[`oak-${this.variant}`] = true;
                }
                return data;
            case 'header':
                return {
                    [`${customElementName}--header-${this.headerVariant || 'subtle'}`]: true,
                };
            case 'header-title':
                return {
                    [`${customElementName}--header-title`]: true,
                };
            case 'body':
                return {
                    [`${customElementName}--body`]: true,
                };
            case 'app-text':
                return {
                    [`${customElementName}--app-text`]: true,
                };
            default:
                return {};
        }
    }
    static get styles() {
        return [...globalStyles, oakCardStyles];
    }
    render() {
        return html `
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        ${this.heading &&
            html `<div class=${classMap(this.getClassMap('header'))}>
          <div class=${classMap(this.getClassMap('header-title'))}>
            ${this.heading}
          </div>
        </div>`}
        <div class=${classMap(this.getClassMap('body'))}>
          <div class=${classMap(this.getClassMap('app-text'))}>
            <slot></slot>
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Number })
], OakCard.prototype, "elevation", void 0);
__decorate([
    property({ type: Boolean })
], OakCard.prototype, "rounded", void 0);
__decorate([
    property({ type: String })
], OakCard.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], OakCard.prototype, "fillType", void 0);
__decorate([
    property({ type: Number })
], OakCard.prototype, "paddingHorizontal", void 0);
__decorate([
    property({ type: Number })
], OakCard.prototype, "paddingVertical", void 0);
__decorate([
    property({ type: String })
], OakCard.prototype, "heading", void 0);
__decorate([
    property({ type: String })
], OakCard.prototype, "headerVariant", void 0);
OakCard = __decorate([
    customElement(customElementName)
], OakCard);
export { OakCard };
//# sourceMappingURL=index.js.map
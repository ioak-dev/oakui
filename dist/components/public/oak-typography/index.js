var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { globalStyles } from '../../../global-styles';
import { oakTypographyStyles } from './index-styles';
let elementIdCounter = 0;
/**
 * Card component.
 *
 */
const customElementName = 'oak-typography';
let OakTypography = class OakTypography extends LitElement {
    constructor() {
        super();
        this.elementId = `${customElementName}-${elementIdCounter++}`;
        this.color = 'inherit';
        /**
         * Set the text-align on the component.
         */
        this.align = 'inherit';
        /**
         * Controls the display type
         */
        this.display = 'initial';
        /**
         * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
         * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
         */
        this.noWrap = false;
        /**
         * If true, the text will have a bottom margin.
         */
        this.paragraph = false;
        /**
         * 	If true, the text will have a bottom margin.
         */
        this.gutterBottom = false;
        this.variant = 'body1';
    }
    getClassMap(baseClass) {
        switch (baseClass) {
            case 'base':
                return {
                    [customElementName]: true,
                    'oak-typography-root': true,
                    [`oak-typography-${this.variant}`]: true,
                    [`oak-typography-align-${this.align}`]: true,
                    [`oak-typography-display-${this.display}`]: true,
                    'oak-typography-paragraph': this.paragraph,
                    'oak-typography-noWrap': this.noWrap,
                    'oak-typography-gutter-bottom': this.gutterBottom,
                    [`oak-color-fg-${this.color}`]: true,
                };
            default:
                return {};
        }
    }
    static get styles() {
        return [...globalStyles, oakTypographyStyles];
    }
    render() {
        return html `${[
            'subtitle1',
            'subtitle2',
            'body1',
            'body2',
            'caption',
            'overline',
            'inherit',
        ].includes(this.variant)
            ? html ` <p
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </p>`
            : html ``}
    ${this.variant === 'h1'
            ? html ` <h1
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h1>`
            : html ``}
    ${this.variant === 'h2'
            ? html ` <h2
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h2>`
            : html ``}
    ${this.variant === 'h3'
            ? html ` <h3
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h3>`
            : html ``}
    ${this.variant === 'h4'
            ? html ` <h4
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h4>`
            : html ``}
    ${this.variant === 'h5'
            ? html ` <h5
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h5>`
            : html ``}
    ${this.variant === 'h6'
            ? html ` <h6
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h6>`
            : html ``}`;
    }
};
__decorate([
    property({ type: String })
], OakTypography.prototype, "color", void 0);
__decorate([
    property({ type: String })
], OakTypography.prototype, "align", void 0);
__decorate([
    property({ type: String })
], OakTypography.prototype, "display", void 0);
__decorate([
    property({ type: Boolean })
], OakTypography.prototype, "noWrap", void 0);
__decorate([
    property({ type: Boolean })
], OakTypography.prototype, "paragraph", void 0);
__decorate([
    property({ type: Boolean })
], OakTypography.prototype, "gutterBottom", void 0);
__decorate([
    property({ type: String })
], OakTypography.prototype, "variant", void 0);
OakTypography = __decorate([
    customElement(customElementName)
], OakTypography);
export { OakTypography };
//# sourceMappingURL=index.js.map
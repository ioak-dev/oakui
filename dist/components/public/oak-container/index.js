var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { globalStyles } from '../../../global-styles';
import { oakContainerStyles } from './index-styles';
let elementIdCounter = 0;
/**
 * Form element error.
 *
 */
let OakContainer = class OakContainer extends LitElement {
    constructor() {
        super();
        this.elementId = `oak-container-${elementIdCounter++}`;
        this.elevation = 0;
        this.rounded = false;
        this.variant = null;
        this.fillType = 'fill';
        this.paddingHorizontal = 0;
        this.paddingVertical = 0;
    }
    getClassMap(baseClass) {
        switch (baseClass) {
            case 'base':
                const data = {
                    'oak-container': true,
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
            default:
                return {};
        }
    }
    static get styles() {
        return [...globalStyles, oakContainerStyles];
    }
    render() {
        return html `
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <slot></slot>
      </div>
    `;
    }
};
__decorate([
    property({ type: Number })
], OakContainer.prototype, "elevation", void 0);
__decorate([
    property({ type: Boolean })
], OakContainer.prototype, "rounded", void 0);
__decorate([
    property({ type: String })
], OakContainer.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], OakContainer.prototype, "fillType", void 0);
__decorate([
    property({ type: Number })
], OakContainer.prototype, "paddingHorizontal", void 0);
__decorate([
    property({ type: Number })
], OakContainer.prototype, "paddingVertical", void 0);
OakContainer = __decorate([
    customElement('oak-container')
], OakContainer);
export { OakContainer };
//# sourceMappingURL=index.js.map
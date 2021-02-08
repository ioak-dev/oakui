var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { globalStyles } from '../../../global-styles';
import '../../private/oak-internal-label';
import { BUTTON_CLICK_EVENT } from '../../../types/ButtonEventTypes';
import { formControlSubmitSubject } from '../../../events/FormControlSubmitEvent';
import { formControlResetSubject } from '../../../events/FormControlResetEvent';
import { oakButtonSizeStyles } from './size-styles';
import { oakButtonShapeStyles } from './shape-styles';
import { oakButtonBaseStyles } from './base-styles';
import { oakButtonVariantAppearStyles } from './variant-appear-styles';
import { oakButtonVariantRegularStyles } from './variant-regular-styles';
import { oakButtonVariantDisappearStyles } from './variant-disappear-styles';
import { oakButtonVariantDramaStyles } from './variant-drama-styles';
import { oakButtonVariantOutlineStyles } from './variant-outline-styles';
import { oakButtonVariantBlockStyles } from './variant-block-styles';
import { oakButtonVariantDisabledStyles } from './variant-disabled-styles';
let elementIdCounter = 0;
/**
 * Button element.
 *
 */
let OakButton = class OakButton extends LitElement {
    constructor() {
        super();
        this.elementId = `oak-button-${elementIdCounter++}`;
        this.variant = 'regular';
        this.theme = 'primary';
        this.size = 'small';
        this.shape = 'rectangle';
        this.semitransparent = false;
        this.type = 'button';
        this.computeStyle = () => {
            let style = `${this.theme} ${this.variant}`;
            if (this.shape === 'icon') {
                style += ' icon';
            }
            if (this.semitransparent) {
                style += ' semitransparent';
            }
            style += ` size-${this.size}`;
            style += ` shape-${this.shape}`;
            return style;
        };
        this.handleClick = (event) => {
            switch (this.type) {
                case 'submit':
                    this.handleSubmit();
                    break;
                case 'reset':
                    this.handleReset();
                    break;
                default:
                    this.propagateEvent(BUTTON_CLICK_EVENT, event);
                    break;
            }
        };
        this.handleSubmit = () => {
            if (this.formGroupName) {
                formControlSubmitSubject.next({
                    formGroupName: this.formGroupName,
                });
            }
        };
        this.handleReset = () => {
            if (this.formGroupName) {
                formControlResetSubject.next({
                    formGroupName: this.formGroupName,
                });
            }
        };
        this.propagateEvent = (eventName, event) => {
            this.dispatchEvent(new CustomEvent(eventName, {
                bubbles: true,
                composed: true,
                detail: {
                    id: event.srcElement.id,
                    formGroup: this.formGroupName,
                },
            }));
        };
    }
    static get styles() {
        return [
            ...globalStyles,
            oakButtonBaseStyles,
            oakButtonSizeStyles,
            oakButtonShapeStyles,
            oakButtonVariantAppearStyles,
            oakButtonVariantRegularStyles,
            oakButtonVariantDisappearStyles,
            oakButtonVariantBlockStyles,
            oakButtonVariantDramaStyles,
            oakButtonVariantOutlineStyles,
            oakButtonVariantDisabledStyles,
        ];
    }
    render() {
        return html `
      <button
        class=${`oak-button ${this.computeStyle()}`}
        @click=${this.handleClick}
        id=${this.elementId}
        type=${this.type}
      >
        <div class="button-label-container">
          <slot></slot>
        </div>
      </button>
    `;
    }
};
__decorate([
    property({ type: String })
], OakButton.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], OakButton.prototype, "theme", void 0);
__decorate([
    property({ type: String })
], OakButton.prototype, "size", void 0);
__decorate([
    property({ type: String })
], OakButton.prototype, "shape", void 0);
__decorate([
    property({ type: Boolean })
], OakButton.prototype, "semitransparent", void 0);
__decorate([
    property({ type: String })
], OakButton.prototype, "type", void 0);
__decorate([
    property({ type: String })
], OakButton.prototype, "formGroupName", void 0);
OakButton = __decorate([
    customElement('oak-button')
], OakButton);
export { OakButton };
//# sourceMappingURL=index.js.map
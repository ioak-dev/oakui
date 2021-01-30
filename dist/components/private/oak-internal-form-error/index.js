var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { globalStyles } from '../../../global-styles';
import { getError } from '../../../validation/ErrorMessages';
import { oakInternalFormErrorStyles } from './index-styles';
/**
 * Form element error.
 *
 */
let OakInternalFormError = class OakInternalFormError extends LitElement {
    constructor() {
        super();
        this.errors = [];
    }
    static get styles() {
        return [...globalStyles, oakInternalFormErrorStyles];
    }
    render() {
        return html `
      <div class="formelement-error oak-rounded">
        ${this.errors.map((error) => html `
              <div>
                ${getError(error)}
              </div>
            `)}
      </div>
    `;
    }
};
__decorate([
    property({ type: Array })
], OakInternalFormError.prototype, "errors", void 0);
OakInternalFormError = __decorate([
    customElement('oak-internal-form-error')
], OakInternalFormError);
export { OakInternalFormError };
//# sourceMappingURL=index.js.map
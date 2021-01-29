var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { globalStyles } from '../../../global-styles';
import { oakFormActionsContainerStyles } from './index-styles';
let elementIdCounter = 0;
/**
 * Form actions list container.
 *
 */
let OakInternalModalFooter = class OakInternalModalFooter extends LitElement {
    constructor() {
        super();
        this.elementId = `oak-form-actions-container-${elementIdCounter++}`;
        this.align = 'right';
    }
    getClassMap(baseClass) {
        switch (baseClass) {
            case 'base':
                return {
                    'oak-form-actions-container': true,
                    [this.align]: true,
                };
            default:
                return {};
        }
    }
    static get styles() {
        return [...globalStyles, oakFormActionsContainerStyles];
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
    property({ type: String })
], OakInternalModalFooter.prototype, "align", void 0);
OakInternalModalFooter = __decorate([
    customElement('oak-form-actions-container')
], OakInternalModalFooter);
export { OakInternalModalFooter };
//# sourceMappingURL=index.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { globalStyles } from '../../../global-styles';
import { oakPopoverStyles } from './index-styles';
import '../oak-button/index';
let elementIdCounter = 0;
/**
 * Popover component.
 *
 */
let OakPopover = class OakPopover extends LitElement {
    constructor() {
        super();
        this.elementId = `oak-popover-${elementIdCounter++}`;
        this._showPopover = false;
    }
    openPopover() {
        console.log('test');
        this._showPopover = !this._showPopover;
    }
    getClassMap(baseClass) {
        switch (baseClass) {
            case 'base':
                const data = {
                    'oak-popover': true,
                };
                return data;
            default:
                return {};
        }
    }
    static get styles() {
        return [...globalStyles, oakPopoverStyles];
    }
    render() {
        return html `
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <div class="oak-popover--container">
          <oak-button
            theme="primary"
            variant="appear"
            @button-click=${this.openPopover}
            >open menu</oak-button
          >
          ${this._showPopover
            ? html ` <div class="content">
                  <slot></slot>
                </div>`
            : html ``}
        </div>
      </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], OakPopover.prototype, "_showPopover", void 0);
OakPopover = __decorate([
    customElement('oak-popover')
], OakPopover);
export { OakPopover };
//# sourceMappingURL=index.js.map
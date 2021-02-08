var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { globalStyles } from '../../../global-styles';
import '../../private/oak-internal-select-native';
import '../../private/oak-internal-select-modern';
import { oakSelectStyles } from './index-styles';
let elementIdCounter = 0;
const customElementName = 'oak-select';
/**
 * Select drop down (native) form element.
 *
 */
let OakSelect = class OakSelect extends LitElement {
    constructor() {
        super();
        this.elementId = `${customElementName}-${elementIdCounter++}`;
        this.id = `${customElementName}-${elementIdCounter++}-id`;
        this.placeholder = '';
        this.multiple = false;
        this.tooltip = '';
        this.name = this.elementId;
        this.disabled = false;
        this.native = false;
    }
    static get styles() {
        return [...globalStyles, oakSelectStyles];
    }
    // private handleInput = (event: any) => {
    //   console.log('input', event);
    //   this.propagateEvent(INPUT_INPUT_EVENT, event);
    // };
    // private handleChange = (event: any) => {
    //   console.log('change', event);
    //   this.propagateEvent(INPUT_CHANGE_EVENT, event);
    // };
    // private propagateEvent = (eventName: string, event: any, value?: any) => {
    //   this.value = event.srcElement.value;
    //   this.dispatchEvent(
    //     new CustomEvent(eventName, {
    //       bubbles: true,
    //       composed: true,
    //       detail: {
    //         id: event.srcElement.id,
    //         name: event.srcElement.name,
    //         value: value || event.srcElement.value,
    //       },
    //     })
    //   );
    // };
    render() {
        return html `
      ${this.native
            ? html `<oak-internal-select-native
            .elementFor=${this.id}
            .formGroupName=${this.formGroupName}
            .label=${this.label}
            .name=${this.name}
            .value=${this.value}
            .placeholder=${this.placeholder}
            .tooltip=${this.tooltip}
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            .options=${this.options}
            .optionsAsKeyValue=${this.optionsAsKeyValue}
          ></oak-internal-select-native>`
            : html `<oak-internal-select-modern
            .elementFor=${this.id}
            .formGroupName=${this.formGroupName}
            .label=${this.label}
            .name=${this.name}
            .value=${this.value}
            .placeholder=${this.placeholder}
            .tooltip=${this.tooltip}
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            .options=${this.options}
            .optionsAsKeyValue=${this.optionsAsKeyValue}
          ></oak-internal-select-modern>`}
    `;
    }
};
__decorate([
    property({ type: String, reflect: true })
], OakSelect.prototype, "id", void 0);
__decorate([
    property({ type: String })
], OakSelect.prototype, "formGroupName", void 0);
__decorate([
    property({ type: String })
], OakSelect.prototype, "label", void 0);
__decorate([
    property()
], OakSelect.prototype, "value", void 0);
__decorate([
    property({ type: String })
], OakSelect.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean })
], OakSelect.prototype, "multiple", void 0);
__decorate([
    property({ type: String })
], OakSelect.prototype, "tooltip", void 0);
__decorate([
    property({ type: String })
], OakSelect.prototype, "name", void 0);
__decorate([
    property({ type: Boolean })
], OakSelect.prototype, "disabled", void 0);
__decorate([
    property({ type: Array })
], OakSelect.prototype, "options", void 0);
__decorate([
    property({ type: Array })
], OakSelect.prototype, "optionsAsKeyValue", void 0);
__decorate([
    property({ type: Boolean })
], OakSelect.prototype, "native", void 0);
OakSelect = __decorate([
    customElement(customElementName)
], OakSelect);
export { OakSelect };
//# sourceMappingURL=index.js.map
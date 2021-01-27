var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { formControlRegisterSubject } from '../../../events/FormControlRegisterEvent';
import { formControlSubmitSubject } from '../../../events/FormControlSubmitEvent';
import { formControlValidatedSubject } from '../../../events/FormControlValidatedEvent';
import { formControlValidateSubject } from '../../../events/FormControlValidateEvent';
import { globalStyles } from '../../../global-styles';
import { INPUT_SUBMIT_EVENT, INPUT_CHANGE_EVENT, INPUT_INPUT_EVENT, FILE_SELECTED_EVENT, } from '../../../types/InputEventTypes';
import { RegexValidator } from '../../../validation/RegexValidator';
import { TextLengthValidator } from '../../../validation/TextLengthValidator';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import { oakInputStyles } from './index-styles';
import { NumberBoundaryValidator } from '../../../validation/NumberBoundaryValidator';
import { UserDefinedValidator } from '../../../validation/UserDefinedValidator';
let elementIdCounter = 0;
/**
 * Text box form element.
 *
 */
let OakInput = class OakInput extends LitElement {
    constructor() {
        super();
        this.elementId = `oak-input-${elementIdCounter++}`;
        this.type = 'text';
        this.placeholder = '';
        this.multiple = false;
        this.tooltip = '';
        this.name = this.elementId;
        this.disabled = false;
        /**
         * @private
         */
        this._errors = [];
        this.handleInput = (event) => {
            if (this.type !== 'file') {
                this.propagateEvent(INPUT_INPUT_EVENT, event);
            }
        };
        this.handleChange = (event) => {
            if (this.type !== 'file') {
                this.propagateEvent(INPUT_CHANGE_EVENT, event);
            }
            else {
                this.propagateEvent(FILE_SELECTED_EVENT, event, this.processFiles(event.target.files));
            }
            // (this.closest('FORM') as any)?.dispatchEvent(new Event('submit'));
        };
        this.handleKeydown = (event) => {
            if (event.key === 'Enter' && this.type !== 'file') {
                this.handleSubmit(event);
            }
        };
        this.handleSubmit = (event) => {
            if (this.formGroupName) {
                formControlSubmitSubject.next({
                    formGroupName: this.formGroupName,
                });
            }
            this.propagateEvent(INPUT_SUBMIT_EVENT, event);
        };
        this.propagateEvent = (eventName, event, value) => {
            this.value = event.srcElement.value;
            this.dispatchEvent(new CustomEvent(eventName, {
                bubbles: true,
                composed: true,
                detail: {
                    id: event.srcElement.id,
                    name: event.srcElement.name,
                    value: value || event.srcElement.value,
                },
            }));
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.init();
    }
    init() {
        if (this.formGroupName) {
            formControlRegisterSubject.next({
                formControlName: this.name,
                formGroupName: this.formGroupName,
            });
            formControlValidateSubject
                .asObservable()
                .subscribe((message) => {
                if (message.formGroupName === this.formGroupName) {
                    this.validate();
                }
            });
        }
    }
    validate() {
        this._errors = [];
        if (this.type === 'text' && (this.minLength || this.maxLength)) {
            this._errors = this._errors.concat(TextLengthValidator(this.value, this.minLength, this.maxLength));
        }
        if (this.type === 'number' && (this.min || this.max)) {
            this._errors = this._errors.concat(NumberBoundaryValidator(this.value, this.min, this.max));
        }
        if (this.type !== 'file' && this.regexp) {
            this._errors = this._errors.concat(RegexValidator(this.value, this.regexp));
        }
        if (this.validatorFunction) {
            this._errors = this._errors.concat(UserDefinedValidator(this.validatorFunction, this.value, this.name, this.formGroupName));
        }
        formControlValidatedSubject.next({
            formGroupName: this.formGroupName || '',
            formControlName: this.name,
            isValid: this._errors.length === 0,
            formControlValue: this.value,
            errors: this._errors,
        });
    }
    static get styles() {
        return [...globalStyles, oakInputStyles];
    }
    processFiles(filesLocal) {
        let filesToProcess = Array.from(filesLocal);
        if (!this.multiple && filesToProcess.length > 1) {
            filesToProcess = [filesToProcess[0]];
        }
        return filesToProcess;
    }
    // private get inputEl(): HTMLInputElement {
    //   return this.shadowRoot!.getElementById(this.elementId)! as HTMLInputElement;
    // }
    render() {
        const labelId = `${this.elementId}-label`;
        return html `
      <div class="oak-input">
        <oak-internal-label
          label=${this.label}
          elementId=${labelId}
          elementFor=${this.elementId}
        ></oak-internal-label>
        <input
          class=${this._errors.length > 0 ? 'validation-failure' : ''}
          autocomplete="off"
          aria-labelledby=${labelId}
          name=${this.name}
          id=${this.elementId}
          .value=${this.type !== 'file' ? this.value : ''}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          type=${this.type}
          ?multiple=${this.multiple}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeydown}
        />
        <oak-internal-form-tooltip
          .tooltip=${this.tooltip}
        ></oak-internal-form-tooltip>
        <oak-internal-form-error
          .errors=${this._errors}
        ></oak-internal-form-error>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], OakInput.prototype, "formGroupName", void 0);
__decorate([
    property({ type: String })
], OakInput.prototype, "label", void 0);
__decorate([
    property()
], OakInput.prototype, "value", void 0);
__decorate([
    property({ type: String })
], OakInput.prototype, "type", void 0);
__decorate([
    property({ type: String })
], OakInput.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean })
], OakInput.prototype, "multiple", void 0);
__decorate([
    property({ type: String })
], OakInput.prototype, "tooltip", void 0);
__decorate([
    property({ type: String })
], OakInput.prototype, "name", void 0);
__decorate([
    property({ type: Boolean })
], OakInput.prototype, "disabled", void 0);
__decorate([
    property({ type: Function })
], OakInput.prototype, "validatorFunction", void 0);
__decorate([
    property({ type: Number })
], OakInput.prototype, "minLength", void 0);
__decorate([
    property({ type: Number })
], OakInput.prototype, "maxLength", void 0);
__decorate([
    property({ type: Number })
], OakInput.prototype, "min", void 0);
__decorate([
    property({ type: Number })
], OakInput.prototype, "max", void 0);
__decorate([
    property({ type: Object })
], OakInput.prototype, "regexp", void 0);
__decorate([
    property({ type: Array })
], OakInput.prototype, "_errors", void 0);
OakInput = __decorate([
    customElement('oak-input')
], OakInput);
export { OakInput };
//# sourceMappingURL=index.js.map
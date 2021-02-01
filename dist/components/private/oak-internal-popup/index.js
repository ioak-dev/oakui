var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { classMap } from 'lit-html/directives/class-map';
import { formControlRegisterSubject } from '../../../events/FormControlRegisterEvent';
import { formControlValidatedSubject } from '../../../events/FormControlValidatedEvent';
import { formControlValidateSubject } from '../../../events/FormControlValidateEvent';
import { globalStyles } from '../../../global-styles';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../public/oak-button';
import '../../public/oak-input';
import { oakInternalPopupStyles } from './index-styles';
import { containerScrolledSubject } from '../../../events/ContainerScrolledEvent';
let elementIdCounter = 0;
const customElementName = 'oak-internal-popup';
/**
 * Select drop down (native) form element.
 *
 */
let OakSelect = class OakSelect extends LitElement {
    constructor() {
        super();
        this.elementId = `${customElementName}-${elementIdCounter++}`;
        this.valueContainerElementId = `${this.elementId}-value-container`;
        this.popupContainerElementId = `${this.elementId}-popup-container`;
        this._isActivated = false;
        this.elementFor = '';
        this.placeholder = '';
        this.multiple = false;
        this.tooltip = '';
        this.name = this.elementId;
        this.disabled = false;
        this.options = [];
        this.scrollableContainers = [];
        /**
         * Validators
         *
         */
        /**
         * @private
         */
        this._errors = [];
        this.clickEventHandler = (event) => {
            if (!event.target.getAttribute('id') ||
                event.target.getAttribute('id') !== this.elementFor) {
                this.deactivate();
            }
        };
        this.keydownEventHandler = (event) => {
            this.propagateCustomEvent('key-pressed', event);
            switch (event.key) {
                case 'ArrowDown':
                case 'ArrowUp':
                    break;
                case 'Enter':
                    event.preventDefault();
                    // this._isActivated ? this.handleChange() : this.activate();
                    break;
                default:
                    break;
            }
        };
        this.activate = () => {
            var _a;
            if (!this._isActivated) {
                this._isActivated = true;
                setTimeout(() => this.adjustPositioning());
                const docRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.valueContainerElementId);
                if (docRef) {
                    docRef.addEventListener('keydown', this.keydownEventHandler);
                }
                this.propagateCustomEvent('activated');
                if (this.scrollableContainers.length > 0) {
                    console.log('*******', this.scrollableContainers);
                }
            }
        };
        this.deactivate = () => {
            var _a;
            this._isActivated = false;
            const docRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.elementId);
            if (docRef) {
                docRef.removeEventListener('keydown', this.keydownEventHandler);
            }
            this.propagateCustomEvent('deactivated');
        };
        this.adjustPositioning = () => {
            var _a, _b;
            console.log('****adjust positioning');
            const popupContainerElRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.popupContainerElementId);
            const valueContainerElRef = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById(this.valueContainerElementId);
            if (valueContainerElRef && popupContainerElRef) {
                popupContainerElRef.style.left = `${valueContainerElRef.getBoundingClientRect().left}px`;
                popupContainerElRef.style.top = `${valueContainerElRef.getBoundingClientRect().bottom + 8}px`;
                popupContainerElRef.style.width = `${valueContainerElRef.getBoundingClientRect().width}px`;
            }
        };
        // private handleChange = (index?: number) => {
        // if (this._isActivated) {
        //   this.propagateCustomEvent(
        //     INPUT_CHANGE_EVENT,
        //     this.searchpopup()[index || this._currentIndex]
        //   );
        //   this.propagateCustomEvent(
        //     INPUT_INPUT_EVENT,
        //     this.searchpopup()[index || this._currentIndex]
        //   );
        //   this.deactivate();
        // }
        // };
        this.validate = () => {
            this._errors = [];
            formControlValidatedSubject.next({
                formGroupName: this.formGroupName || '',
                formControlName: this.name,
                isValid: this._errors.length === 0,
                formControlValue: this.value,
                errors: this._errors,
            });
        };
        this.getClassMap = (baseClass) => {
            switch (baseClass) {
                case 'base':
                    return {
                        [customElementName]: true,
                    };
                case 'value-container':
                    return {
                        [`${customElementName}--${baseClass}`]: true,
                    };
                case 'value':
                    return {
                        [`${customElementName}--${baseClass}`]: true,
                    };
                case 'placeholder':
                    return {
                        [`${customElementName}--${baseClass}`]: true,
                    };
                case 'popup':
                    return {
                        [`${customElementName}--${baseClass}`]: true,
                    };
                case 'popup-container':
                    return {
                        [`${customElementName}--${baseClass}`]: true,
                        activated: this._isActivated,
                    };
                default:
                    return {};
            }
        };
        // private handleSearchCriteriaChange = (event: any) => {
        //   this._searchCriteria = event.detail.value;
        // };
        this.handleInputFocused = () => {
            if (this._isActivated) {
                this.deactivate();
            }
            else {
                this.activate();
            }
        };
        this.propagateCustomEvent = (eventName, value) => {
            this.dispatchEvent(new CustomEvent(eventName, {
                bubbles: true,
                composed: true,
                detail: {
                    id: this.elementId,
                    name: this.name,
                    value: value || null,
                },
            }));
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this._registerEvents();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._unregisterEvents();
    }
    _registerEvents() {
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
        containerScrolledSubject
            .asObservable()
            .subscribe(() => this.adjustPositioning());
        fromEvent(document, 'click')
            .pipe(map((event) => event))
            .subscribe((event) => this.clickEventHandler(event));
        fromEvent(window, 'resize')
            .pipe(map((event) => event))
            .subscribe(() => this.adjustPositioning());
        fromEvent(window, 'scroll')
            .pipe(map((event) => event))
            .subscribe(() => this.adjustPositioning());
        fromEvent(window, 'keydown')
            .pipe(map((event) => event))
            .subscribe((event) => {
            if (['Escape'].includes(event.key)) {
                this.deactivate();
            }
        });
    }
    _unregisterEvents() {
        // window.removeEventListener('resize', this.adjustPositioning);
        // window.removeEventListener('scroll', this.adjustPositioning);
    }
    static get styles() {
        return [...globalStyles, oakInternalPopupStyles];
    }
    render() {
        const labelId = `${this.elementId}-label`;
        return html `
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <oak-internal-label
          label=${this.label}
          elementId=${labelId}
          elementFor=${this.elementId}
        ></oak-internal-label>
        <button
          class=${classMap(this.getClassMap('value-container'))}
          @click=${this.handleInputFocused}
          id=${this.valueContainerElementId}
          type="button"
        >
          ${this.value
            ? html `<div class=${classMap(this.getClassMap('value'))}>
                ${this.value}
              </div>`
            : html `<div class=${classMap(this.getClassMap('placeholder'))}>
                ${this.placeholder}
              </div>`}
          <div>
            down
          </div>
        </button>
        <div class=${classMap(this.getClassMap('popup'))}>
          <div
            class=${classMap(this.getClassMap('popup-container'))}
            id=${this.popupContainerElementId}
          >
            <slot></slot>
          </div>
          <oak-internal-form-tooltip
            .tooltip=${this.tooltip}
          ></oak-internal-form-tooltip>
          <oak-internal-form-error
            .errors=${this._errors}
          ></oak-internal-form-error>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], OakSelect.prototype, "_isActivated", void 0);
__decorate([
    property({ type: String })
], OakSelect.prototype, "elementFor", void 0);
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
    property({ type: Array })
], OakSelect.prototype, "scrollableContainers", void 0);
__decorate([
    property({ type: Array })
], OakSelect.prototype, "_errors", void 0);
OakSelect = __decorate([
    customElement(customElementName)
], OakSelect);
export { OakSelect };
//# sourceMappingURL=index.js.map
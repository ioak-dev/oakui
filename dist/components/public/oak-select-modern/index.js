var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { formControlRegisterSubject } from '../../../events/FormControlRegisterEvent';
import { formControlValidatedSubject } from '../../../events/FormControlValidatedEvent';
import { formControlValidateSubject } from '../../../events/FormControlValidateEvent';
import { globalStyles } from '../../../global-styles';
import '../../private/oak-internal-popup';
import '../../public/oak-button';
import '../../public/oak-input';
import { oakSelectModernStyles } from './index-styles';
import { isEmptyOrSpaces, toString } from '../../../utils/StringUtils';
import { INPUT_CHANGE_EVENT, INPUT_INPUT_EVENT, } from '../../../types/InputEventTypes';
let elementIdCounter = 0;
const customElementName = 'oak-select-modern';
/**
 * Select drop down (native) form element.
 *
 */
let OakSelect = class OakSelect extends LitElement {
    constructor() {
        super();
        this.elementId = `${customElementName}-${elementIdCounter++}`;
        this.inputElementId = `${this.elementId}-input`;
        this.liElementId = `${this.elementId}-popup-li`;
        this.ulElementId = `${this.elementId}-popup-ul`;
        this.id = `${customElementName}-${elementIdCounter++}-id`;
        this._isActivated = false;
        this._currentIndex = 0;
        this._searchCriteria = '';
        this.placeholder = '';
        this.multiple = false;
        this.tooltip = '';
        this.name = this.elementId;
        this.disabled = false;
        this.options = [];
        /**
         * Validators
         *
         */
        /**
         * @private
         */
        this._errors = [];
        this.handleChange = (index) => {
            if (this._isActivated) {
                this.propagateCustomEvent(INPUT_CHANGE_EVENT, this.search()[index || this._currentIndex]);
                this.propagateCustomEvent(INPUT_INPUT_EVENT, this.search()[index || this._currentIndex]);
            }
        };
        this.search = () => {
            if (isEmptyOrSpaces(this._searchCriteria)) {
                return this.options;
            }
            else {
                return this.options.filter((option) => toString(option).includes(this._searchCriteria));
            }
        };
        this.keydownEventHandler = (event) => {
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    // this.activate();
                    this.navigateDown();
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    // this.activate();
                    this.navigateUp();
                    break;
                case 'Enter':
                    event.preventDefault();
                    // this._isActivated ? this.handleChange() : this.activate();
                    break;
                default:
                    break;
            }
        };
        this.navigateUp = () => {
            var _a;
            if (this._currentIndex > 0) {
                const elRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(`${this.liElementId}-${this._currentIndex - 1}`);
                if (elRef && !this.isScrolledIntoView(elRef)) {
                    elRef.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'start',
                    });
                }
                this._currentIndex = this._currentIndex - 1;
            }
            else {
                this._currentIndex = 0;
            }
        };
        this.isScrolledIntoView = (el, invertDirection = false) => {
            var _a;
            const rect = el.getBoundingClientRect();
            const elemTop = rect.top;
            const elemBottom = rect.bottom;
            const containerEl = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.ulElementId);
            if (!containerEl) {
                return true;
            }
            // Only completely visible elements return true:
            let isVisible = true;
            if (invertDirection) {
                isVisible =
                    elemTop >= 0 &&
                        elemBottom <=
                            containerEl.getBoundingClientRect().height +
                                containerEl.getBoundingClientRect().top;
            }
            else {
                isVisible =
                    elemTop >= 0 &&
                        elemTop >=
                            containerEl.getBoundingClientRect().height +
                                containerEl.getBoundingClientRect().top;
            }
            // Partially visible elements return true:
            //isVisible = elemTop < containerEl.getBoundingClientRect().height && elemBottom >= 0;
            return isVisible;
        };
        this.handleActivated = () => {
            var _a;
            this._isActivated = true;
            const docRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.elementId);
            if (docRef) {
                docRef.addEventListener('keydown', this.keydownEventHandler);
            }
        };
        this.handleDeactivated = () => {
            var _a;
            this._isActivated = false;
            this._searchCriteria = '';
            const docRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.elementId);
            if (docRef) {
                docRef.removeEventListener('keydown', this.keydownEventHandler);
            }
        };
        this.handleKeydown = (event) => {
            this.keydownEventHandler(event.detail.value);
        };
        this._searchResults = () => {
            if (isEmptyOrSpaces(this._searchCriteria)) {
                return this.options;
            }
            else {
                return this.options.filter((option) => toString(option).includes(this._searchCriteria));
            }
        };
        this.handleSearchCriteriaChange = (event) => {
            this._searchCriteria = event.srcElement.value;
            this._currentIndex = 0;
        };
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
                case 'search-filter':
                    return {
                        [`${customElementName}--${baseClass}`]: true,
                    };
                case 'ul':
                    return {
                        [`${customElementName}--${baseClass}`]: true,
                        activated: this._isActivated,
                    };
                default:
                    return {};
            }
        };
        this.propagateCustomEvent = (eventName, value) => {
            this.dispatchEvent(new CustomEvent(eventName, {
                bubbles: true,
                composed: true,
                detail: {
                    id: this.elementId,
                    name: this.name,
                    value: value,
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
    }
    _unregisterEvents() {
        //
    }
    navigateDown() {
        var _a;
        if (this._currentIndex < this.search().length - 1) {
            const elRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(`${this.liElementId}-${this._currentIndex + 1}`);
            if (elRef && !this.isScrolledIntoView(elRef, true)) {
                elRef.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'start',
                });
            }
            this._currentIndex = this._currentIndex + 1;
        }
        else {
            this._currentIndex = 0;
        }
    }
    // private handleSearchCriteriaChange = (event: any) => {
    //   this._searchCriteria = event.detail.value;
    // };
    static get styles() {
        return [...globalStyles, oakSelectModernStyles];
    }
    render() {
        return html `
      <oak-internal-popup
        .elementFor=${this.id}
        @activated=${this.handleActivated}
        @deactivated=${this.handleDeactivated}
        @key-pressed=${this.handleKeydown}
      >
        <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
          <div class=${classMap(this.getClassMap('search-filter'))}>
            <input
              type="text"
              placeholder="Type to filter"
              autocomplete="off"
              .value=${this._searchCriteria}
              id=${this.inputElementId}
              @input=${this.handleSearchCriteriaChange}
            />
          </div>
          <ul
            role="listbox"
            id=${this.ulElementId}
            class=${classMap(this.getClassMap('ul'))}
          >
            ${this._searchResults().map((item, index) => html `<li
                  id=${`${this.liElementId}-${index}`}
                  role="option"
                  class=${this._currentIndex === index ? 'option-active' : ''}
                  @click=${() => this.handleChange(index)}
                >
                  ${item}
                </li>`)}
            ${this._searchResults().length === 0
            ? html ` <li>No results found</li>`
            : html ``}
          </ul>
        </div>
      </oak-internal-popup>
    `;
    }
};
__decorate([
    property({ type: String, reflect: true })
], OakSelect.prototype, "id", void 0);
__decorate([
    property({ type: Boolean })
], OakSelect.prototype, "_isActivated", void 0);
__decorate([
    property({ type: Number })
], OakSelect.prototype, "_currentIndex", void 0);
__decorate([
    property({ type: String })
], OakSelect.prototype, "_searchCriteria", void 0);
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
], OakSelect.prototype, "_errors", void 0);
OakSelect = __decorate([
    customElement(customElementName)
], OakSelect);
export { OakSelect };
//# sourceMappingURL=index.js.map
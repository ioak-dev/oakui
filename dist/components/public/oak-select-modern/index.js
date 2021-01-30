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
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../public/oak-button';
import '../../public/oak-input';
import { oakSelectModernStyles } from './index-styles';
import { isEmptyOrSpaces, toString } from '../../../utils/StringUtils';
import { INPUT_CHANGE_EVENT, INPUT_INPUT_EVENT, } from '../../../types/InputEventTypes';
import { containerScrolledSubject } from '../../../events/ContainerScrolledEvent';
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
        this.liElementId = `${this.elementId}-popup-li`;
        // private inputElementId = `${this.elementId}-input`;
        this.valueContainerElementId = `${this.elementId}-value-container`;
        this.ulElementId = `${this.elementId}-popup-ul`;
        this.popupContainerElementId = `${this.elementId}-popup-container`;
        this._isActivated = false;
        this._currentIndex = 0;
        this._searchCriteria = '';
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
                    this._isActivated ? this.handleChange() : this.activate();
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
            const containerEl = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.popupContainerElementId);
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
        this.activate = () => {
            if (!this._isActivated) {
                this._isActivated = true;
                setTimeout(() => this.adjustPositioning());
                // setTimeout(() => this.addTransitions());
                if (this.scrollableContainers.length > 0) {
                    console.log('*******', this.scrollableContainers);
                }
            }
        };
        this.deactivate = () => {
            this._isActivated = false;
            this._searchCriteria = '';
            // setTimeout(() => this.addTransitions());
        };
        this.adjustPositioning = () => {
            var _a, _b;
            const popupContainerElRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.popupContainerElementId);
            const valueContainerElRef = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById(this.valueContainerElementId);
            if (valueContainerElRef && popupContainerElRef) {
                popupContainerElRef.style.left = `${valueContainerElRef.getBoundingClientRect().left}px`;
                popupContainerElRef.style.top = `${valueContainerElRef.getBoundingClientRect().bottom + 8}px`;
                popupContainerElRef.style.width = `${valueContainerElRef.getBoundingClientRect().width}px`;
            }
        };
        // private addTransitions = () => {
        //   const ulElRef = this.shadowRoot?.getElementById(this.ulElementId);
        //   if (this._isActivated && ulElRef) {
        //     ulElRef.style.visibility = 'visible';
        //     ulElRef.style.opacity = '1';
        //   } else if (ulElRef) {
        //     ulElRef.style.visibility = 'hidden';
        //     ulElRef.style.opacity = '0';
        //   }
        // };
        this.handleChange = (index) => {
            if (this._isActivated) {
                this.propagateCustomEvent(INPUT_CHANGE_EVENT, this.searchpopup()[index || this._currentIndex]);
                this.propagateCustomEvent(INPUT_INPUT_EVENT, this.searchpopup()[index || this._currentIndex]);
                this.deactivate();
            }
        };
        this.searchpopup = () => {
            if (isEmptyOrSpaces(this._searchCriteria)) {
                return this.options;
            }
            else {
                return this.options.filter((option) => toString(option).includes(this._searchCriteria));
            }
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
        // private handleSearchCriteriaChange = (event: any) => {
        //   this._searchCriteria = event.detail.value;
        // };
        this.handleInputFocused = () => {
            var _a;
            if (this._isActivated) {
                this.deactivate();
            }
            else {
                this.activate();
                window.addEventListener('keydown', (e) => {
                    if (['Escape'].includes(e.key)) {
                        this.deactivate();
                    }
                });
                window.addEventListener('click', (e) => {
                    var _a;
                    if (!e.target.shadowRoot ||
                        !e.target.shadowRoot.contains((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.elementId))) {
                        this.deactivate();
                    }
                });
                const docRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.elementId);
                if (docRef) {
                    docRef.addEventListener('keydown', this.keydownEventHandler);
                }
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
        window.addEventListener('resize', this.adjustPositioning);
        window.addEventListener('scroll', this.adjustPositioning);
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
        containerScrolledSubject.asObservable().subscribe(() => {
            this.adjustPositioning();
        });
    }
    _unregisterEvents() {
        window.removeEventListener('resize', this.adjustPositioning);
        window.removeEventListener('scroll', this.adjustPositioning);
    }
    navigateDown() {
        var _a;
        if (this._currentIndex < this.searchpopup().length - 1) {
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
    static get styles() {
        return [...globalStyles, oakSelectModernStyles];
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
            <div class=${classMap(this.getClassMap('search-filter'))}>
              <input
                autofocus
                type="text"
                placeholder="Type to filter"
                autocomplete="off"
                spellcheck="false"
              />
            </div>
            <ul
              role="listbox"
              id=${this.ulElementId}
              class=${classMap(this.getClassMap('ul'))}
            >
              ${this.searchpopup().map((item, index) => html `<li
                    id=${`${this.liElementId}-${index}`}
                    role="option"
                    class=${this._currentIndex === index ? 'option-active' : ''}
                    @click=${() => this.handleChange(index)}
                  >
                    ${item}
                  </li>`)}
              ${this.searchpopup().length === 0
            ? html ` <li>No popup found</li>`
            : html ``}
            </ul>
          </div>
        </div>
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
], OakSelect.prototype, "scrollableContainers", void 0);
__decorate([
    property({ type: Array })
], OakSelect.prototype, "_errors", void 0);
OakSelect = __decorate([
    customElement(customElementName)
], OakSelect);
export { OakSelect };
//# sourceMappingURL=index.js.map
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
const rootClass = 'oak-select-modern';
/**
 * Select drop down (native) form element.
 *
 */
let OakSelect = class OakSelect extends LitElement {
    constructor() {
        super();
        this.elementId = `oak-select-modern-${elementIdCounter++}`;
        this.resultsLiElementId = `${this.elementId}-results-li`;
        this.inputElementId = `${this.elementId}-input`;
        this.resultsUlElementId = `${this.elementId}-results-ul`;
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
                    this.activate();
                    this.navigateDown();
                    break;
                case 'ArrowUp':
                    this.activate();
                    this.navigateUp();
                    break;
                case 'Home':
                    this.activate();
                    this.navigateHome();
                    break;
                case 'End':
                    this.activate();
                    this.navigateEnd();
                    break;
                case 'Enter':
                    this.handleChange();
                    break;
                default:
                    break;
            }
        };
        this.navigateUp = () => {
            var _a;
            if (this._currentIndex > 0) {
                const elRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(`${this.resultsLiElementId}-${this._currentIndex - 1}`);
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
        this.navigateHome = () => {
            var _a;
            const elRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(`${this.resultsLiElementId}-0`);
            if (elRef) {
                elRef.scrollIntoView();
            }
            this._currentIndex = 0;
        };
        this.navigateEnd = () => {
            var _a;
            const elRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(`${this.resultsLiElementId}-${this.searchResults().length - 1}`);
            if (elRef) {
                elRef.scrollIntoView();
            }
            this._currentIndex = this.searchResults().length - 1;
        };
        this.isScrolledIntoView = (el, invertDirection = false) => {
            var _a;
            const rect = el.getBoundingClientRect();
            const elemTop = rect.top;
            const elemBottom = rect.bottom;
            const containerEl = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(`${this.elementId}-results-ul`);
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
                if (this.scrollableContainers.length > 0) {
                    console.log('*******', this.scrollableContainers);
                }
            }
        };
        this.adjustPositioning = () => {
            var _a, _b;
            const ulElRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.resultsUlElementId);
            const inputElRef = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById(this.inputElementId);
            if (inputElRef && ulElRef) {
                ulElRef.style.left = `${inputElRef.getBoundingClientRect().left}px`;
                ulElRef.style.top = `${inputElRef.getBoundingClientRect().bottom + 6}px`;
                ulElRef.style.width = `${inputElRef.getBoundingClientRect().right -
                    inputElRef.getBoundingClientRect().left}px`;
            }
        };
        this.deactivate = () => {
            this._isActivated = false;
            this._searchCriteria = '';
        };
        this.handleChange = (index) => {
            if (this._isActivated) {
                this.propagateCustomEvent(INPUT_CHANGE_EVENT, this.searchResults()[index || this._currentIndex]);
                this.propagateCustomEvent(INPUT_INPUT_EVENT, this.searchResults()[index || this._currentIndex]);
                this.deactivate();
            }
        };
        this.searchResults = () => {
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
                        [rootClass]: true,
                    };
                case 'input':
                    return {
                        [`${rootClass}--${baseClass}`]: true,
                    };
                case 'results':
                    return {
                        [`${rootClass}--${baseClass}`]: true,
                    };
                default:
                    return {};
            }
        };
        // update(changedProperties: any) {
        //   console.log(changedProperties);
        //   this.searchResults() = this.options || [];
        //   this.searchResults() = ['test', 'testtwo', 'sfsdf', 'lorem ipsum'];
        // }
        this.handleSearchCriteriaChange = (event) => {
            this._searchCriteria = event.detail.value;
        };
        this.handleInputFocused = () => {
            var _a;
            this.activate();
            // popupActivatedSubject.next({id: this.elementId});
            window.addEventListener('keydown', (e) => {
                if (['Tab', 'Escape'].includes(e.key)) {
                    this.deactivate();
                }
            });
            window.addEventListener('click', (e) => {
                var _a;
                // this.deactivate();
                if (!e.target.shadowRoot ||
                    !e.target.shadowRoot.contains((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.elementId))) {
                    this.deactivate();
                }
            });
            const docRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.elementId);
            if (docRef) {
                docRef.addEventListener('keydown', this.keydownEventHandler);
            }
        };
        // private handleInput = (event: any) => {
        //   console.log('input', event);
        //   this.propagateEvent(INPUT_INPUT_EVENT, event);
        // };
        // private handleChange = (event: any) => {
        //   console.log('change', event);
        //   this.propagateEvent(INPUT_CHANGE_EVENT, event);
        //   // (this.closest('FORM') as any)?.dispatchEvent(new Event('submit'));
        // };
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
        if (this._currentIndex < this.searchResults().length - 1) {
            const elRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(`${this.resultsLiElementId}-${this._currentIndex + 1}`);
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
        return html `
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <div
          class=${classMap(this.getClassMap('input'))}
          id=${this.inputElementId}
        >
          <oak-input
            .value=${this._isActivated ? this._searchCriteria : this.value}
            name=${this.name}
            label=${this.label}
            @input-focus=${this.handleInputFocused}
            @input-input=${this.handleSearchCriteriaChange}
          />
        </div>
        ${this.scrollableContainers}
        ${this._isActivated
            ? html `
              <div class=${classMap(this.getClassMap('results'))}>
                <ul role="listbox" id=${this.resultsUlElementId}>
                  ${this.searchResults().map((item, index) => html `<li
                        id=${`${this.resultsLiElementId}-${index}`}
                        role="option"
                        class=${this._currentIndex === index
                ? 'option-active'
                : ''}
                        @click=${() => this.handleChange(index)}
                      >
                        ${item}
                      </li>`)}
                  ${this.searchResults().length === 0
                ? html ` <li>No results found</li>`
                : html ``}
                </ul>
              </div>
            `
            : html ``}
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
    customElement('oak-select-modern')
], OakSelect);
export { OakSelect };
//# sourceMappingURL=index.js.map
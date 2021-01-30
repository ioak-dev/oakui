var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { formSelectActivatedSubject } from '../../../events/FormSelectActivatedEvent';
import { globalStyles } from '../../../global-styles';
import { oakInternalSelectListStyles } from './index-styles';
let elementIdCounter = 0;
const customElementName = 'oak-internal-select-list';
/**
 * Form element error.
 *
 */
let OakInternalSelectList = class OakInternalSelectList extends LitElement {
    constructor() {
        super();
        this.elementId = `${customElementName}-${elementIdCounter++}`;
        this.liElementId = `${this.elementId}-li`;
        this.containerHeight = 0;
        this.containerTop = 0;
        this.elementFor = '';
        this._isActivated = false;
        this._currentIndex = 0;
        this.options = [];
        this.init = () => {
            // formSelectKeyboardSubject.asObservable().subscribe((message) => {
            //   console.log(message);
            //   this._handleKeyboardEvent(message.event);
            // });
            formSelectActivatedSubject.asObservable().subscribe((message) => {
                var _a, _b, _c, _d;
                console.log(message, (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.elementId), message.controlDom);
                (_c = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById(this.elementId)) === null || _c === void 0 ? void 0 : _c.addEventListener('keydown', (event) => {
                    console.log('****this.shadowRoot', event);
                    this._handleKeyboardEvent(event);
                });
                (_d = message.controlDom) === null || _d === void 0 ? void 0 : _d.addEventListener('keydown', (event) => {
                    console.log('****message.controlDom', event);
                    this._handleKeyboardEvent(event);
                });
            });
        };
        this._searchResults = () => {
            // if (isEmptyOrSpaces(this._searchCriteria)) {
            return this.options;
            // } else {
            //   return this.options.filter((option: any) =>
            //     toString(option).includes(this._searchCriteria)
            //   );
            // }
        };
        this._handleKeyboardEvent = (event) => {
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
                case 'Home':
                    event.preventDefault();
                    // this.activate();
                    this.navigateHome();
                    break;
                case 'End':
                    event.preventDefault();
                    // this.activate();
                    this.navigateEnd();
                    break;
                case 'Enter':
                    event.preventDefault();
                    // this.isActivated ? this.handleChange() : this.activate();
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
        this.navigateHome = () => {
            var _a;
            const elRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(`${this.liElementId}-0`);
            if (elRef) {
                elRef.scrollIntoView();
            }
            this._currentIndex = 0;
        };
        this.navigateEnd = () => {
            var _a;
            const elRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(`${this.liElementId}-${this._searchResults().length - 1}`);
            if (elRef) {
                elRef.scrollIntoView();
            }
            this._currentIndex = this._searchResults().length - 1;
        };
        this.isScrolledIntoView = (el, invertDirection = false) => {
            const rect = el.getBoundingClientRect();
            const elemTop = rect.top;
            const elemBottom = rect.bottom;
            if (this.containerHeight === 0 && this.containerTop === 0) {
                return true;
            }
            // Only completely visible elements return true:
            let isVisible = true;
            if (invertDirection) {
                isVisible =
                    elemTop >= 0 && elemBottom <= this.containerHeight + this.containerTop;
            }
            else {
                isVisible =
                    elemTop >= 0 && elemTop >= this.containerHeight + this.containerTop;
            }
            // Partially visible elements return true:
            //isVisible = elemTop < containerEl.getBoundingClientRect().height && elemBottom >= 0;
            return isVisible;
        };
        this.handleChange = (index) => {
            if (this._isActivated) {
                this.propagateToParentEvent('change', this._searchResults()[index || this._currentIndex]);
            }
        };
        this.propagateToParentEvent = (eventName, value) => {
            this.dispatchEvent(new CustomEvent(eventName, {
                bubbles: true,
                composed: true,
                detail: {
                    id: this.elementId,
                    name: this.elementFor,
                    value: value,
                },
            }));
        };
        this.getClassMap = (baseClass) => {
            switch (baseClass) {
                case 'base':
                    return {
                        [customElementName]: true,
                    };
                default:
                    return {};
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.init();
    }
    navigateDown() {
        var _a, _b;
        console.log(this._currentIndex, this._searchResults().length, (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(`${this.liElementId}-${this._currentIndex + 1}`));
        if (this._currentIndex < this._searchResults().length - 1) {
            const elRef = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById(`${this.liElementId}-${this._currentIndex + 1}`);
            if (elRef && !this.isScrolledIntoView(elRef, true)) {
                elRef.scrollIntoView({
                    behavior: 'smooth',
                });
            }
            this._currentIndex = this._currentIndex + 1;
        }
        else {
            this._currentIndex = 0;
        }
    }
    static get styles() {
        return [...globalStyles, oakInternalSelectListStyles];
    }
    render() {
        return html ` <ul
      role="listbox"
      class=${classMap(this.getClassMap('base'))}
      id=${this.elementId}
    >
      <li>${this._currentIndex}</li>
      ${this._searchResults().map((item, index) => html ` <li
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
    </ul>`;
    }
};
__decorate([
    property({ type: Number })
], OakInternalSelectList.prototype, "containerHeight", void 0);
__decorate([
    property({ type: Number })
], OakInternalSelectList.prototype, "containerTop", void 0);
__decorate([
    property({ type: String })
], OakInternalSelectList.prototype, "elementFor", void 0);
__decorate([
    property({ type: Boolean })
], OakInternalSelectList.prototype, "_isActivated", void 0);
__decorate([
    property({ type: Number })
], OakInternalSelectList.prototype, "_currentIndex", void 0);
__decorate([
    property({ type: Array })
], OakInternalSelectList.prototype, "options", void 0);
OakInternalSelectList = __decorate([
    customElement(customElementName)
], OakInternalSelectList);
export { OakInternalSelectList };
//# sourceMappingURL=index.js.map
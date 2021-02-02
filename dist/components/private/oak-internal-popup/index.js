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
import { globalStyles } from '../../../global-styles';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../private/oak-internal-popup-input-action';
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
    /**
     * Validators
     *
     */
    /**
     * @private
     */
    constructor() {
        super();
        this.elementId = `${customElementName}-${elementIdCounter++}`;
        this.actionElementId = `${this.elementId}-action`;
        this.popupContainerElementId = `${this.elementId}-popup-container`;
        this.isActivated = false;
        this.elementFor = '';
        this.placeholder = '';
        this.multiple = false;
        this.tooltip = '';
        this.name = this.elementId;
        this.disabled = false;
        this.options = [];
        this.errors = [];
        this.scrollableContainers = [];
        this.clickEventHandler = (event) => {
            if (!event.target.getAttribute('id') ||
                event.target.getAttribute('id') !== this.elementFor) {
                this.deactivate();
            }
        };
        this.keydownEventHandler = (event) => {
            this.propagateCustomEvent('key-pressed', event);
        };
        this.activate = () => {
            var _a;
            if (!this.isActivated) {
                this.propagateCustomEvent('activated');
                setTimeout(() => this.adjustPositioning());
                const docRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.actionElementId);
                if (docRef) {
                    docRef.addEventListener('keydown', this.keydownEventHandler);
                }
                if (this.scrollableContainers.length > 0) {
                    console.log('*******', this.scrollableContainers);
                }
            }
        };
        this.deactivate = () => {
            var _a;
            this.propagateCustomEvent('deactivated');
            const docRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.elementId);
            if (docRef) {
                docRef.removeEventListener('keydown', this.keydownEventHandler);
            }
        };
        this.adjustPositioning = () => {
            var _a, _b;
            if (this.isActivated) {
                const popupContainerElRef = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(this.popupContainerElementId);
                const actionElRef = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById(this.actionElementId);
                if (actionElRef && popupContainerElRef) {
                    popupContainerElRef.style.left = `${actionElRef.getBoundingClientRect().left}px`;
                    if (actionElRef.getBoundingClientRect().top > window.innerHeight / 2) {
                        popupContainerElRef.style.bottom = `${window.innerHeight - actionElRef.getBoundingClientRect().top + 8}px`;
                        popupContainerElRef.style.top = 'auto';
                    }
                    else {
                        popupContainerElRef.style.top = `${actionElRef.getBoundingClientRect().bottom + 8}px`;
                        popupContainerElRef.style.bottom = 'auto';
                    }
                    popupContainerElRef.style.width = `${actionElRef.getBoundingClientRect().width}px`;
                }
            }
        };
        this.getClassMap = (baseClass) => {
            switch (baseClass) {
                case 'base':
                    return {
                        [customElementName]: true,
                    };
                case 'action':
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
                        activated: this.isActivated,
                    };
                default:
                    return {};
            }
        };
        // private handleSearchCriteriaChange = (event: any) => {
        //   this._searchCriteria = event.detail.value;
        // };
        this.handleInputFocused = () => {
            if (this.isActivated) {
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
        return html `
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <div
          class=${classMap(this.getClassMap('action'))}
          id=${this.actionElementId}
        >
          <oak-internal-popup-input-action
            @toggle=${this.handleInputFocused}
            .value=${this.value}
          ></oak-internal-popup-input-action>
        </div>
        <div class=${classMap(this.getClassMap('popup'))}>
          <div
            class=${classMap(this.getClassMap('popup-container'))}
            id=${this.popupContainerElementId}
          >
            <slot name="popup"></slot>
          </div>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], OakSelect.prototype, "isActivated", void 0);
__decorate([
    property({ type: String })
], OakSelect.prototype, "elementFor", void 0);
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
], OakSelect.prototype, "errors", void 0);
__decorate([
    property({ type: Array })
], OakSelect.prototype, "scrollableContainers", void 0);
OakSelect = __decorate([
    customElement(customElementName)
], OakSelect);
export { OakSelect };
//# sourceMappingURL=index.js.map
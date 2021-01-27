var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { formControlRegisterSubject } from '../../../events/FormControlRegisterEvent';
import { formControlValidatedSubject } from '../../../events/FormControlValidatedEvent';
import { formControlValidateSubject } from '../../../events/FormControlValidateEvent';
import { globalStyles } from '../../../global-styles';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../public/oak-button';
import { oakSelectModernStyles } from './index-styles';
let elementIdCounter = 0;
/**
 * Select drop down (native) form element.
 *
 */
let OakSelect = class OakSelect extends LitElement {
    constructor() {
        super();
        this.elementId = `oak-select-modern-${elementIdCounter++}`;
        this.SPACEBAR_KEY_CODE = [0, 32];
        this.ENTER_KEY_CODE = 13;
        this.DOWN_ARROW_KEY_CODE = 40;
        this.UP_ARROW_KEY_CODE = 38;
        this.ESCAPE_KEY_CODE = 27;
        this.placeholder = '';
        this.multiple = false;
        this.tooltip = '';
        this.name = this.elementId;
        this.disabled = false;
        /**
         * Validators
         *
         */
        /**
         * @private
         */
        this._errors = [];
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
        this.list = document.querySelector('.dropdown__list');
        this.listContainer = document.querySelector('.dropdown__list-container');
        this.dropdownArrow = document.querySelector('.dropdown__arrow');
        this.listItems = document.querySelectorAll('.dropdown__list-item');
        // this.dropdownSelectedNode = document.querySelector('#dropdown__selected');
        // this.listItemIds = [];
        // this.dropdownSelectedNode?.addEventListener('click', (e: any) =>
        //   this.toggleListVisibility(e)
        // );
        // this.dropdownSelectedNode?.addEventListener('keydown', (e: any) =>
        //   this.toggleListVisibility(e)
        // );
        // Add each list item's id to the listItems array
        this.listItems.forEach((item) => this.listItemIds.push(item.id));
        this.listItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                this.setSelectedListItem(e);
                this.closeList();
            });
            item.addEventListener('keydown', (e) => {
                switch (e.keyCode) {
                    case this.ENTER_KEY_CODE:
                        this.setSelectedListItem(e);
                        this.closeList();
                        return;
                    case this.DOWN_ARROW_KEY_CODE:
                        this.focusNextListItem(this.DOWN_ARROW_KEY_CODE);
                        return;
                    case this.UP_ARROW_KEY_CODE:
                        this.focusNextListItem(this.UP_ARROW_KEY_CODE);
                        return;
                    case this.ESCAPE_KEY_CODE:
                        this.closeList();
                        return;
                    default:
                        return;
                }
            });
        });
    }
    setSelectedListItem(e) {
        let selectedTextToAppend = document.createTextNode(e.target.innerText);
        this.dropdownSelectedNode.innerHTML = null;
        this.dropdownSelectedNode.appendChild(selectedTextToAppend);
    }
    closeList() {
        this.list.classList.remove('open');
        this.dropdownArrow.classList.remove('expanded');
        this.listContainer.setAttribute('aria-expanded', false);
    }
    toggleListVisibility(e) {
        var _a, _b, _c, _d;
        let openDropDown = this.SPACEBAR_KEY_CODE.includes(e.keyCode) ||
            e.keyCode === this.ENTER_KEY_CODE;
        if (e.keyCode === this.ESCAPE_KEY_CODE) {
            this.closeList();
        }
        if (e.type === 'click' || openDropDown) {
            this.list = document.querySelector('.dropdown__list');
            (_a = this.list) === null || _a === void 0 ? void 0 : _a.classList.toggle('open');
            (_b = this.dropdownArrow) === null || _b === void 0 ? void 0 : _b.classList.toggle('expanded');
            (_c = this.listContainer) === null || _c === void 0 ? void 0 : _c.setAttribute('aria-expanded', (_d = this.list) === null || _d === void 0 ? void 0 : _d.classList.contains('open'));
        }
        if (e.keyCode === this.DOWN_ARROW_KEY_CODE) {
            this.focusNextListItem(this.DOWN_ARROW_KEY_CODE);
        }
        if (e.keyCode === this.UP_ARROW_KEY_CODE) {
            this.focusNextListItem(this.UP_ARROW_KEY_CODE);
        }
    }
    focusNextListItem(direction) {
        const activeElementId = document.activeElement.id;
        if (activeElementId === 'dropdown__selected') {
            document.querySelector(`#${this.listItemIds[0]}`).focus();
        }
        else {
            const currentActiveElementIndex = this.listItemIds.indexOf(activeElementId);
            if (direction === this.DOWN_ARROW_KEY_CODE) {
                const currentActiveElementIsNotLastItem = currentActiveElementIndex < this.listItemIds.length - 1;
                if (currentActiveElementIsNotLastItem) {
                    const nextListItemId = this.listItemIds[currentActiveElementIndex + 1];
                    document.querySelector(`#${nextListItemId}`).focus();
                }
            }
            else if (direction === this.UP_ARROW_KEY_CODE) {
                const currentActiveElementIsNotFirstItem = currentActiveElementIndex > 0;
                if (currentActiveElementIsNotFirstItem) {
                    const nextListItemId = this.listItemIds[currentActiveElementIndex - 1];
                    document.querySelector(`#${nextListItemId}`).focus();
                }
            }
        }
    }
    validate() {
        this._errors = [];
        formControlValidatedSubject.next({
            formGroupName: this.formGroupName || '',
            formControlName: this.name,
            isValid: this._errors.length === 0,
            formControlValue: this.value,
            errors: this._errors,
        });
    }
    static get styles() {
        return [...globalStyles, oakSelectModernStyles];
    }
    // private handleInput = (event: any) => {
    //   console.log('input', event);
    //   this.propagateEvent(INPUT_INPUT_EVENT, event);
    // };
    // private handleChange = (event: any) => {
    //   console.log('change', event);
    //   this.propagateEvent(INPUT_CHANGE_EVENT, event);
    //   // (this.closest('FORM') as any)?.dispatchEvent(new Event('submit'));
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
        const labelId = `${this.elementId}-label`;
        return html `
      <div class="oak-select-modern">
        <oak-internal-label
          label=${this.label}
          elementId=${labelId}
          elementFor=${this.elementId}
        ></oak-internal-label>
        <ul class="dropdown">
          <li id="dropdown-label" class="dropdown__label">
            Label
          </li>

          <oak-button
            aria-labelledby="dropdown-label"
            id="dropdown__selected"
            @click=${this.toggleListVisibility}
          >
            Option 1
          </oak-button>

          <svg
            class="dropdown__arrow"
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill-rule="evenodd"
          >
            <title>Open drop down</title>
            <path d="M10 0L5 5 0 0z"></path>
          </svg>
          <li
            aria-expanded="false"
            role="list"
            class="dropdown__list-container"
          >
            <ul class="dropdown__list">
              <li class="dropdown__list-item" tabindex="0" id="option-1">
                Option 1
              </li>
              <li class="dropdown__list-item" tabindex="0" id="option-2">
                Option 2
              </li>
            </ul>
          </li>
        </ul>
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
    customElement('oak-select-modern')
], OakSelect);
export { OakSelect };
//# sourceMappingURL=index.js.map
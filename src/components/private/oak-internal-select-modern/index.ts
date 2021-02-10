import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {formControlRegisterSubject} from '../../../events/FormControlRegisterEvent';
import {formControlValidatedSubject} from '../../../events/FormControlValidatedEvent';
import {formControlValidateSubject} from '../../../events/FormControlValidateEvent';
import {globalStyles} from '../../../global-styles';
import {ValidationErrorType} from '../../../validation/types/ValidationResultType';
import '../oak-internal-popup';
import {oakInternalSelectModernStyles} from './index-styles';
import {isEmptyOrSpaces, toString} from '../../../utils/StringUtils';
import {
  INPUT_CHANGE_EVENT,
  INPUT_INPUT_EVENT,
} from '../../../types/InputEventTypes';
import {RequiredValidator} from '../../../validation/RequiredValidator';
import {oakInternalSelectModernSizeStyles} from './size-styles';

let elementIdCounter = 0;
const customElementName = 'oak-internal-select-modern';

/**
 * Select drop down (native) form element.
 *
 */
@customElement(customElementName)
export class OakInternalSelectModern extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;
  private inputElementId = `${this.elementId}-input`;
  private liElementId = `${this.elementId}-popup-li`;
  private ulElementId = `${this.elementId}-popup-ul`;

  @property({type: String})
  elementFor = `${customElementName}-${elementIdCounter++}-id`;

  @property({type: Boolean})
  private _isActivated = false;

  @property({type: Number})
  private _currentIndex = 0;

  @property({type: String})
  private _searchCriteria = '';

  @property({type: String})
  formGroupName?: string;

  @property({type: String})
  label?: string | null;

  @property()
  value?: string | number | null;

  @property({type: String})
  placeholder?: string = '';

  @property({type: Boolean})
  multiple?: boolean = false;

  @property({type: String})
  tooltip?: string = '';

  @property({type: String})
  name: string = this.elementId;

  @property({type: Boolean})
  disabled = false;

  @property({type: Array})
  options: any[] = [];

  @property({type: Array})
  optionsAsKeyValue?: {key: string | number; value: string | number}[] | null;

  @property({type: String})
  size?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  shape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' = 'rectangle';

  /**
   * Validators
   *
   */

  /**
   * @private
   */
  @property({type: Array})
  private _errors: ValidationErrorType[] = [];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this._registerEvents();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unregisterEvents();
  }

  private _registerEvents() {
    if (this.formGroupName) {
      formControlRegisterSubject.next({
        formControlName: this.name,
        formGroupName: this.formGroupName,
      });

      formControlValidateSubject
        .asObservable()
        .subscribe((message: {formGroupName: string | undefined}) => {
          if (message.formGroupName === this.formGroupName) {
            this.validate();
          }
        });
    }
  }

  private _unregisterEvents() {
    //
  }

  private handleChange = (index?: number) => {
    if (this._isActivated) {
      this.propagateCustomEvent(
        INPUT_CHANGE_EVENT,
        this.search()[index || this._currentIndex]
      );
      this.propagateCustomEvent(
        INPUT_INPUT_EVENT,
        this.search()[index || this._currentIndex]
      );
      this.handleDeactivated();
    }
  };

  private search = () => {
    if (isEmptyOrSpaces(this._searchCriteria)) {
      return this.options;
    } else {
      return this.options.filter((option: any) =>
        toString(option).includes(this._searchCriteria)
      );
    }
  };

  private keydownEventHandler = (event: any) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.navigateDown();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.navigateUp();
        break;
      case 'Enter':
        event.preventDefault();
        this.handleChange();
        break;
      case 'Tab':
        event.preventDefault();
        this.handleDeactivated();
        break;
      default:
        break;
    }
  };

  private navigateDown() {
    if (this._currentIndex < this.search().length - 1) {
      const elRef = this.shadowRoot?.getElementById(
        `${this.liElementId}-${this._currentIndex + 1}`
      );
      if (elRef && !this.isScrolledIntoView(elRef, true)) {
        elRef.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
      this._currentIndex = this._currentIndex + 1;
    } else {
      this._currentIndex = 0;
    }
  }

  private navigateUp = () => {
    if (this._currentIndex > 0) {
      const elRef = this.shadowRoot?.getElementById(
        `${this.liElementId}-${this._currentIndex - 1}`
      );
      if (elRef && !this.isScrolledIntoView(elRef)) {
        elRef.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
      this._currentIndex = this._currentIndex - 1;
    } else {
      this._currentIndex = 0;
    }
  };

  private isScrolledIntoView = (el: any, invertDirection = false) => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const containerEl = this.shadowRoot?.getElementById(this.ulElementId);
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
    } else {
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

  private handleActivated = () => {
    this._isActivated = true;
    this._currentIndex = 0;
    const docRef = this.shadowRoot?.getElementById(this.elementId);
    if (docRef) {
      docRef.addEventListener('keydown', this.keydownEventHandler);
    }

    setTimeout(() => {
      const inputElRef = this.shadowRoot?.getElementById(this.inputElementId);
      if (inputElRef) {
        inputElRef.focus();
      }
    }, 201);
  };

  private handleDeactivated = () => {
    this._isActivated = false;
    this._searchCriteria = '';
    const docRef = this.shadowRoot?.getElementById(this.elementId);
    if (docRef) {
      docRef.removeEventListener('keydown', this.keydownEventHandler);
    }
  };

  private handleKeydown = (event: any) => {
    if (this._isActivated) {
      this.keydownEventHandler(event.detail.value);
    }
  };

  private _searchResults = () => {
    if (isEmptyOrSpaces(this._searchCriteria)) {
      return this.options;
    } else {
      return this.options.filter((option: any) =>
        toString(option).includes(this._searchCriteria)
      );
    }
  };

  private handleSearchCriteriaChange = (event: any) => {
    this._searchCriteria = event.srcElement.value;
    this._currentIndex = 0;
  };

  private validate = () => {
    this._errors = [];
    this._errors = this._errors.concat(RequiredValidator(this.value));
    formControlValidatedSubject.next({
      formGroupName: this.formGroupName || '',
      formControlName: this.name,
      isValid: this._errors.length === 0,
      formControlValue: this.value,
      errors: this._errors,
    });
  };

  private getClassMap = (
    baseClass:
      | 'popup'
      | 'ul'
      | 'search-filter'
      | 'input'
      | 'action'
      | 'value'
      | 'placeholder'
      | 'margin'
  ): any => {
    switch (baseClass) {
      case 'popup':
      case 'search-filter':
      case 'action':
      case 'value':
      case 'placeholder':
        return {
          [`${customElementName}--${baseClass}`]: true,
        };
      case 'ul':
        return {
          [`${customElementName}--${baseClass}`]: true,
          activated: this._isActivated,
        };
      case 'margin':
        return {
          [`${customElementName}--${baseClass}`]: true,
        };
      case 'input':
        return {
          [`${customElementName}-${baseClass}`]: true,
          [`${customElementName}--size-${this.size}`]: true,
          [`oak-shape-${this.shape}`]: true,
        };
      default:
        return {};
    }
  };

  // private handleSearchCriteriaChange = (event: any) => {
  //   this._searchCriteria = event.detail.value;
  // };

  static get styles() {
    return [
      ...globalStyles,
      oakInternalSelectModernStyles,
      oakInternalSelectModernSizeStyles,
    ];
  }

  private propagateCustomEvent = (eventName: string, value?: any) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: this.name,
          value: value,
        },
      })
    );
  };

  render() {
    const labelId = `${this.elementId}-label`;

    return html`
      <oak-internal-label
        label=${this.label}
        elementId=${labelId}
        elementFor=${this.elementId}
      ></oak-internal-label>
      <oak-internal-popup
        .elementFor=${this.elementFor}
        .value=${this.value}
        .placeholder=${this.placeholder}
        .label=${this.label}
        .errors=${this._errors}
        @activated=${this.handleActivated}
        @deactivated=${this.handleDeactivated}
        @key-pressed=${this.handleKeydown}
        ?isActivated=${this._isActivated}
        .size=${this.size}
        .shape=${this.shape}
      >
        <div
          slot="popup"
          class=${classMap(this.getClassMap('popup'))}
          id=${this.elementId}
        >
          <div class=${classMap(this.getClassMap('search-filter'))}>
            <input
              class=${classMap(this.getClassMap('input'))}
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
            ${this._searchResults().map(
              (item, index) =>
                html`<li
                  id=${`${this.liElementId}-${index}`}
                  role="option"
                  class=${this._currentIndex === index ? 'option-active' : ''}
                  @click=${() => this.handleChange(index)}
                >
                  ${item}
                </li>`
            )}
            ${this._searchResults().length === 0
              ? html` <li>No results found</li>`
              : html``}
          </ul>
        </div>
      </oak-internal-popup>
      <oak-internal-form-tooltip
        .tooltip=${this.tooltip}
      ></oak-internal-form-tooltip>
      <oak-internal-form-error
        .errors=${this._errors}
      ></oak-internal-form-error>
      <div class=${classMap(this.getClassMap('margin'))}></div>
    `;
  }
}

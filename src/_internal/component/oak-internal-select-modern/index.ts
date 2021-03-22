import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {formControlRegisterSubject} from '../../events/FormControlRegisterEvent';
import {formControlValidatedSubject} from '../../events/FormControlValidatedEvent';
import {formControlValidateSubject} from '../../events/FormControlValidateEvent';
import {globalStyles} from '../../styles/global-styles';
import {ValidationErrorType} from '../../../types/ValidationResultType';
import '../oak-internal-popup';
import '../oak-internal-popup-text-input-action';
import '../oak-internal-popup-input-action';
import {oakInternalSelectModernStyles} from './index-styles';
import {isEmptyOrSpaces, toString} from '../../utils/StringUtils';
import {
  INPUT_CHANGE_EVENT,
  INPUT_INPUT_EVENT,
} from '../../../event/OakInputEvent';
import {RequiredValidator} from '../../validator/RequiredValidator';
import {oakInternalSelectModernSizeStyles} from './size-styles';
import {oakInternalSelectModernFillStyles} from './fill-styles';

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

  @property({type: Boolean})
  private _isActivated = false;

  @property({type: Number})
  private _currentIndex = 0;

  @property({type: String})
  private _searchCriteria = '';

  @property({type: String})
  formGroupName?: string;

  @property({type: String})
  label?: string | null | undefined = null;

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

  @property({type: String})
  autoCompleteVariant: 'none' | 'autocomplete' | 'searchbox' = 'searchbox';

  @property({type: Array})
  options: any[] = [];

  @property({type: Array})
  optionsAsKeyValue?: {key: string | number; value: string | number}[] | null;

  @property({type: String})
  size?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  shape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' = 'rectangle';

  @property({type: String})
  fill?: 'container' | 'surface' | 'float' | 'none' = 'surface';

  /**
   * 	If true, the text will have a bottom margin.
   */
  @property({type: Boolean})
  gutterBottom?: boolean = false;

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

  private handleChange = (index: number) => {
    if (this._isActivated) {
      this.propagateCustomEvent(INPUT_CHANGE_EVENT, this.search()[index]);
      this.propagateCustomEvent(INPUT_INPUT_EVENT, this.search()[index]);
      this._deactivate();
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
        this.handleChange(this._currentIndex);
        break;
      case 'Tab':
        event.preventDefault();
        this._deactivate();
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

  private _activate = () => {
    this._isActivated = true;
    const chosenIndex = this._searchResults().findIndex(
      (item) => item === this.value
    );
    this._currentIndex = chosenIndex < 0 ? 0 : chosenIndex;
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

  private _deactivate = () => {
    this._isActivated = false;
    this._searchCriteria = '';
    const docRef = this.shadowRoot?.getElementById(this.elementId);
    if (docRef) {
      docRef.removeEventListener('keydown', this.keydownEventHandler);
    }
  };

  private _toggle = () => {
    console.log('&&&& TOGGLE');
    if (this._isActivated) {
      this._deactivate();
    } else {
      this._activate();
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
      | 'li'
      | 'li-indicator'
      | 'li-text'
      | 'search-filter'
      | 'input'
      | 'action'
      | 'value'
      | 'placeholder'
      | 'margin',
    index?: number
  ): any => {
    switch (baseClass) {
      case 'action':
      case 'value':
      case 'placeholder':
      case 'li-indicator':
      case 'li-text':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'ul':
        return {
          [`${customElementName}__${baseClass}`]: true,
          activated: this._isActivated,
        };
      case 'li':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--active`]:
            this._currentIndex === index,
        };
      case 'margin':
        return {
          [`${customElementName}__${baseClass}`]: true,
          'oak-gutter-bottom': this.gutterBottom,
        };
      case 'search-filter':
      case 'popup':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--fill-${this.fill}`]: true,
        };
      case 'input':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--size-${this.size}`]: true,
          [`oak-shape-${this.shape}`]: true,
          [`oak-fill-${this.fill}`]: true,
          [`oak-fill-${this.fill}--hover`]: true,
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
      oakInternalSelectModernFillStyles,
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

  private _handleSearchCriteriaChange = (event: any) => {
    this._searchCriteria = event.detail.value;
  };

  render() {
    const labelId = `${this.elementId}-label`;

    return html`
      <oak-internal-label
        .label=${this.label}
        id=${labelId}
        elementFor=${this.elementId}
      ></oak-internal-label>
      <oak-internal-popup
        .value=${this.value}
        .placeholder=${this.placeholder}
        .label=${this.label}
        .errors=${this._errors}
        @popup-activate=${this._activate}
        @popup-deactivate=${this._deactivate}
        @popup-key-pressed=${this.handleKeydown}
        ?isActivated=${this._isActivated}
        .size=${this.size}
        .shape=${this.shape}
        .fill=${this.fill}
      >
        <div slot="action">
          ${this.autoCompleteVariant === 'autocomplete'
            ? html`<oak-internal-popup-text-input-action
                @toggle=${this._toggle}
                .value=${this._isActivated ? this._searchCriteria : this.value}
                ?isActivated=${this._isActivated}
                .size=${this.size}
                .shape=${this.shape}
                .fill=${this.fill}
                @search-criteria-change=${this._handleSearchCriteriaChange}
              ></oak-internal-popup-text-input-action>`
            : html` <oak-internal-popup-input-action
                @toggle=${this._toggle}
                .value=${this.value}
                .size=${this.size}
                .shape=${this.shape}
                .fill=${this.fill}
              ></oak-internal-popup-input-action>`}
        </div>
        <div
          slot="popup"
          class=${classMap(this.getClassMap('popup'))}
          id=${this.elementId}
        >
          ${this.autoCompleteVariant === 'searchbox'
            ? html`<div class=${classMap(this.getClassMap('search-filter'))}>
                <input
                  class=${classMap(this.getClassMap('input'))}
                  type="text"
                  placeholder="Type to filter"
                  autocomplete="off"
                  .value=${this._searchCriteria}
                  id=${this.inputElementId}
                  @input=${this.handleSearchCriteriaChange}
                />
              </div>`
            : html``}
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
                  class=${classMap(this.getClassMap('li', index))}
                  @click=${() => this.handleChange(index)}
                >
                  <div class=${classMap(this.getClassMap('li-indicator'))}>
                    ${this.value === item
                      ? html`<svg
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                          ></path>
                        </svg>`
                      : html``}
                  </div>
                  <div class=${classMap(this.getClassMap('li-text'))}>
                    ${item}
                  </div>
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

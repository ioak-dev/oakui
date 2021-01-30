import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {formControlRegisterSubject} from '../../../events/FormControlRegisterEvent';
import {formControlValidatedSubject} from '../../../events/FormControlValidatedEvent';
import {formControlValidateSubject} from '../../../events/FormControlValidateEvent';
import {globalStyles} from '../../../global-styles';
import {ValidationErrorType} from '../../../validation/types/ValidationResultType';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../public/oak-button';
import '../../public/oak-input';
import {oakSelectModernStyles} from './index-styles';
import {isEmptyOrSpaces, toString} from '../../../utils/StringUtils';
import {
  INPUT_CHANGE_EVENT,
  INPUT_INPUT_EVENT,
} from '../../../types/InputEventTypes';
import {containerScrolledSubject} from '../../../events/ContainerScrolledEvent';

let elementIdCounter = 0;
const customElementName = 'oak-select-modern';

/**
 * Select drop down (native) form element.
 *
 */
@customElement(customElementName)
export class OakSelect extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;
  private liElementId = `${this.elementId}-popup-li`;
  // private inputElementId = `${this.elementId}-input`;
  private valueContainerElementId = `${this.elementId}-value-container`;
  private ulElementId = `${this.elementId}-popup-ul`;
  private popupContainerElementId = `${this.elementId}-popup-container`;

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

  @property({type: Array})
  scrollableContainers: string[] = [];

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
    window.addEventListener('resize', this.adjustPositioning);
    window.addEventListener('scroll', this.adjustPositioning);
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
    containerScrolledSubject.asObservable().subscribe(() => {
      this.adjustPositioning();
    });
  }

  private _unregisterEvents() {
    window.removeEventListener('resize', this.adjustPositioning);
    window.removeEventListener('scroll', this.adjustPositioning);
  }

  private keydownEventHandler = (event: any) => {
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

  private navigateDown() {
    if (this._currentIndex < this.searchpopup().length - 1) {
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

    const containerEl = this.shadowRoot?.getElementById(
      this.popupContainerElementId
    );
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

  private activate = () => {
    if (!this._isActivated) {
      this._isActivated = true;
      setTimeout(() => this.adjustPositioning());
      // setTimeout(() => this.addTransitions());

      if (this.scrollableContainers.length > 0) {
        console.log('*******', this.scrollableContainers);
      }
    }
  };

  private deactivate = () => {
    this._isActivated = false;
    this._searchCriteria = '';
    // setTimeout(() => this.addTransitions());
  };

  private adjustPositioning = () => {
    const popupContainerElRef = this.shadowRoot?.getElementById(
      this.popupContainerElementId
    );
    const valueContainerElRef = this.shadowRoot?.getElementById(
      this.valueContainerElementId
    );
    if (valueContainerElRef && popupContainerElRef) {
      popupContainerElRef.style.left = `${
        valueContainerElRef.getBoundingClientRect().left
      }px`;
      popupContainerElRef.style.top = `${
        valueContainerElRef.getBoundingClientRect().bottom + 8
      }px`;
      popupContainerElRef.style.width = `${
        valueContainerElRef.getBoundingClientRect().width
      }px`;
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

  private handleChange = (index?: number) => {
    if (this._isActivated) {
      this.propagateCustomEvent(
        INPUT_CHANGE_EVENT,
        this.searchpopup()[index || this._currentIndex]
      );
      this.propagateCustomEvent(
        INPUT_INPUT_EVENT,
        this.searchpopup()[index || this._currentIndex]
      );
      this.deactivate();
    }
  };

  private searchpopup = () => {
    if (isEmptyOrSpaces(this._searchCriteria)) {
      return this.options;
    } else {
      return this.options.filter((option: any) =>
        toString(option).includes(this._searchCriteria)
      );
    }
  };

  private validate = () => {
    this._errors = [];
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
      | 'base'
      | 'value-container'
      | 'value'
      | 'placeholder'
      | 'popup-container'
      | 'popup'
      | 'ul'
      | 'search-filter'
  ): any => {
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

  private handleInputFocused = () => {
    if (this._isActivated) {
      this.deactivate();
    } else {
      this.activate();
      window.addEventListener('keydown', (e: any) => {
        if (['Escape'].includes(e.key)) {
          this.deactivate();
        }
      });
      window.addEventListener('click', (e: any) => {
        if (
          !e.target.shadowRoot ||
          !e.target.shadowRoot.contains(
            this.shadowRoot?.getElementById(this.elementId)
          )
        ) {
          this.deactivate();
        }
      });
      const docRef = this.shadowRoot?.getElementById(this.elementId);
      if (docRef) {
        docRef.addEventListener('keydown', this.keydownEventHandler);
      }
    }
  };

  static get styles() {
    return [...globalStyles, oakSelectModernStyles];
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
            ? html`<div class=${classMap(this.getClassMap('value'))}>
                ${this.value}
              </div>`
            : html`<div class=${classMap(this.getClassMap('placeholder'))}>
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
              ${this.searchpopup().map(
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
              ${this.searchpopup().length === 0
                ? html` <li>No popup found</li>`
                : html``}
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
}

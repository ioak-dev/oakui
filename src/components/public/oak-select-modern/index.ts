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
const rootClass = 'oak-select-modern';

/**
 * Select drop down (native) form element.
 *
 */
@customElement('oak-select-modern')
export class OakSelect extends LitElement {
  private elementId = `oak-select-modern-${elementIdCounter++}`;
  private resultsLiElementId = `${this.elementId}-results-li`;
  // private inputElementId = `${this.elementId}-input`;
  private valueElementId = `${this.elementId}-value`;
  private resultsUlElementId = `${this.elementId}-results-ul`;

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
        this._isActivated ? this.handleChange() : this.activate();
        break;
      default:
        break;
    }
  };

  private navigateDown() {
    if (this._currentIndex < this.searchResults().length - 1) {
      const elRef = this.shadowRoot?.getElementById(
        `${this.resultsLiElementId}-${this._currentIndex + 1}`
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
        `${this.resultsLiElementId}-${this._currentIndex - 1}`
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

  private navigateHome = () => {
    const elRef = this.shadowRoot?.getElementById(
      `${this.resultsLiElementId}-0`
    );
    if (elRef) {
      elRef.scrollIntoView();
    }
    this._currentIndex = 0;
  };

  private navigateEnd = () => {
    const elRef = this.shadowRoot?.getElementById(
      `${this.resultsLiElementId}-${this.searchResults().length - 1}`
    );
    if (elRef) {
      elRef.scrollIntoView();
    }
    this._currentIndex = this.searchResults().length - 1;
  };

  private isScrolledIntoView = (el: any, invertDirection = false) => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const containerEl = this.shadowRoot?.getElementById(
      `${this.elementId}-results-ul`
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
      if (this.scrollableContainers.length > 0) {
        console.log('*******', this.scrollableContainers);
      }
    }
  };

  private adjustPositioning = () => {
    const ulElRef = this.shadowRoot?.getElementById(this.resultsUlElementId);
    const valueElRef = this.shadowRoot?.getElementById(this.valueElementId);
    if (valueElRef && ulElRef) {
      ulElRef.style.left = `${valueElRef.getBoundingClientRect().left}px`;
      ulElRef.style.top = `${valueElRef.getBoundingClientRect().bottom + 6}px`;
      ulElRef.style.width = `${
        valueElRef.getBoundingClientRect().right -
        valueElRef.getBoundingClientRect().left
      }px`;
    }
  };

  private deactivate = () => {
    this._isActivated = false;
    this._searchCriteria = '';
  };

  private handleChange = (index?: number) => {
    if (this._isActivated) {
      this.propagateCustomEvent(
        INPUT_CHANGE_EVENT,
        this.searchResults()[index || this._currentIndex]
      );
      this.propagateCustomEvent(
        INPUT_INPUT_EVENT,
        this.searchResults()[index || this._currentIndex]
      );
      this.deactivate();
    }
  };

  private searchResults = () => {
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

  private getClassMap = (baseClass: 'base' | 'value' | 'results'): any => {
    switch (baseClass) {
      case 'base':
        return {
          [rootClass]: true,
        };
      case 'value':
        return {
          [`${rootClass}--${baseClass}`]: true,
        };
      case 'results':
        return {
          [`${rootClass}--${baseClass}`]: true,
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
        if (['Tab', 'Escape'].includes(e.key)) {
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
          class=${classMap(this.getClassMap('value'))}
          @click=${this.handleInputFocused}
          id=${this.valueElementId}
          type="button"
        >
          <div>
            ${this.value || this.placeholder}
          </div>
          <div>
            down
          </div>
        </button>
        ${this._isActivated
          ? html`
              <div class=${classMap(this.getClassMap('results'))}>
                <ul role="listbox" id=${this.resultsUlElementId}>
                  ${this.searchResults().map(
                    (item, index) =>
                      html`<li
                        id=${`${this.resultsLiElementId}-${index}`}
                        role="option"
                        class=${this._currentIndex === index
                          ? 'option-active'
                          : ''}
                        @click=${() => this.handleChange(index)}
                      >
                        ${item}
                      </li>`
                  )}
                  ${this.searchResults().length === 0
                    ? html` <li>No results found</li>`
                    : html``}
                </ul>
              </div>
            `
          : html``}
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

import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../styles/global-styles';
import {ValidationErrorType} from '../../../types/ValidationResultType';
import '../oak-internal-form-tooltip';
import '../oak-internal-form-error';
import '../../../component/oak-button';
import '../../../component/oak-input';
import {oakInternalPopupInputActionStyles} from './index-styles';
import {oakInternalPopupInputActionSizeStyles} from './size-styles';
import {oakInternalPopupInputActionBorderStyles} from './border-styles';
import {oakInternalPopupInputActionFillStyles} from './fill-styles';

let elementIdCounter = 0;
const customElementName = 'oak-internal-popup-input-action';

/**
 * Select drop down (native) form element.
 *
 */
@customElement(customElementName)
export class OakInternalPopupInputAction extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Boolean})
  private multiple = false;

  @property()
  value?: any;

  @property({type: String})
  placeholder?: string = '';

  @property({type: String})
  tooltip?: string = '';

  @property({type: String})
  name: string = this.elementId;

  @property({type: Boolean})
  disabled = false;

  @property({type: Array})
  options?: any[] | null;

  @property({type: Array})
  optionsAsKeyValue?: {id: string | number; value: string | number}[] | null;

  @property({type: Array})
  errors: ValidationErrorType[] = [];

  @property({type: Array})
  scrollableContainers: string[] = [];

  @property({type: String})
  size?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  shape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' | 'underline' =
    'rectangle';

  @property({type: String})
  color?:
    | 'global'
    | 'container'
    | 'surface'
    | 'float'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'info'
    | 'invert'
    | 'danger'
    | 'warning'
    | 'success'
    | 'none' = 'container';

  @property({type: Boolean})
  fill? = false;

  /**
   * Validators
   *
   */

  /**
   * @private
   */
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
    //
  }

  private _unregisterEvents() {
    // window.removeEventListener('resize', this.adjustPositioning);
    // window.removeEventListener('scroll', this.adjustPositioning);
  }

  private _getValue() {
    if (this.multiple) {
      if (this.value && Array.isArray(this.value)) {
        if (this.options) {
          return this.value.join(', ');
        }
        return this.optionsAsKeyValue
          ?.filter((item) => this.value.includes(item.id))
          .map((item) => item.value)
          .join(', ');
      }
      return '';
    }
    if (this.value) {
      if (this.options) {
        return this.value;
      }
      return this.optionsAsKeyValue?.find((item) => item.id === this.value)
        ?.value;
    }
    return null;
  }

  private getClassMap = (
    baseClass: 'base' | 'value' | 'placeholder' | 'down-arrow'
  ): any => {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          [`${customElementName}--size-${this.size}`]: true,
          [`oak-shape-${this.shape}`]: true,
          [`${customElementName}--color-${this.color}`]: true,
          [`${customElementName}--fill`]: this.fill,
          [`${customElementName}--fill-color-${this.color}`]: this.fill,
          [`${customElementName}--underline`]: this.shape === 'underline',
          [`${customElementName}--no-underline`]: this.shape !== 'underline',
          [`oak-shape-${this.shape}`]: this.shape !== 'underline',
        };
      case 'value':
      case 'placeholder':
      case 'down-arrow':
        return {
          [`${customElementName}--${baseClass}`]: true,
        };
      default:
        return {};
    }
  };

  private handleInputFocused = () => {
    this.propagateCustomEvent('toggle');
  };

  static get styles() {
    return [
      ...globalStyles,
      oakInternalPopupInputActionStyles,
      oakInternalPopupInputActionSizeStyles,
      oakInternalPopupInputActionBorderStyles,
      oakInternalPopupInputActionFillStyles,
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
          value: value || null,
        },
      })
    );
  };

  render() {
    return html`
      <button
        class=${classMap(this.getClassMap('base'))}
        @click=${this.handleInputFocused}
        id=${this.elementId}
        type="button"
      >
        ${this._getValue()
          ? html`<div class=${classMap(this.getClassMap('value'))}>
              ${this._getValue()}
            </div>`
          : html`<div class=${classMap(this.getClassMap('placeholder'))}>
              ${this.placeholder}
            </div>`}
        <div class=${classMap(this.getClassMap('down-arrow'))}>
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </div>
      </button>
    `;
  }
}

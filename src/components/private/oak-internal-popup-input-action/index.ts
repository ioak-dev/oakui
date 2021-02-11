import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {ValidationErrorType} from '../../../validation/types/ValidationResultType';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../public/oak-button';
import '../../public/oak-input';
import {oakInternalPopupInputActionStyles} from './index-styles';
import {oakInternalPopupInputActionSizeStyles} from './size-styles';

let elementIdCounter = 0;
const customElementName = 'oak-internal-popup-input-action';

/**
 * Select drop down (native) form element.
 *
 */
@customElement(customElementName)
export class OakInternalPopupInputAction extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property()
  value?: string | number | null;

  @property({type: String})
  placeholder?: string = '';

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
  errors: ValidationErrorType[] = [];

  @property({type: Array})
  scrollableContainers: string[] = [];

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

  private getClassMap = (baseClass: 'base' | 'value' | 'placeholder'): any => {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          [`${customElementName}--size-${this.size}`]: true,
          [`oak-shape-${this.shape}`]: true,
        };
      case 'value':
      case 'placeholder':
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
    `;
  }
}

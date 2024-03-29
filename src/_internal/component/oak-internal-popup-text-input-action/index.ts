import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../styles/global-styles';
import {ValidationErrorType} from '../../../types/ValidationResultType';
import '../oak-internal-form-tooltip';
import '../oak-internal-form-error';
import '../../../component/oak-button';
import '../../../component/oak-input';
import {oakInternalPopupTextInputActionStyles} from './index-styles';
import {oakInternalPopupTextInputActionSizeStyles} from './size-styles';

let elementIdCounter = 0;
const customElementName = 'oak-internal-popup-text-input-action';

/**
 * Select drop down (native) form element.
 *
 */
@customElement(customElementName)
export class OakInternalPopupInputAction extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Boolean})
  private isActivated = false;

  @property({type: Boolean})
  private multiple = false;

  @property()
  value?: any;

  @property()
  searchCriteria?: string = '';

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

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    _changedProperties.forEach((_, propName) => {
      if (propName === 'isActivated' && !this.isActivated) {
        this._handlePostDeActivate();
      }
    });
    return true;
  }

  private _handlePostDeActivate() {
    setTimeout(() => {
      const elRef = this.shadowRoot?.getElementById(this.elementId);
      if (elRef) {
        elRef.blur();
      }
    });
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
          [`oak-fill-${this.color}`]: true,
          [`oak-fill-${this.color}--hover`]: true,
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

  private _getValue() {
    if (this.isActivated) {
      return this.searchCriteria;
    }

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
    return this.value;
  }

  private handleInputFocused = () => {
    this._propagateCustomEvent('toggle');
  };

  private _handleChange = (event: any) => {
    this._propagateCustomEvent('search-criteria-change', event.detail.value);
  };

  private _propagateCustomEvent = (eventName: string, value?: any) => {
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

  static get styles() {
    return [
      ...globalStyles,
      oakInternalPopupTextInputActionStyles,
      oakInternalPopupTextInputActionSizeStyles,
    ];
  }

  render() {
    return html`
      <oak-input
        type="text"
        .value=${this._getValue()}
        class=${classMap(this.getClassMap('base'))}
        .shape=${this.shape}
        .size=${this.size}
        .color=${this.color}
        ?fill=${this.fill}
        @input-focus=${this.handleInputFocused}
        id=${this.elementId}
        @input-input=${this._handleChange}
      ></oak-input>
    `;
  }
}

import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {formControlRegisterSubject} from '../../events/FormControlRegisterEvent';
import {formControlValidatedSubject} from '../../events/FormControlValidatedEvent';
import {formControlValidateSubject} from '../../events/FormControlValidateEvent';
import {globalStyles} from '../../styles/global-styles';
import {ValidationErrorType} from '../../../types/ValidationResultType';
import '../../../component/oak-label';
import '../oak-internal-form-tooltip';
import '../oak-internal-form-error';
import {oakInternalSelectNativeStyles} from './index-styles';
import {oakInternalSelectNativeSizeStyles} from './size-styles';
import {
  SELECT_CHANGE_EVENT,
  SELECT_INPUT_EVENT,
} from '../../../event/OakSelectEvent';
import {Subscription} from 'rxjs';

let elementIdCounter = 0;
const customElementName = 'oak-internal-select-native';

/**
 * Select drop down (native) form element.
 *
 */
@customElement(customElementName)
export class OakInternalSelectNative extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

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

  @property({type: Boolean})
  required?: boolean = false;

  @property({type: Boolean})
  fill?: boolean = false;

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

  private _subscriptions: Subscription[] = [];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._subscriptions.forEach((item) => item.unsubscribe());
  }

  private init() {
    if (this.formGroupName) {
      formControlRegisterSubject.next({
        formControlName: this.name,
        formGroupName: this.formGroupName,
      });

      this._subscriptions.push(
        formControlValidateSubject
          .asObservable()
          .subscribe((message: {formGroupName: string | undefined}) => {
            if (message.formGroupName === this.formGroupName) {
              this.validate();
            }
          })
      );
    }
  }

  private validate() {
    this._errors = [];

    formControlValidatedSubject.next({
      formGroupName: this.formGroupName || '',
      formControlName: this.name,
      isValid: this._errors.length === 0,
      formControlValue: this.value,
      errors: this._errors,
    });
  }

  private getClassMap = (baseClass: 'base' | 'select'): any => {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          'oak-gutter-bottom': this.gutterBottom,
        };
      case 'select':
        return {
          [`${customElementName}--${baseClass}`]: true,
          'validation-failure': this._errors.length > 0,
          [`${customElementName}__${baseClass}--underline`]:
            this.shape === 'underline',
          [`${customElementName}__${baseClass}--no-underline`]:
            this.shape !== 'underline',
          [`oak-shape-${this.shape}`]: this.shape !== 'underline',
          [`oak-fill-${this.color}`]: true,
          [`oak-fill-${this.color}--hover`]: true,
          [`${customElementName}--size-${this.size}`]: true,
        };
      default:
        return {};
    }
  };

  static get styles() {
    return [
      ...globalStyles,
      oakInternalSelectNativeStyles,
      oakInternalSelectNativeSizeStyles,
    ];
  }

  private handleInput = (event: any) => {
    console.log('input', event);
    this.propagateEvent(SELECT_INPUT_EVENT, event);
  };

  private handleChange = (event: any) => {
    console.log('change', event);
    this.propagateEvent(SELECT_CHANGE_EVENT, event);
    // (this.closest('FORM') as any)?.dispatchEvent(new Event('submit'));
  };

  private propagateEvent = (eventName: string, event: any, value?: any) => {
    this.value = event.srcElement.value;
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: event.srcElement.id,
          name: event.srcElement.name,
          value: value || event.srcElement.value,
        },
      })
    );
  };

  render() {
    const labelId = `${this.elementId}-label`;

    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <oak-label
          .label=${this.label}
          elementId=${labelId}
          elementFor=${this.elementId}
        ></oak-label>
        <select
          class=${classMap(this.getClassMap('select'))}
          aria-labelledby=${labelId}
          name=${this.name}
          id=${this.elementId}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?multiple=${this.multiple}
          @change=${this.handleChange}
          @input=${this.handleInput}
        >
          ${this.options?.map(
            (option: any) =>
              html` <option value=${option} key=${option}>${option}</option>`
          )}
          ${this.optionsAsKeyValue?.map(
            (option: any) =>
              html` <option value=${option.value} key=${option.key}
                >${option.value}</option
              >`
          )}
        </select>
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

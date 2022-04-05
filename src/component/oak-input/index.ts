import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {formControlRegisterSubject} from '../../_internal/events/FormControlRegisterEvent';
import {formControlSubmitSubject} from '../../_internal/events/FormControlSubmitEvent';
import {formControlValidatedSubject} from '../../_internal/events/FormControlValidatedEvent';
import {formControlValidateSubject} from '../../_internal/events/FormControlValidateEvent';
import {globalStyles} from '../../_internal/styles/global-styles';
import {
  INPUT_SUBMIT_EVENT,
  INPUT_CHANGE_EVENT,
  INPUT_INPUT_EVENT,
  FILE_SELECTED_EVENT,
  INPUT_FOCUS_EVENT,
} from '../../event/OakInputEvent';
import {RegexValidator} from '../../_internal/validator/RegexValidator';
import {TextLengthValidator} from '../../_internal/validator/TextLengthValidator';
import {ValidationErrorType} from '../../types/ValidationResultType';
import '../oak-label';
import '../../_internal/component/oak-internal-form-tooltip';
import '../../_internal/component/oak-internal-form-error';
import {oakInputStyles} from './index-styles';
import {NumberBoundaryValidator} from '../../_internal/validator/NumberBoundaryValidator';
import {UserDefinedValidator} from '../../_internal/validator/UserDefinedValidator';
import {oakInputSizeStyles} from './size-styles';
import {oakInputBorderStyles} from './border-styles';
import {oakInputFillStyles} from './fill-styles';
import {Subscription} from 'rxjs';
import {RequiredValidator} from '../../_internal/validator/RequiredValidator';
import {NonZeroValidator} from '../../_internal/validator/NonZeroValidator';

let elementIdCounter = 0;

/**
 * Text box form element.
 *
 */
const customElementName = 'oak-input';
@customElement(customElementName)
export class OakInput extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  formGroupName?: string;

  @property({type: String})
  label?: string | null | undefined = null;

  @property()
  value?: any;

  @property({type: Boolean})
  isAutofocus?: boolean = false;

  @property({type: Boolean})
  required?: boolean = false;

  @property({type: Boolean})
  nonZero?: boolean = false;

  @property({type: String})
  type:
    | 'text'
    | 'textarea'
    | 'number'
    | 'password'
    | 'date'
    | 'file'
    | 'time'
    | 'datetime' = 'text';

  @property({type: String})
  placeholder = '';

  @property({type: Boolean})
  multiple?: boolean = false;

  @property({type: String})
  tooltip?: string = '';

  @property({type: String})
  name: string = this.elementId;

  @property({type: Boolean})
  disabled = false;

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

  @property({type: String})
  elementFor?: string;

  /**
   * 	If true, the text will have a bottom margin.
   */
  @property({type: Boolean})
  gutterBottom?: boolean = false;

  /**
   * Validators
   *
   */

  @property({type: Object})
  validatorFunction?: Function;

  /**
   * minLength: Validates that the length of a string is at least as long as the given limit.
   */
  @property({type: Number})
  minLength?: number | null;

  /**
   * maxLength: Validates that the length of a string is not longer than the given limit.
   */
  @property({type: Number})
  maxLength?: number | null;

  /**
   * min: Validates that a given input (number or date) or date is greater than or equal to some minimum (number or date.)
   */
  @property({type: Number})
  min?: number | null;

  /**
   * max: Validates that the given input (number or date) is less than or equal to some maximum value (number or date).
   */
  @property({type: Number})
  max?: number | null;

  /**
   * regexp: Validates that a value matches a specific regular expression (regex).
   */
  @property({type: Object})
  regexp?: object;

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

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    _changedProperties.forEach((_, propName) => {
      if (propName === 'isAutofocus' && this.isAutofocus) {
        setTimeout(() => {
          const el = this.shadowRoot?.getElementById(this.elementId);
          if (el) {
            el.focus();
          }
        }, 0);
      }
    });
    return true;
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

    // if (this.isAutofocus) {
    //   console.log('---------- init set timeout');
    //   setTimeout(() => {
    //     const el = this.shadowRoot?.getElementById(this.elementId);
    //     console.log('---------- init', el);
    //     if (el) {
    //       el.focus();
    //     }
    //   }, 300);
    // }
  }

  private validate() {
    this._errors = [];

    if (this.required) {
      let _type: any = 'text';
      if (['number', 'date'].includes(this.type)) {
        _type = this.type;
      }
      this._errors = this._errors.concat(RequiredValidator(this.value, _type));
    }

    if (this.nonZero && this.type === 'number') {
      this._errors = this._errors.concat(NonZeroValidator(this.value));
    }

    if (
      this.type &&
      ['text', 'password'].includes(this.type) &&
      (this.minLength || this.maxLength)
    ) {
      this._errors = this._errors.concat(
        TextLengthValidator(this.value, this.minLength, this.maxLength)
      );
    }

    if (this.type === 'number' && (this.min || this.max)) {
      this._errors = this._errors.concat(
        NumberBoundaryValidator(this.value, this.min, this.max)
      );
    }

    if (this.type !== 'file' && this.regexp) {
      this._errors = this._errors.concat(
        RegexValidator(this.value, this.regexp)
      );
    }

    if (this.validatorFunction) {
      this._errors = this._errors.concat(
        UserDefinedValidator(
          this.validatorFunction,
          this.value,
          this.name,
          this.formGroupName
        )
      );
    }

    formControlValidatedSubject.next({
      formGroupName: this.formGroupName || '',
      formControlName: this.name,
      isValid: this._errors.length === 0,
      formControlValue: this.value,
      errors: this._errors,
    });
  }

  private handleInput = (event: any) => {
    if (this.type !== 'file') {
      this.propagateEvent(INPUT_INPUT_EVENT, event);
    }
  };

  private handleChange = (event: any) => {
    if (this.type !== 'file') {
      this.propagateEvent(INPUT_CHANGE_EVENT, event);
    } else {
      this.propagateEvent(
        FILE_SELECTED_EVENT,
        event,
        this.processFiles(event.target.files)
      );
    }
    // (this.closest('FORM') as any)?.dispatchEvent(new Event('submit'));
  };

  private processFiles(filesLocal: any): Array<any> {
    let filesToProcess = Array.from(filesLocal);
    if (!this.multiple && filesToProcess.length > 1) {
      filesToProcess = [filesToProcess[0]];
    }
    return filesToProcess;
  }

  private handleKeydown = (event: any) => {
    if (event.key === 'Enter' && !event.shiftKey && this.type !== 'file') {
      this.handleSubmit(event);
    }
  };

  private handleFocus = (event: any) => {
    this.propagateEvent(INPUT_FOCUS_EVENT, event);
  };

  private handleSubmit = (event: any) => {
    if (this.formGroupName) {
      formControlSubmitSubject.next({
        formGroupName: this.formGroupName,
      });
    }
    this.propagateEvent(INPUT_SUBMIT_EVENT, event);
  };

  private propagateEvent = (eventName: string, event: any, value?: any) => {
    let _value = value || event.srcElement.value;
    if (_value && this.type === 'number') {
      _value = parseInt(_value);
    }
    // this.value = event.srcElement.value;
    this.value = _value;
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: event.srcElement.id,
          name: event.srcElement.name,
          value: _value,
        },
      })
    );
  };

  // private get inputEl(): HTMLInputElement {
  //   return this.shadowRoot!.getElementById(this.elementId)! as HTMLInputElement;
  // }

  private getClassMap(baseClass: 'base' | 'input' | 'textarea'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          'oak-gutter-bottom': this.gutterBottom,
        };
      case 'input':
      case 'textarea':
        return {
          [`${customElementName}-${baseClass}`]: true,
          [`${customElementName}--size-${this.size}`]: true,
          [`${customElementName}--color-${this.color}`]: true,
          [`${customElementName}--fill`]: this.fill,
          [`${customElementName}--fill-color-${this.color}`]: this.fill,
          [`${customElementName}--underline`]: this.shape === 'underline',
          [`${customElementName}--no-underline`]: this.shape !== 'underline',
          [`oak-shape-${this.shape}`]: this.shape !== 'underline',
          'validation-failure': this._errors.length > 0,
          [`${customElementName}--font`]: this.type === 'date',
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [
      ...globalStyles,
      oakInputStyles,
      oakInputSizeStyles,
      oakInputBorderStyles,
      oakInputFillStyles,
    ];
  }

  render() {
    const labelId = `${this.elementId}-label`;

    return html`
      <div
        class=${classMap(this.getClassMap('base'))}
        id=${this.elementFor ? this.elementFor : `${this.elementId}-base`}
      >
        <oak-label
          .label=${this.label}
          elementId=${labelId}
          elementFor=${this.elementId}
          ?noMargin=${this.shape === 'underline'}
        ></oak-label>
        ${!['textarea'].includes(this.type)
          ? html`<input
              class=${classMap(this.getClassMap('input'))}
              autocomplete="off"
              aria-labelledby=${labelId}
              name=${this.name}
              id=${this.elementId}
              .value=${this.type !== 'file' ? this.value : ''}
              placeholder=${this.placeholder}
              ?disabled=${this.disabled}
              .type=${this.type === 'datetime' ? 'datetime-local' : this.type}
              ?multiple=${this.multiple}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @keydown=${this.handleKeydown}
              @focus=${this.handleFocus}
            />`
          : html``}
        ${this.type === 'textarea'
          ? html`<textarea
              class=${classMap(this.getClassMap('textarea'))}
              autocomplete="off"
              aria-labelledby=${labelId}
              name=${this.name}
              id=${this.elementId}
              .value=${this.value || ''}
              placeholder=${this.placeholder}
              ?disabled=${this.disabled}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @keydown=${this.handleKeydown}
              @focus=${this.handleFocus}
              rows="4"
            ></textarea>`
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

import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {formControlRegisterSubject} from '../../_internal/events/FormControlRegisterEvent';
import {formControlValidatedSubject} from '../../_internal/events/FormControlValidatedEvent';
import {formControlValidateSubject} from '../../_internal/events/FormControlValidateEvent';
import {globalStyles} from '../../_internal/styles/global-styles';
import {ValidationErrorType} from '../../types/ValidationResultType';
import {UserDefinedValidator} from '../../_internal/validator/UserDefinedValidator';
import '../../_internal/component/oak-internal-label';
import '../../_internal/component/oak-internal-form-tooltip';
import '../../_internal/component/oak-internal-form-error';

import {oakRadioGroupStyles} from './index-styles';
import {radioChangeSubject} from '../../_internal/events/RadioChangeEvent';
import {INPUT_CHANGE_EVENT} from '../../event/OakInputEvent';

let elementIdCounter = 0;

/**
 * Radio button group component.
 *
 */
const customElementName = 'oak-radio-group';
@customElement(customElementName)
export class OakRadioGroup extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  name = '';

  @property({type: String})
  value = '';

  @property({type: String})
  tooltip?: string = '';

  @property({type: String})
  label?: string = '';

  /**
   * 	If true, the element will have a bottom margin.
   */
  @property({type: Boolean})
  gutterBottom?: boolean = false;

  @property({type: String})
  radioGroupName = this.elementId;

  @property({type: String})
  formGroupName?: string;

  /**
   * Validators
   *
   */
  @property({type: Function})
  validatorFunction?: Function;

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
    this.formControlInit();
    this.radioInit();
  }

  private radioInit() {
    radioChangeSubject.asObservable().subscribe((message) => {
      console.log('**from radio group change**', message);
      if (message.radioGroupName === this.radioGroupName) {
        this._handleChange(message.name);
      }
    });
  }

  private formControlInit() {
    if (this.formGroupName) {
      formControlRegisterSubject.next({
        formControlName: this.name,
        formGroupName: this.formGroupName,
      });

      formControlValidateSubject
        .asObservable()
        .subscribe((message: {formGroupName: string | undefined}) => {
          if (message.formGroupName === this.formGroupName) {
            this._validate();
          }
        });
    }
  }

  private _validate() {
    this._errors = [];

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

  private _handleChange = (value: string) => {
    this.propagateEvent(INPUT_CHANGE_EVENT, value);
  };

  private propagateEvent = (eventName: string, value: string) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: this.name,
          value,
        },
      })
    );
  };

  private getClassMap(baseClass: 'base'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          'oak-gutter-bottom': this.gutterBottom,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakRadioGroupStyles];
  }

  render() {
    const labelId = `${this.elementId}-label`;

    return html`
      <div class=${classMap(this.getClassMap('base'))}>
        <oak-internal-label
          .label=${this.label}
          elementId=${labelId}
          elementFor=${this.elementId}
        ></oak-internal-label>
        <slot></slot>
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

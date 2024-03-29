import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {checkboxChangeSubject} from '../../_internal/events/CheckboxChangeEvent';
import {checkboxRegisterSubject} from '../../_internal/events/CheckboxRegisterEvent';
import {formControlRegisterSubject} from '../../_internal/events/FormControlRegisterEvent';
import {formControlValidatedSubject} from '../../_internal/events/FormControlValidatedEvent';
import {formControlValidateSubject} from '../../_internal/events/FormControlValidateEvent';
import {globalStyles} from '../../_internal/styles/global-styles';
import {CheckedCountValidator} from '../../_internal/validator/CheckedCountValidator';
import {UserDefinedValidator} from '../../_internal/validator/UserDefinedValidator';
import {ValidationErrorType} from '../../types/ValidationResultType';
import '../oak-label';
import '../../_internal/component/oak-internal-form-tooltip';
import '../../_internal/component/oak-internal-form-error';

import {oakCheckboxGroupStyles} from './index-styles';
import {Subscription} from 'rxjs';

let elementIdCounter = 0;

/**
 * Checkbox component.
 *
 */
const customElementName = 'oak-checkbox-group';
@customElement(customElementName)
export class OakCheckboxGroup extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  name = '';

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
  checkboxGroupName = this.elementId;

  @property({type: String})
  formGroupName?: string;

  /**
   * Validators
   *
   */
  @property({type: Object})
  validatorFunction?: Function;

  /**
   * min: Validates that atleast n number of checkboxes are chosen.
   */
  @property({type: Number})
  min?: number | null;

  /**
   * max: Validates that atmost n number of checkboxes are chosen.
   */
  @property({type: Number})
  max?: number | null;

  /**
   * @private
   */
  @property({type: Array})
  private _errors: ValidationErrorType[] = [];

  private checkboxList: any = {};

  private _subscriptions: Subscription[] = [];

  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    this.formControlInit();
    this.checkboxInit();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._subscriptions.forEach((item) => item.unsubscribe());
  }

  private checkboxInit() {
    this._subscriptions.push(
      checkboxRegisterSubject.asObservable().subscribe((message) => {
        if (message.checkboxGroupName === this.checkboxGroupName) {
          this.checkboxList = {
            ...this.checkboxList,
            [message.name]: message.value,
          };
        }
      })
    );
    this._subscriptions.push(
      checkboxChangeSubject.asObservable().subscribe((message) => {
        if (message.checkboxGroupName === this.checkboxGroupName) {
          this.checkboxList = {
            ...this.checkboxList,
            [message.name]: message.value,
          };
        }
      })
    );
  }

  private formControlInit() {
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
              this._validate();
            }
          })
      );
    }
  }

  private _validate() {
    this._errors = [];

    if (this.min || this.max) {
      this._errors = this._errors.concat(
        CheckedCountValidator(this._getValue(), this.min, this.max)
      );
    }

    if (this.validatorFunction) {
      this._errors = this._errors.concat(
        UserDefinedValidator(
          this.validatorFunction,
          this.checkboxList,
          this.name,
          this.formGroupName
        )
      );
    }

    formControlValidatedSubject.next({
      formGroupName: this.formGroupName || '',
      formControlName: this.name,
      isValid: this._errors.length === 0,
      formControlValue: this._getValue(),
      errors: this._errors,
    });
  }

  // private _handleChange = () => {
  //   this.propagateEvent(INPUT_CHANGE_EVENT);
  //   this.propagateEvent(INPUT_INPUT_EVENT);
  // };

  // private propagateEvent = (eventName: string) => {
  //   this.dispatchEvent(
  //     new CustomEvent(eventName, {
  //       bubbles: true,
  //       composed: true,
  //       detail: {
  //         id: this.elementId,
  //         name: this.name,
  //         value: this._getValue(),
  //       },
  //     })
  //   );
  // };

  private _getValue(): string[] {
    const _value: string[] = [];
    Object.keys(this.checkboxList).forEach((key) => {
      if (this.checkboxList[key]) {
        _value.push(key);
      }
    });
    return _value;
  }

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
    return [...globalStyles, oakCheckboxGroupStyles];
  }

  render() {
    const labelId = `${this.elementId}-label`;

    return html`
      <div class=${classMap(this.getClassMap('base'))}>
        <oak-label
          .label=${this.label}
          elementId=${labelId}
          elementFor=${this.elementId}
        ></oak-label>
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

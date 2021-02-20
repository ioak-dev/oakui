import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../_internal/styles/global-styles';
import '../../_internal/component/oak-internal-label';
import {formControlRegisterSubject} from '../../_internal/events/FormControlRegisterEvent';
import {formControlSubmitSubject} from '../../_internal/events/FormControlSubmitEvent';
import {FORM_SUBMIT_EVENT, FORM_RESET_EVENT} from '../../event/OakFormEvent';
import {formControlValidateSubject} from '../../_internal/events/FormControlValidateEvent';
import {formControlValidatedSubject} from '../../_internal/events/FormControlValidatedEvent';
import {ValidationResultType} from '../../types/ValidationResultType';
import {formControlResetSubject} from '../../_internal/events/FormControlResetEvent';

let elementIdCounter = 0;

/**
 * Text box form element.
 *
 */
@customElement('oak-form')
export class OakForm extends LitElement {
  private elementId = `oak-form-${elementIdCounter++}`;

  @property({type: String})
  formGroupName = '';

  private formControlNameList: string[] = [];
  private validationResults: ValidationResultType[] = [];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  private init() {
    formControlRegisterSubject.asObservable().subscribe((message) => {
      if (message.formGroupName === this.formGroupName) {
        this.formControlNameList.push(message.formControlName);
      }
    });

    formControlSubmitSubject.asObservable().subscribe((message) => {
      if (message.formGroupName === this.formGroupName) {
        formControlValidateSubject.next({
          formGroupName: message.formGroupName,
        });
      }
    });

    formControlResetSubject.asObservable().subscribe((message) => {
      if (message.formGroupName === this.formGroupName) {
        this.handleReset({formGroupName: message.formGroupName});
      }
    });

    formControlValidatedSubject.asObservable().subscribe((message) => {
      if (message.formGroupName === this.formGroupName) {
        this.validationResults.push(message);
        if (this.validationResults.length === this.formControlNameList.length) {
          this.handleSubmit({
            isValid: !this.validationResults.find((item) => !item.isValid),
            validationResults: this.validationResults,
          });
        }
      }
    });
  }

  static get styles() {
    return [...globalStyles];
  }

  private handleSubmit = (formControlEvent: any) => {
    this.propagateEvent(FORM_SUBMIT_EVENT, formControlEvent);
    this.validationResults = [];
  };

  private handleReset = (formControlEvent: any) => {
    this.propagateEvent(FORM_RESET_EVENT, formControlEvent);
  };

  private propagateEvent = (eventName: string, formControlEvent: any) => {
    console.log('****' + eventName, formControlEvent);
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: formControlEvent,
      })
    );
  };

  render() {
    return html`
      <form
        method="GET"
        @submit=${this.handleSubmit}
        novalidate
        id=${this.elementId}
      >
        <slot></slot>
      </form>
    `;
  }
}

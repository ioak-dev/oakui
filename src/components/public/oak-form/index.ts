import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../../global-styles';
import '../../private/oak-internal-label';
import {formControlRegisterSubject} from '../../../events/FormControlRegisterEvent';
import { formControlSubmitSubject } from '../../../events/FormControlSubmitEvent';
import {FORM_SUBMIT_EVENT} from '../../../types/FormEventTypes';
import { formControlValidateSubject } from '../../../events/FormControlValidateEvent';
import { formControlValidatedSubject } from '../../../events/FormControlValidatedEvent';
import { ValidationResultType } from '../../../validation/types/ValidationResultType';

let elementIdCounter = 0;

/**
 * Text box form element.
 *
 */
@customElement('oak-form')
export class OakForm extends LitElement {
  private elementId = `oak-form-${elementIdCounter++}`;

  @property({type: String})
  formGroupName: string = "";

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
    formControlRegisterSubject.asObservable().subscribe(message => {
      if (message.formGroupName === this.formGroupName) {
        this.formControlNameList.push(message.formControlName);
      }
    });

    formControlSubmitSubject.asObservable().subscribe(message => {
      if (message.formGroupName === this.formGroupName) {
        formControlValidateSubject.next({
          formGroupName: message.formGroupName
        })
      }
    });

    formControlValidatedSubject.asObservable().subscribe(message => {
      if (message.formGroupName === this.formGroupName) {
        this.validationResults.push(message);
        if (this.validationResults.length === this.formControlNameList.length) {
          this.handleSubmit({
            isValid: !this.validationResults.find(item => !item.isValid),
            validationResults: this.validationResults
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
  }

  private propagateEvent = (eventName: string, formControlEvent: any) => {
    console.log("****" + eventName, formControlEvent);
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
      <form method="GET" onSubmit=${this.handleSubmit} noValidate id=${this.elementId}>
        <slot :testdata="rest"></slot>
      </form>
    `;
  }
}

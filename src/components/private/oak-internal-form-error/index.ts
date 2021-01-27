import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../../global-styles';
import {ValidationErrorType} from '../../../validation/types/ValidationResultType';

import {getError} from '../../../validation/ErrorMessages';
import {oakInternalFormErrorStyles} from './index-styles';

/**
 * Form element error.
 *
 */
@customElement('oak-internal-form-error')
export class OakInternalFormError extends LitElement {
  @property({type: Array})
  errors: ValidationErrorType[] = [];

  constructor() {
    super();
  }

  static get styles() {
    return [...globalStyles, oakInternalFormErrorStyles];
  }

  render() {
    return html`
      <div class="formelement-error oak-rounded">
        ${this.errors.map(
          (error) =>
            html`
              <div>
                ${getError(error)}
              </div>
            `
        )}
      </div>
    `;
  }
}

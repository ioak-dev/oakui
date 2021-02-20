import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../styles/global-styles';
import {ValidationErrorType} from '../../../types/ValidationResultType';

import {getError} from '../../validator/ErrorMessages';
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
      ${this.errors && this.errors.length > 0
        ? html`<div class="formelement-error oak-rounded">
            ${this.errors.map(
              (error) =>
                html`
                  <div>
                    ${getError(error)}
                  </div>
                `
            )}
          </div>`
        : html``}
    `;
  }
}

import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../../global-styles';

import {oakInternalModalBodyStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Form element error.
 *
 */
@customElement('oak-internal-modal-body')
export class OakModalBody extends LitElement {
  private elementId = `oak-internal-modal-body-${elementIdCounter++}`;

  @property({type: String})
  heading: string = "";

  constructor() {
    super();
  }

  static get styles() {
    return [...globalStyles, oakInternalModalBodyStyles];
  }

  render() {
    return html`
      <div class="oak-internal-modal-body" id=${this.elementId}>
        <slot></slot>
      </div>
    `;
  }
}

import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../styles/global-styles';

import {oakInternalModalFooterStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Form element error.
 *
 */
@customElement('oak-internal-modal-footer')
export class OakInternalModalFooter extends LitElement {
  private elementId = `oak-internal-modal-footer-${elementIdCounter++}`;

  @property({type: String})
  heading: string = '';

  constructor() {
    super();
  }

  static get styles() {
    return [...globalStyles, oakInternalModalFooterStyles];
  }

  render() {
    return html`
      <div class="oak-internal-modal-footer" id=${this.elementId}>
        <slot></slot>
      </div>
    `;
  }
}

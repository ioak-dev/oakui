import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../styles/global-styles';
import ModalEvent from '../../../event/OakModalEvent';

import {oakInternalModalHeaderStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Form element error.
 *
 */
@customElement('oak-internal-modal-header')
export class OakModalHeader extends LitElement {
  private elementId = `oak-internal-modal-header-${elementIdCounter++}`;

  @property({type: String})
  heading = '';

  constructor() {
    super();
  }

  private closeModal = () => {
    this.propagateEvent(ModalEvent.CLOSE_MODAL, {value: true});
  };

  private propagateEvent = (eventType: ModalEvent, event: any) => {
    this.dispatchEvent(
      new CustomEvent(eventType, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: eventType,
          value: event.value,
        },
      })
    );
  };

  static get styles() {
    return [...globalStyles, oakInternalModalHeaderStyles];
  }

  render() {
    return html`
      <div class="oak-internal-modal-header" id=${this.elementId}>
        <div class="left">
          <div class="label one-liner">${this.heading}</div>
        </div>
        <div class="right">
          <div @click=${this.closeModal}>
            <span class="material-icons">close</span>
          </div>
        </div>
      </div>
    `;
  }
}

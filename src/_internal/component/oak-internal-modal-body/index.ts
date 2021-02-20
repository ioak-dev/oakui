import {LitElement, html, customElement, property} from 'lit-element';
import {containerScrolledSubject} from '../../events/ContainerScrolledEvent';
import {globalStyles} from '../../styles/global-styles';

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
  heading = '';

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated(changedProperties: any) {
    super.firstUpdated(changedProperties);
    this.init();
  }

  private init = () => {
    this.shadowRoot
      ?.getElementById(this.elementId)
      ?.addEventListener('scroll', () =>
        containerScrolledSubject.next({
          component: 'oak-internal-modal-body',
          id: this.elementId,
        })
      );
  };

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

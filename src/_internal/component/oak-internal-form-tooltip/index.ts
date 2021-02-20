import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../styles/global-styles';
import {oakInternalFormTooltipStyles} from './index-styles';

/**
 * Form element tooltip.
 *
 */
@customElement('oak-internal-form-tooltip')
export class OakInternalFormTooltip extends LitElement {
  @property({type: String})
  tooltip: string | null | undefined = null;

  constructor() {
    super();
  }

  static get styles() {
    return [...globalStyles, oakInternalFormTooltipStyles];
  }

  render() {
    return html`
      ${this.tooltip
        ? html` <div class="formelement-tooltip">${this.tooltip}</div>`
        : html``}
    `;
  }
}

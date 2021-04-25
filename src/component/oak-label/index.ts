import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../_internal/styles/global-styles';
import {oakLabelStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Label for form elements.
 *
 */
const customElementName = 'oak-label';
@customElement(customElementName)
export class OakLabel extends LitElement {
  @property({type: String})
  label?: string | null | undefined = null;

  @property({type: Boolean})
  noMargin? = false;

  @property({type: String})
  elementFor = '';

  private elementId = `${customElementName}-${elementIdCounter++}`;

  constructor() {
    super();
  }

  static get styles() {
    return [...globalStyles, oakLabelStyles];
  }

  render() {
    return html` ${this.label
      ? html`<label
          for=${this.elementFor}
          id=${this.elementId}
          class=${`${this.noMargin ? 'no-margin' : ''}`}
          >${this.label}</label
        >`
      : html``}`;
  }
}

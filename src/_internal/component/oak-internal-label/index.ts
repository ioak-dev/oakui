import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../styles/global-styles';
import {oakInternalLabelStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Label for form elements.
 *
 */
const customElementName = 'oak-internal-label';
@customElement(customElementName)
export class OakInternalLabel extends LitElement {
  @property({type: String})
  label?: string | null | undefined = null;

  @property({type: String})
  elementFor = '';

  private elementId = `${customElementName}-${elementIdCounter++}`;

  constructor() {
    super();
  }

  static get styles() {
    return [...globalStyles, oakInternalLabelStyles];
  }

  render() {
    return html` ${this.label
      ? html`<label for=${this.elementFor} id=${this.elementId}
          >${this.label}</label
        >`
      : html``}`;
  }
}

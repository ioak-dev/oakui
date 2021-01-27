import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../../global-styles';
import { oakInternalLabelStyles } from './index-styles';

/**
 * Text box form element.
 *
 */
@customElement('oak-internal-label')
export class OakInternalLabel extends LitElement {
  @property({type: String, reflect: true})
  label: string = '';

  @property({type: String})
  elementFor: string = '';

  @property({type: String})
  elementId: string = '';

  constructor() {
    super();
  }

  static get styles() {
    return [
      ...globalStyles, oakInternalLabelStyles
    ];
  }

  render() {
    return html` <label for=${this.elementFor} id=${this.elementId}
      >${this.label}</label
    >`;
  }
}

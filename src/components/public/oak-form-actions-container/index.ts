import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';

import {oakFormActionsContainerStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Form actions list container.
 *
 */
@customElement('oak-form-actions-container')
export class OakFormActionsContainer extends LitElement {
  private elementId = `oak-form-actions-container-${elementIdCounter++}`;

  @property({type: String})
  align: 'left' | 'right' | 'center' = 'right';

  constructor() {
    super();
  }

  private getClassMap(baseClass: 'base'): any {
    switch (baseClass) {
      case 'base':
        return {
          'oak-form-actions-container': true,
          [this.align]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakFormActionsContainerStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <slot></slot>
      </div>
    `;
  }
}

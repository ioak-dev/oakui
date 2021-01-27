import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';

import {oakContainerStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Form element error.
 *
 */
@customElement('oak-container')
export class OakContainer extends LitElement {
  private elementId = `oak-container-${elementIdCounter++}`;

  @property({type: Number})
  elevation?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24 = 0;

  @property({type: Boolean})
  rounded?: boolean = false;

  @property({type: String})
  variant?: 'outlined' | null = null;

  @property({type: String})
  fillType?: 'fill' | 'none' = 'fill';

  @property({type: Number})
  paddingHorizontal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 0;

  @property({type: Number})
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 0;

  constructor() {
    super();
  }

  private getClassMap(baseClass: 'base'): any {
    switch (baseClass) {
      case 'base':
        const data = {
          'oak-container': true,
          [`oak-bs-elevation${this.elevation}`]: true,
          [`oak-padding-horizontal${this.paddingHorizontal}`]: true,
          [`oak-padding-vertical${this.paddingVertical}`]: true,
          'oak-rounded': this.rounded,
          'oak-container-nofill': this.fillType === 'none',
        };
        if (this.variant) {
          data[`oak-${this.variant}`] = true;
        }
        return data;
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakContainerStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <slot></slot>
      </div>
    `;
  }
}

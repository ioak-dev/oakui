import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';

import {oakCardStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Card component.
 *
 */
const customElementName = 'oak-card';
@customElement(customElementName)
export class OakCard extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

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

  @property({type: String})
  heading?: string | null = null;

  @property({type: String})
  headerVariant?: 'subtle' | 'apparent' = 'subtle';

  constructor() {
    super();
  }

  private getClassMap(
    baseClass: 'base' | 'header' | 'header-title' | 'body' | 'app-text'
  ): any {
    switch (baseClass) {
      case 'base':
        const data = {
          [customElementName]: true,
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
      case 'header':
        return {
          [`${customElementName}--header-${
            this.headerVariant || 'subtle'
          }`]: true,
        };
      case 'header-title':
        return {
          [`${customElementName}--header-title`]: true,
        };
      case 'body':
        return {
          [`${customElementName}--body`]: true,
        };
      case 'app-text':
        return {
          [`${customElementName}--app-text`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakCardStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        ${this.heading &&
        html`<div class=${classMap(this.getClassMap('header'))}>
          <div class=${classMap(this.getClassMap('header-title'))}>
            ${this.heading}
          </div>
        </div>`}
        <div class=${classMap(this.getClassMap('body'))}>
          <div class=${classMap(this.getClassMap('app-text'))}>
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

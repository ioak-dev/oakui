import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';
import {oakToolbarStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Click area component.
 *
 */
const customElementName = 'oak-toolbar';
@customElement(customElementName)
export class OakToolbar extends LitElement {
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
    | 24;
  @property({type: String})
  borderVariant?: 'top' | 'bottom' | 'both' | 'none' = 'none';
  @property({type: String})
  fillColor?:
    | 'global'
    | 'container'
    | 'surface'
    | 'float'
    | 'default'
    | 'info'
    | 'invert'
    | 'none' = 'global';
  @property({type: Number})
  paddingHorizontal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 1;
  @property({type: Number})
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 1;

  constructor() {
    super();
  }

  private getClassMap(baseClass: 'base' | 'left' | 'right'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          [`oak-bs-elevation${this.elevation || 0}`]: true,
          [`oak-padding-horizontal${this.paddingHorizontal}`]: true,
          [`oak-padding-vertical${this.paddingVertical}`]: true,
          [`${customElementName}--bordervariant-${this.borderVariant}`]: true,
          [`oak-color-bg-${this.fillColor}`]: true,
          [`oak-color-${this.fillColor}-i`]: true,
        };
      case 'left':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'right':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakToolbarStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <div class=${classMap(this.getClassMap('left'))}>
          <slot name="left"></slot>
        </div>
        <div class=${classMap(this.getClassMap('right'))}>
          <slot name="right"></slot>
        </div>
      </div>
    `;
  }
}

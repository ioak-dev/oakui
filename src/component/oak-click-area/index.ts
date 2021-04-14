import {LitElement, html, customElement} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {CLICK_AREA_CLICK_EVENT} from '../../event/OakClickAreaEvent';
import {globalStyles} from '../../_internal/styles/global-styles';
import {oakClickAreaStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Click area component.
 *
 */
const customElementName = 'oak-click-area';
@customElement(customElementName)
export class OakClickArea extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  constructor() {
    super();
  }

  private _handleClick = () => {
    this._propagateEvent(CLICK_AREA_CLICK_EVENT);
  };

  private _propagateEvent = (eventName: string) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
        },
      })
    );
  };

  private getClassMap(baseClass: 'base' | 'container'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
        };
      case 'container':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakClickAreaStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <div class=${classMap(this.getClassMap('container'))}>
          <button @click=${this._handleClick}>
            <slot></slot>
          </button>
        </div>
      </div>
    `;
  }
}

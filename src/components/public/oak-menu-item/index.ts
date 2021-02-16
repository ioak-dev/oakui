import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import '../../private/oak-internal-popup';
import {oakMenuItemStyles} from './index-styles';
import {MENU_CLICK_EVENT} from '../../../types/MenuEventTypes';

let elementIdCounter = 0;
const customElementName = 'oak-menu-item';

/**
 * Select drop down (native) form element.
 *
 */
@customElement(customElementName)
export class OakMenuItem extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  fill?: 'container' | 'surface' | 'float' | 'none' = 'surface';

  @property({type: String})
  name = '';

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  private handleClick = () => {
    this.propagateCustomEvent(MENU_CLICK_EVENT);
  };

  private getClassMap = (baseClass: 'base'): any => {
    switch (baseClass) {
      case 'base':
        return {
          [`${customElementName}`]: true,
          [`oak-fill-${this.fill}`]: true,
          [`oak-fill-${this.fill}--hover-hc`]: true,
        };
      default:
        return {};
    }
  };
  static get styles() {
    return [...globalStyles, oakMenuItemStyles];
  }

  private propagateCustomEvent = (eventName: string) => {
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

  render() {
    return html`
      <button
        class=${classMap(this.getClassMap('base'))}
        @click=${this.handleClick}
        id=${this.elementId}
        type="button"
      >
        <slot></slot>
      </button>
    `;
  }
}

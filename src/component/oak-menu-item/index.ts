import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';
import '../../_internal/component/oak-internal-popup';
import '../oak-click-area';
import {oakMenuItemStyles} from './index-styles';
import {MENU_CLICK_EVENT} from '../../event/OakMenuEvent';

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

  private getClassMap = (baseClass: 'base' | 'container'): any => {
    switch (baseClass) {
      case 'base':
        return {
          [`${customElementName}`]: true,
        };
      case 'container':
        return {
          [`${customElementName}__container`]: true,
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
      <oak-click-area
        @click-area-click=${this.handleClick}
        id=${this.elementId}
      >
        <div class=${classMap(this.getClassMap('container'))}>
          <slot></slot>
        </div>
      </oak-click-area>
    `;
  }
}

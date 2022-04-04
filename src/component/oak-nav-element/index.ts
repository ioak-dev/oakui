import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';
import {oakNavElementStyles} from './index-styles';
import '../oak-click-area';
import '../oak-expanse';
import {BUTTON_CLICK_EVENT} from '../../event/OakButtonEvent';

let elementIdCounter = 0;

/**
 * Nav element component.
 *
 */
const customElementName = 'oak-nav-element';
@customElement(customElementName)
export class OakNavElement extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Boolean})
  active = false;

  @property({type: Number})
  level: 1 | 2 | 3 = 1;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  private _handleClick = () => {
    this._propagateEvent(BUTTON_CLICK_EVENT);
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

  private getClassMap(baseClass: 'base' | 'container' | 'content'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
        };
      case 'container':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--active`]: this.active,
          [`${customElementName}__${baseClass}--level-${this.level}`]: true,
        };
      case 'content':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--level-${this.level}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakNavElementStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <oak-click-area @click-area-click=${this._handleClick}
          ><div class=${classMap(this.getClassMap('container'))}>
            <div class=${classMap(this.getClassMap('content'))}>
              <div>
                <slot></slot>
              </div>
            </div></div
        ></oak-click-area>
      </div>
    `;
  }
}

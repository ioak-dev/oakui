import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {createPopper} from '@popperjs/core';
import {globalStyles} from '../../_internal/styles/global-styles';
import '../../_internal/component/oak-internal-popup';
import '../oak-click-area';
import '../oak-button';
import {oakPopupStyles} from './index-styles';

let elementIdCounter = 0;
const customElementName = 'oak-popup';

/**
 * Popup element.
 *
 */
@customElement(customElementName)
export class OakPopup extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;
  private inputElementId = `${this.elementId}-input`;
  private popupElementId = `${this.elementId}-popup`;

  @property({type: Boolean})
  private _isActivated = false;

  @property({type: Array})
  options: any[] = [];

  @property({type: String})
  size?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  shape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' = 'rectangle';

  @property({type: String})
  fill?: 'container' | 'surface' | 'float' | 'none' = 'surface';

  /**
   * 	If true, the text will have a bottom margin.
   */
  @property({type: Boolean})
  gutterBottom?: boolean = false;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  firstUpdated(_changedProperties: any) {
    super.firstUpdated(_changedProperties);
    setTimeout(() => this._mountPopper());
  }

  private _mountPopper() {
    const trigger = this.shadowRoot?.getElementById(`${this.inputElementId}`);
    const popup = this.shadowRoot?.getElementById(`${this.popupElementId}`);
    console.log('*****************', trigger, popup);
    if (trigger && popup) {
      createPopper(trigger, popup, {placement: 'top'});
    }
  }

  private handleClick = () => {
    // this._isActivated ? this._deactivate() : this._activate();
    this._isActivated = !this._isActivated;
  };

  private getClassMap = (
    baseClass: 'base' | 'popup' | 'trigger' | 'trigger-wrapper'
  ): any => {
    switch (baseClass) {
      case 'base':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'popup':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'trigger':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'trigger-wrapper':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      default:
        return {};
    }
  };
  static get styles() {
    return [...globalStyles, oakPopupStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        abcd one
        <div class=${classMap(this.getClassMap('trigger-wrapper'))}>
          <oak-click-area
            @click-area-click=${this.handleClick}
            id=${this.inputElementId}
          >
            <div class=${classMap(this.getClassMap('trigger'))}>
              <slot name="trigger"></slot>
            </div>
          </oak-click-area>
        </div>
        abcd two
        <div
          class=${classMap(this.getClassMap('popup'))}
          id=${this.popupElementId}
        >
          ${this._isActivated ? html` <slot name="popup"></slot>` : html``}
        </div>
        abcd three
      </div>
    `;
  }
}

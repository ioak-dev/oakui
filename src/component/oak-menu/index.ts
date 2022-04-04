import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';
import '../../_internal/component/oak-internal-popup';
import '../oak-click-area';
import '../oak-button';
import {oakMenuStyles} from './index-styles';

let elementIdCounter = 0;
const customElementName = 'oak-menu';

/**
 * Select drop down (native) form element.
 *
 */
@customElement(customElementName)
export class OakMenu extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  type?: 'button' | 'custom' = 'button';

  @property({type: String})
  buttonVariant?:
    | 'block'
    | 'outline'
    | 'appear'
    | 'disappear'
    | 'regular'
    | 'disabled'
    | 'drama' = 'regular';

  @property({type: String})
  buttonTheme?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info' = 'primary';

  @property({type: String})
  buttonSize?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  buttonShape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' | 'icon' =
    'rectangle';

  @property({type: Boolean})
  buttonSemitransparent = false;

  @property({type: Boolean})
  buttonFullWidth = false;

  @property({type: Number})
  buttonElevation?:
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

  @property({type: String})
  positioningStrategy?: 'absolute' | 'fixed' = 'absolute';

  @property({type: Boolean})
  private _isActivated = false;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  private _activate = () => {
    this._isActivated = true;
  };

  private _deactivate = () => {
    this._isActivated = false;
  };

  private handleClick = () => {
    this._isActivated ? this._deactivate() : this._activate();
  };

  private getClassMap = (baseClass: 'base' | 'popup' | 'ul'): any => {
    switch (baseClass) {
      case 'base':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'popup':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'ul':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      default:
        return {};
    }
  };
  static get styles() {
    return [...globalStyles, oakMenuStyles];
  }

  render() {
    return html`
      <oak-internal-popup
        @popup-activate=${this._activate}
        @popup-deactivate=${this._deactivate}
        ?isActivated=${this._isActivated}
        .positioningStrategy=${this.positioningStrategy}
        type="custom"
      >
        <div slot="action">
          ${this.type === 'custom'
            ? html` <div>
                <oak-click-area @click-area-click=${this.handleClick}
                  ><slot name="menu-label"></slot
                ></oak-click-area>
              </div>`
            : html`
                <oak-button
                  type="button"
                  .variant=${this.buttonVariant}
                  .theme=${this.buttonTheme}
                  .size=${this.buttonSize}
                  .shape=${this.buttonShape}
                  ?semitransparent=${this.buttonSemitransparent}
                  ?fullWidth=${this.buttonFullWidth}
                  .elevation=${this.buttonElevation}
                  @button-click=${this.handleClick}
                >
                  <slot name="menu-label"></slot>
                </oak-button>
              `}
        </div>
        <div
          slot="popup"
          class=${classMap(this.getClassMap('popup'))}
          id=${this.elementId}
        >
          <slot name="menu-popup"></slot>
        </div>
      </oak-internal-popup>
    `;
  }
}

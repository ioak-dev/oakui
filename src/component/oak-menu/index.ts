import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';
import '../../_internal/component/oak-internal-popup';
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
  private inputElementId = `${this.elementId}-input`;
  private liElementId = `${this.elementId}-popup-li`;
  private ulElementId = `${this.elementId}-popup-ul`;

  @property({type: Boolean})
  private _isActivated = false;

  @property({type: Number})
  private _currentIndex = 0;

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

  private keydownEventHandler = (event: any) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.navigateDown();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.navigateUp();
        break;
      // case 'Enter':
      //   event.preventDefault();
      //   this.handleChange();
      //   break;
      // case 'Tab':
      //   event.preventDefault();
      //   this._deactivate();
      //   break;
      default:
        break;
    }
  };

  private navigateDown() {
    if (this._currentIndex < this.options.length - 1) {
      const elRef = this.shadowRoot?.getElementById(
        `${this.liElementId}-${this._currentIndex + 1}`
      );
      if (elRef && !this.isScrolledIntoView(elRef, true)) {
        elRef.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
      this._currentIndex = this._currentIndex + 1;
    } else {
      this._currentIndex = 0;
    }
  }

  private navigateUp = () => {
    if (this._currentIndex > 0) {
      const elRef = this.shadowRoot?.getElementById(
        `${this.liElementId}-${this._currentIndex - 1}`
      );
      if (elRef && !this.isScrolledIntoView(elRef)) {
        elRef.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
      this._currentIndex = this._currentIndex - 1;
    } else {
      this._currentIndex = 0;
    }
  };

  private isScrolledIntoView = (el: any, invertDirection = false) => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const containerEl = this.shadowRoot?.getElementById(this.ulElementId);
    if (!containerEl) {
      return true;
    }

    // Only completely visible elements return true:
    let isVisible = true;
    if (invertDirection) {
      isVisible =
        elemTop >= 0 &&
        elemBottom <=
          containerEl.getBoundingClientRect().height +
            containerEl.getBoundingClientRect().top;
    } else {
      isVisible =
        elemTop >= 0 &&
        elemTop >=
          containerEl.getBoundingClientRect().height +
            containerEl.getBoundingClientRect().top;
    }

    // Partially visible elements return true:
    //isVisible = elemTop < containerEl.getBoundingClientRect().height && elemBottom >= 0;
    return isVisible;
  };

  private _activate = () => {
    console.log('** _activate');
    this._isActivated = true;
    this._currentIndex = 0;
    const docRef = this.shadowRoot?.getElementById(this.elementId);
    if (docRef) {
      docRef.addEventListener('keydown', this.keydownEventHandler);
    }

    setTimeout(() => {
      const inputElRef = this.shadowRoot?.getElementById(this.inputElementId);
      if (inputElRef) {
        inputElRef.focus();
      }
    }, 201);
  };

  private _deactivate = () => {
    this._isActivated = false;
    const docRef = this.shadowRoot?.getElementById(this.elementId);
    if (docRef) {
      docRef.removeEventListener('keydown', this.keydownEventHandler);
    }
  };

  private handleKeydown = (event: any) => {
    if (this._isActivated) {
      this.keydownEventHandler(event.detail.value);
    }
  };

  private handleClick = () => {
    this._isActivated ? this._deactivate() : this._activate();
  };

  private handleMenuClick = () => {
    console.log('**handle menu click');
    this._deactivate();
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
        @popup-key-pressed=${this.handleKeydown}
        ?isActivated=${this._isActivated}
        .size=${this.size}
        .shape=${this.shape}
        .fill=${this.fill}
        type="custom"
      >
        <div slot="action">
          <slot
            name="menu-trigger"
            @button-click=${this.handleClick}
            @link-click=${this.handleClick}
            @click=${this.handleClick}
          ></slot>
        </div>
        <div
          slot="popup"
          class=${classMap(this.getClassMap('popup'))}
          id=${this.elementId}
        >
          <slot name="menu-popup" @menu-click=${this.handleMenuClick}></slot>
        </div>
      </oak-internal-popup>
    `;
  }
}

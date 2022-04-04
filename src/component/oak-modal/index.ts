import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';
import ModalEvent from '../../event/OakModalEvent';
import {oakModalStyles} from './index-styles';
import '../../_internal/component/oak-internal-modal-header';
import '../../_internal/component/oak-internal-modal-body';
import '../../_internal/component/oak-internal-modal-footer';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {oakModalAnimationSlideStyles} from './animation-slide-styles';
import {oakModalAnimationZoomStyles} from './animation-zoom-styles';
import {oakModalAnimationOpacityStyles} from './animation-opacity-styles';

let elementIdCounter = 0;

/**
 * Text box form element.
 *
 */
const customElementName = 'oak-modal';
@customElement(customElementName)
export class OakModal extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Boolean})
  isOpen = false;

  @property({type: Boolean})
  rounded = false;

  @property({type: String})
  height?: 'auto' | 'small' | 'medium' | 'large' | 'full' = 'auto';

  @property({type: String})
  width?: 'auto' | 'small' | 'medium' | 'large' | 'full' = 'auto';

  @property({type: String})
  animationSpeed?: 'slow' | 'normal' | 'fast' | 'none' = 'normal';

  @property({type: String})
  animationStyle?: 'opacity' | 'zoom' | 'slide' = 'opacity';

  @property({type: String})
  heading?: string | null;

  @property({type: String})
  color?:
    | 'global'
    | 'container'
    | 'surface'
    | 'float'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'invert' = 'surface';

  @property({type: Number})
  backdropIntensity?: 0 | 1 | 2 | 3 | 4 | 5 = 2;

  @property({type: Number})
  paddingHorizontal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 4;

  @property({type: Number})
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 4;

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
    | 24 = 10;

  @property({type: Boolean})
  private _isOpen = false;

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  private init() {
    fromEvent(window, 'keydown')
      .pipe(map((event) => event))
      .subscribe((event: any) => {
        if (['Escape'].includes(event.key)) {
          this._handleClose();
        }
      });
  }

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    _changedProperties.forEach((_, propName) => {
      if (propName === 'isOpen') {
        if (this.isOpen) {
          this._isOpen = true;
        } else {
          let timeout = 0;
          if (this.animationSpeed === 'slow') {
            timeout = 650;
          }
          if (this.animationSpeed === 'normal') {
            timeout = 350;
          }
          if (this.animationSpeed === 'fast') {
            timeout = 200;
          }
          setTimeout(() => {
            this._isOpen = false;
          }, timeout);
        }
      }
    });
    return true;
  }

  private _handleClose = () => {
    this.propagateEvent(ModalEvent.CLOSE_MODAL, {value: true});
  };

  private propagateEvent = (eventType: ModalEvent, event: any) => {
    this.dispatchEvent(
      new CustomEvent(eventType, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: eventType,
          value: event.value,
        },
      })
    );
  };

  private getClassMap(
    baseClass:
      | 'base'
      | 'container'
      | 'backdrop'
      | 'content'
      | 'content-container'
      | 'heading'
      | 'body'
      | 'footer'
  ): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          [`${customElementName}--speed-${this.animationSpeed}`]: true,
          [`${customElementName}--animation-${this.animationStyle}`]: true,
          show: this.isOpen,
          hide: !this.isOpen,
        };
      case 'container':
        return {
          [`${customElementName}__${baseClass}`]: true,
          // hidetext: !this.isOpen,
        };
      case 'backdrop':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`oak-backdrop-${this.backdropIntensity}`]:
            this.width !== 'full' || this.height !== 'full',
        };
      case 'content':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'content-container':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--height-${this.height}`]: true,
          [`${customElementName}__${baseClass}--width-${this.width}`]: true,
          [`${customElementName}__${baseClass}--rounded`]: this.rounded,
          [`oak-color-bg-${this.color}`]: true,
          [`oak-color-${this.color}-i`]: true,
          [`oak-bs-elevation${this.elevation}`]: true,
        };
      case 'heading':
      case 'footer':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`oak-padding-horizontal${this.paddingHorizontal}`]: true,
        };
      case 'body':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`oak-padding-horizontal${this.paddingHorizontal}`]: true,
          [`oak-padding-vertical${this.paddingVertical}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [
      ...globalStyles,
      oakModalStyles,
      oakModalAnimationOpacityStyles,
      oakModalAnimationSlideStyles,
      oakModalAnimationZoomStyles,
    ];
  }

  render() {
    return html`${this._isOpen
      ? html`
          <div id=${this.elementId} class=${classMap(this.getClassMap('base'))}>
            <div class=${classMap(this.getClassMap('container'))}>
              <div
                class=${classMap(this.getClassMap('backdrop'))}
                @click=${this._handleClose}
              ></div>
              <div class=${classMap(this.getClassMap('content'))}>
                <div class=${classMap(this.getClassMap('content-container'))}>
                  <div class=${classMap(this.getClassMap('heading'))}>
                    <oak-internal-modal-header
                      heading=${this.heading || ''}
                    ></oak-internal-modal-header>
                  </div>
                  <div class=${classMap(this.getClassMap('body'))}>
                    <slot name="body"></slot>
                    <!-- <oak-internal-modal-body
                      ><slot name="body"></slot
                    ></oak-internal-modal-body> -->
                  </div>
                  <div class=${classMap(this.getClassMap('footer'))}>
                    <slot name="footer"></slot>
                    <!-- <oak-internal-modal-body
                      ><slot name="body"></slot
                    ></oak-internal-modal-body> -->
                  </div>
                  <!-- <oak-internal-modal-footer
                    ><slot name="footer"></slot
                  ></oak-internal-modal-footer> -->
                </div>
              </div>
            </div>
          </div>
        `
      : html``}`;
  }
}

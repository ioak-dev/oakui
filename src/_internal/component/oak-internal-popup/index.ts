import {LitElement, html, customElement, property} from 'lit-element';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../styles/global-styles';
import {ValidationErrorType} from '../../../types/ValidationResultType';
import '../oak-internal-label';
import '../oak-internal-form-tooltip';
import '../oak-internal-form-error';
import '../oak-internal-popup-input-action';
import '../oak-internal-popup-text-input-action';
import '../../../component/oak-input';
import '../../../component/oak-button';
import {oakInternalPopupStyles} from './index-styles';
import {
  POPUP_DEACTIVATE,
  POPUP_KEY_PRESSED,
} from '../../../event/OakPopupEvent';
import {createPopper} from '@popperjs/core';
import {containerScrolledSubject} from '../../events/ContainerScrolledEvent';

let elementIdCounter = 0;
const customElementName = 'oak-internal-popup';

/**
 * Select drop down (native) form element.
 *
 */
@customElement(customElementName)
export class OakSelect extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;
  private actionElementId = `${this.elementId}-action`;
  private popupElementId = `${this.elementId}-popup`;

  @property({type: Boolean})
  isActivated = false;

  @property({type: Array})
  parentElementIds?: string[] = [];

  @property({type: String})
  label?: string | null;

  @property()
  value?: string | number | null;

  @property({type: String})
  placeholder?: string = '';

  @property({type: Boolean})
  multiple?: boolean = false;

  @property({type: String})
  tooltip?: string = '';

  @property({type: String})
  name: string = this.elementId;

  @property({type: Boolean})
  disabled = false;

  @property({type: Array})
  options: any[] = [];

  @property({type: Array})
  optionsAsKeyValue?: {id: string | number; value: string | number}[] | null;

  @property({type: Array})
  errors: ValidationErrorType[] = [];

  @property({type: Array})
  scrollableContainers: string[] = [];

  @property({type: String})
  size?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  shape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' = 'rectangle';

  @property({type: String})
  fill?: 'container' | 'surface' | 'float' | 'none' = 'surface';

  @property({type: String})
  type?: 'input' | 'custom' = 'input';

  @property({type: String})
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end' = 'bottom-start';

  @property({type: Array})
  fallbackPlacements?: string[] = ['top-start'];

  @property({type: String})
  positioningStrategy?: 'absolute' | 'fixed' = 'absolute';

  private _popperInstance: any = null;

  /**
   * Validators
   *
   */

  /**
   * @private
   */
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this._registerEvents();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unregisterEvents();
  }

  firstUpdated(_changedProperties: any) {
    super.firstUpdated(_changedProperties);
    setTimeout(() => this._mountPopper());
  }

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    _changedProperties.forEach((_, propName) => {
      if (
        propName === 'isActivated' &&
        this.isActivated &&
        this._popperInstance
      ) {
        this._popperInstance.forceUpdate();
      }
    });
    return true;
  }

  private _mountPopper() {
    const trigger = this.shadowRoot?.getElementById(`${this.actionElementId}`);
    const popup = this.shadowRoot?.getElementById(`${this.popupElementId}`);
    if (trigger && popup) {
      this._popperInstance = createPopper(trigger, popup, {
        placement: this.placement,
        strategy: this.positioningStrategy,
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: this.fallbackPlacements,
            },
          },
          // {
          //   name: 'preventOverflow',
          //   options: {
          //     padding: 0,
          //   },
          // },
        ],
      });
    }
  }

  private _registerEvents() {
    containerScrolledSubject.asObservable().subscribe(() => {
      if (this._popperInstance) {
        this._popperInstance.forceUpdate();
      }
    });
    fromEvent(document, 'click')
      .pipe(map((event) => event))
      .subscribe((event) => this.clickEventHandler(event));
    fromEvent(window, 'keydown')
      .pipe(map((event) => event))
      .subscribe((event: any) => {
        if (['Escape'].includes(event.key)) {
          this._deactivate();
        }
      });
  }

  private _unregisterEvents() {
    // window.removeEventListener('resize', this.adjustPositioning);
    // window.removeEventListener('scroll', this.adjustPositioning);
  }

  private clickEventHandler = (event: any) => {
    if (this.isActivated) {
      const idList: string[] = [];
      Object.values(event.composedPath()).forEach((item: any) => {
        try {
          if (
            item &&
            !(item instanceof ShadowRoot) &&
            !(item instanceof Window) &&
            !(item instanceof Document) &&
            item.hasAttribute('id')
          ) {
            idList.push(item.getAttribute('id'));
          }
        } catch (e) {
          console.log('** exception inclickEventHandler');
        }
      });

      if (
        ![this.actionElementId, this.popupElementId].some(
          (item) => idList.indexOf(item) !== -1
        )
      ) {
        this._deactivate();
      }
    }
  };

  private keydownEventHandler = (event: any) => {
    this.propagateCustomEvent(POPUP_KEY_PRESSED, event);
  };

  private _deactivate = () => {
    this.propagateCustomEvent(POPUP_DEACTIVATE);
    const docRef = this.shadowRoot?.getElementById(this.elementId);
    if (docRef) {
      docRef.removeEventListener('keydown', this.keydownEventHandler);
    }
  };

  private getClassMap = (
    baseClass: 'base' | 'action' | 'value' | 'placeholder' | 'popup'
  ): any => {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
        };
      case 'action':
        return {
          [`${customElementName}--${baseClass}`]: true,
        };
      case 'value':
        return {
          [`${customElementName}--${baseClass}`]: true,
        };
      case 'placeholder':
        return {
          [`${customElementName}--${baseClass}`]: true,
        };
      case 'popup':
        return {
          [`${customElementName}--${baseClass}`]: true,
          [`oak-fill-${this.fill}`]: true,
          activated: this.isActivated,
        };
      default:
        return {};
    }
  };

  static get styles() {
    return [...globalStyles, oakInternalPopupStyles];
  }

  private propagateCustomEvent = (eventName: string, value?: any) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: this.name,
          value: value || null,
        },
      })
    );
  };

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <div
          class=${classMap(this.getClassMap('action'))}
          id=${this.actionElementId}
        >
          <slot name="action"></slot>
        </div>
        <div
          class=${classMap(this.getClassMap('popup'))}
          id=${this.popupElementId}
        >
          <slot name="popup"></slot>
        </div>
      </div>
    `;
  }
}

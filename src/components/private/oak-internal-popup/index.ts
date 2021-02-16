import {LitElement, html, customElement, property} from 'lit-element';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {ValidationErrorType} from '../../../validation/types/ValidationResultType';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../private/oak-internal-popup-input-action';
import '../../public/oak-button';
import '../../public/oak-input';
import {oakInternalPopupStyles} from './index-styles';
import {containerScrolledSubject} from '../../../events/ContainerScrolledEvent';
import {
  POPUP_ACTIVATE,
  POPUP_DEACTIVATE,
  POPUP_KEY_PRESSED,
} from '../../../types/PopupEventTypes';

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
  optionsAsKeyValue?: {key: string | number; value: string | number}[] | null;

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

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    _changedProperties.forEach((_, propName) => {
      if (propName === 'isActivated' && this.isActivated) {
        this._handlePostActivate();
      }
    });
    return true;
  }

  private _registerEvents() {
    containerScrolledSubject
      .asObservable()
      .subscribe(() => this.adjustPositioning());

    fromEvent(document, 'click')
      .pipe(map((event) => event))
      .subscribe((event) => this.clickEventHandler(event));
    fromEvent(window, 'resize')
      .pipe(map((event) => event))
      .subscribe(() => this.adjustPositioning());
    fromEvent(window, 'scroll')
      .pipe(map((event) => event))
      .subscribe(() => this.adjustPositioning());
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

      // if (
      //   !event.target.getAttribute('id') ||
      //   event.target.getAttribute('id') !== this.elementFor
      // ) {
      //   this._deactivate();
      // }
    }
  };

  private keydownEventHandler = (event: any) => {
    this.propagateCustomEvent(POPUP_KEY_PRESSED, event);
  };

  private _activate = () => {
    if (!this.isActivated) {
      this.propagateCustomEvent(POPUP_ACTIVATE);
      this._handlePostActivate();
    }
  };

  private _handlePostActivate = () => {
    setTimeout(() => this.adjustPositioning());
    const docRef = this.shadowRoot?.getElementById(this.actionElementId);
    if (docRef) {
      docRef.addEventListener('keydown', this.keydownEventHandler);
    }

    if (this.scrollableContainers.length > 0) {
      console.log('*******', this.scrollableContainers);
    }
  };

  private _deactivate = () => {
    this.propagateCustomEvent(POPUP_DEACTIVATE);
    const docRef = this.shadowRoot?.getElementById(this.elementId);
    if (docRef) {
      docRef.removeEventListener('keydown', this.keydownEventHandler);
    }
  };

  private adjustPositioning = () => {
    if (this.isActivated) {
      const popupElRef = this.shadowRoot?.getElementById(this.popupElementId);
      const actionElRef = this.shadowRoot?.getElementById(this.actionElementId);
      if (actionElRef && popupElRef) {
        if (actionElRef.getBoundingClientRect().top > window.innerHeight / 2) {
          popupElRef.style.bottom = `${
            window.innerHeight - actionElRef.getBoundingClientRect().top + 4
          }px`;
          popupElRef.style.top = 'auto';
        } else {
          popupElRef.style.top = `${
            actionElRef.getBoundingClientRect().bottom + 4
          }px`;
          popupElRef.style.bottom = 'auto';
        }
        console.log(
          actionElRef.getBoundingClientRect().left,
          actionElRef.getBoundingClientRect().right,
          document.documentElement.clientWidth,
          actionElRef.getBoundingClientRect()
        );
        if (actionElRef.getBoundingClientRect().left > window.innerWidth / 2) {
          popupElRef.style.right = `${
            document.documentElement.clientWidth -
            actionElRef.getBoundingClientRect().right
          }px`;
          popupElRef.style.left = 'auto';
        } else {
          popupElRef.style.left = `${
            actionElRef.getBoundingClientRect().left
          }px`;
          popupElRef.style.right = 'auto';
        }
        // popupElRef.style.width = `${
        //   actionElRef.getBoundingClientRect().width
        // }px`;
      }
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

  // private handleSearchCriteriaChange = (event: any) => {
  //   this._searchCriteria = event.detail.value;
  // };

  private handleInputFocused = () => {
    if (this.isActivated) {
      this._deactivate();
    } else {
      this._activate();
    }
  };

  private _renderAction = () => {
    switch (this.type) {
      case 'input':
        return html` <oak-internal-popup-input-action
          @toggle=${this.handleInputFocused}
          .value=${this.value}
          .size=${this.size}
          .shape=${this.shape}
          .fill=${this.fill}
        ></oak-internal-popup-input-action>`;
      case 'custom':
        return html`<slot name="action"></slot>`;
      default:
        return html``;
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
          ${this._renderAction()}
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

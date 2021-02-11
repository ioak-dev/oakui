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
  private popupContainerElementId = `${this.elementId}-popup-container`;

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
          this.deactivate();
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
        ![this.actionElementId, this.popupContainerElementId].some(
          (item) => idList.indexOf(item) !== -1
        )
      ) {
        this.deactivate();
      }

      // if (
      //   !event.target.getAttribute('id') ||
      //   event.target.getAttribute('id') !== this.elementFor
      // ) {
      //   this.deactivate();
      // }
    }
  };

  private keydownEventHandler = (event: any) => {
    this.propagateCustomEvent('key-pressed', event);
  };

  private activate = () => {
    if (!this.isActivated) {
      this.propagateCustomEvent('activated');
      setTimeout(() => this.adjustPositioning());
      const docRef = this.shadowRoot?.getElementById(this.actionElementId);
      if (docRef) {
        docRef.addEventListener('keydown', this.keydownEventHandler);
      }

      if (this.scrollableContainers.length > 0) {
        console.log('*******', this.scrollableContainers);
      }
    }
  };

  private deactivate = () => {
    this.propagateCustomEvent('deactivated');
    const docRef = this.shadowRoot?.getElementById(this.elementId);
    if (docRef) {
      docRef.removeEventListener('keydown', this.keydownEventHandler);
    }
  };

  private adjustPositioning = () => {
    if (this.isActivated) {
      const popupContainerElRef = this.shadowRoot?.getElementById(
        this.popupContainerElementId
      );
      const actionElRef = this.shadowRoot?.getElementById(this.actionElementId);
      if (actionElRef && popupContainerElRef) {
        popupContainerElRef.style.left = `${
          actionElRef.getBoundingClientRect().left
        }px`;
        if (actionElRef.getBoundingClientRect().top > window.innerHeight / 2) {
          popupContainerElRef.style.bottom = `${
            window.innerHeight - actionElRef.getBoundingClientRect().top + 8
          }px`;
          popupContainerElRef.style.top = 'auto';
        } else {
          popupContainerElRef.style.top = `${
            actionElRef.getBoundingClientRect().bottom + 8
          }px`;
          popupContainerElRef.style.bottom = 'auto';
        }
        popupContainerElRef.style.width = `${
          actionElRef.getBoundingClientRect().width
        }px`;
      }
    }
  };

  private getClassMap = (
    baseClass:
      | 'base'
      | 'action'
      | 'value'
      | 'placeholder'
      | 'popup-container'
      | 'popup'
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
        };
      case 'popup-container':
        return {
          [`${customElementName}--${baseClass}`]: true,
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
      this.deactivate();
    } else {
      this.activate();
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
          <oak-internal-popup-input-action
            @toggle=${this.handleInputFocused}
            .value=${this.value}
            .size=${this.size}
            .shape=${this.shape}
          ></oak-internal-popup-input-action>
        </div>
        <div class=${classMap(this.getClassMap('popup'))}>
          <div
            class=${classMap(this.getClassMap('popup-container'))}
            id=${this.popupContainerElementId}
          >
            <slot name="popup"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

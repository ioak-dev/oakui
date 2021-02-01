import {LitElement, html, customElement, property} from 'lit-element';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {ValidationErrorType} from '../../../validation/types/ValidationResultType';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
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
  private valueContainerElementId = `${this.elementId}-value-container`;
  private popupContainerElementId = `${this.elementId}-popup-container`;

  @property({type: Boolean})
  isActivated = false;

  @property({type: String})
  elementFor = '';

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
    if (
      !event.target.getAttribute('id') ||
      event.target.getAttribute('id') !== this.elementFor
    ) {
      this.deactivate();
    }
  };

  private keydownEventHandler = (event: any) => {
    this.propagateCustomEvent('key-pressed', event);
  };

  private activate = () => {
    if (!this.isActivated) {
      this.propagateCustomEvent('activated');
      setTimeout(() => this.adjustPositioning());
      const docRef = this.shadowRoot?.getElementById(
        this.valueContainerElementId
      );
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
    console.log('****adjust positioning');
    const popupContainerElRef = this.shadowRoot?.getElementById(
      this.popupContainerElementId
    );
    const valueContainerElRef = this.shadowRoot?.getElementById(
      this.valueContainerElementId
    );
    if (valueContainerElRef && popupContainerElRef) {
      popupContainerElRef.style.left = `${
        valueContainerElRef.getBoundingClientRect().left
      }px`;
      popupContainerElRef.style.top = `${
        valueContainerElRef.getBoundingClientRect().bottom + 8
      }px`;
      popupContainerElRef.style.width = `${
        valueContainerElRef.getBoundingClientRect().width
      }px`;
    }
  };

  // private handleChange = (index?: number) => {
  // if (this._isActivated) {
  //   this.propagateCustomEvent(
  //     INPUT_CHANGE_EVENT,
  //     this.searchpopup()[index || this._currentIndex]
  //   );
  //   this.propagateCustomEvent(
  //     INPUT_INPUT_EVENT,
  //     this.searchpopup()[index || this._currentIndex]
  //   );
  //   this.deactivate();
  // }
  // };

  private getClassMap = (
    baseClass:
      | 'base'
      | 'value-container'
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
      case 'value-container':
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
    const labelId = `${this.elementId}-label`;

    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <oak-internal-label
          label=${this.label}
          elementId=${labelId}
          elementFor=${this.elementId}
        ></oak-internal-label>
        <button
          class=${classMap(this.getClassMap('value-container'))}
          @click=${this.handleInputFocused}
          id=${this.valueContainerElementId}
          type="button"
        >
          ${this.value
            ? html`<div class=${classMap(this.getClassMap('value'))}>
                ${this.value}
              </div>`
            : html`<div class=${classMap(this.getClassMap('placeholder'))}>
                ${this.placeholder}
              </div>`}
          <div>
            down
          </div>
        </button>
        <div class=${classMap(this.getClassMap('popup'))}>
          <div
            class=${classMap(this.getClassMap('popup-container'))}
            id=${this.popupContainerElementId}
          >
            <slot></slot>
          </div>
          <oak-internal-form-tooltip
            .tooltip=${this.tooltip}
          ></oak-internal-form-tooltip>
          <oak-internal-form-error
            .errors=${this.errors}
          ></oak-internal-form-error>
        </div>
      </div>
    `;
  }
}

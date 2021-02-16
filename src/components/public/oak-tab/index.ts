import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {containerScrolledSubject} from '../../../events/ContainerScrolledEvent';
import {globalStyles} from '../../../global-styles';
import {getStyleClass} from '../../../styles/OakMenuStyles';
import {TAB_CHANGE_EVENT} from '../../../types/TabEventTypes';
import {isEmptyOrSpaces} from '../../../utils/StringUtils';

import '../oak-menu';
import '../oak-menu-item';

import {oakTabStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Tab component.
 *
 */
const customElementName = 'oak-tab';
@customElement(customElementName)
export class OakTab extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;
  private headerElementId = `${this.elementId}-header`;
  private overflowMenuElementId = `${this.elementId}-overflow-menu`;

  @property({type: Array})
  slots: string[] = [];

  @property({type: String})
  activeTab = '';

  @property({type: Array})
  private _hiddenSlots: string[] = [];

  private _debounceTimeout: any = false;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => this._adjustPositioning());
    this._registerEvents();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unregisterEvents();
  }

  firstUpdated(_changedProperties: any) {
    super.firstUpdated(_changedProperties);
  }

  private _registerEvents() {
    containerScrolledSubject.asObservable().subscribe(() => {
      clearTimeout(this._debounceTimeout);
      this._debounceTimeout = setTimeout(() => this._adjustPositioning(), 100);
    });
    fromEvent(window, 'resize')
      .pipe(map((event) => event))
      .subscribe(() => {
        clearTimeout(this._debounceTimeout);
        this._debounceTimeout = setTimeout(
          () => this._adjustPositioning(),
          100
        );
      });
  }

  private _unregisterEvents() {
    // window.removeEventListener('resize', this.adjustPositioning);
    // window.removeEventListener('scroll', this.adjustPositioning);
  }

  private _adjustPositioning() {
    const _hiddenSlotsComputed: any = [];
    this._hiddenSlots = [..._hiddenSlotsComputed];
    setTimeout(() => this._doAdjustPositioning());
  }

  private _doAdjustPositioning() {
    try {
      if (this.shadowRoot) {
        const tabElList: any = this.shadowRoot.querySelectorAll(
          `.${customElementName}__tab`
        );
        const headerEl = this.shadowRoot.getElementById(this.headerElementId);
        const overflowMenuEl = this.shadowRoot.getElementById(
          this.overflowMenuElementId
        );
        const _hiddenSlotsComputed = [];

        if (tabElList && headerEl && overflowMenuEl) {
          let stopWidth = overflowMenuEl.clientWidth;
          for (let i = 0; i < tabElList.length; ++i) {
            stopWidth += tabElList[i].scrollWidth;
            if (stopWidth > headerEl.clientWidth) {
              _hiddenSlotsComputed.push(this.slots[i]);
            }
          }

          this._hiddenSlots = [..._hiddenSlotsComputed];
        }
      }
    } catch (e) {
      console.log('**error', e);
    }
  }

  private handleClick = (slotName: string) => {
    this.propagateEvent(TAB_CHANGE_EVENT, slotName);
  };

  private propagateEvent = (eventName: string, value: any) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: 'slot',
          value,
        },
      })
    );
  };

  private _renderTab(slotName: string, controlElement = false) {
    return html`<li
      class=${classMap(
        this.getClassMap(controlElement ? 'hiddentab' : 'tab', slotName)
      )}
    >
      <button
        class=${classMap(this.getClassMap('button', slotName))}
        @click=${() => this.handleClick(slotName)}
        id=${this.elementId}
        type="button"
      >
        <slot .name=${slotName}></slot>
      </button>
    </li>`;
  }

  private _renderOverflowMenu() {
    return html`<li
      class=${classMap(this.getClassMap('overflow-menu'))}
      id=${this.overflowMenuElementId}
    >
      <oak-menu>
        <button
          class=${classMap(this.getClassMap('overflow-menu__trigger'))}
          type="button"
          slot="menu-trigger"
        >
          More ...
        </button>
        <div class=${getStyleClass({})} slot="menu-popup">
          ${this._hiddenSlots.map(
            (slotName: any) =>
              html`<oak-menu-item
                @menu-click=${() => this.handleClick(slotName)}
                >${slotName}</oak-menu-item
              >`
          )}
        </div>
      </oak-menu>
    </li>`;
  }

  private getClassMap(
    baseClass:
      | 'base'
      | 'header'
      | 'tab'
      | 'hiddentab'
      | 'button'
      | 'overflow-menu'
      | 'overflow-menu__trigger',
    slotName = ''
  ): any {
    const _activeTab =
      isEmptyOrSpaces(this.activeTab) && this.slots.length > 0
        ? this.slots[0]
        : this.activeTab;
    switch (baseClass) {
      case 'base':
        const data = {
          [customElementName]: true,
        };
        return data;
      case 'header':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'tab':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--${this.elementId}`]: true,
          [`${customElementName}__${baseClass}--hidden`]: this._hiddenSlots.includes(
            slotName
          ),
        };
      case 'hiddentab':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'button':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--active`]:
            slotName === _activeTab,
        };
      case 'overflow-menu':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--hidden`]:
            this._hiddenSlots.length === 0,
        };
      case 'overflow-menu__trigger':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--active`]: this._hiddenSlots.includes(
            _activeTab
          ),
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakTabStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <ul
          class=${classMap(this.getClassMap('header'))}
          id=${this.headerElementId}
        >
          ${this.slots.map((slotName: string) => this._renderTab(slotName))}
          ${this._renderOverflowMenu()}
          ${this.slots.map((slotName: string) =>
            this._renderTab(slotName, true)
          )}
        </ul>
        <slot name="content"></slot>
      </div>
    `;
  }
}

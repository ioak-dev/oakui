import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {containerScrolledSubject} from '../../_internal/events/ContainerScrolledEvent';
import {globalStyles} from '../../_internal/styles/global-styles';
import {compose} from '../../style-composer/OakMenuComposer';
import {TAB_CHANGE_EVENT} from '../../event/OakTabEvent';

import '../oak-menu';
import '../oak-menu-item';
import {oakTabAnimationStyles} from './animation-styles';
import {oakTabBaseStyles} from './base-styles';
import {oakTabVariantAccentStyles} from './variant-accent-styles';
import {oakTabVariantFillStyles} from './variant-fill-styles';
import {oakTabVariantTextStyles} from './variant-text-styles';
import {oakTabVariantUnderlineStyles} from './variant-underline-styles';
import {oakTabVariantPillsStyles} from './variant-pills-styles';

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
  tabs: string[] = [];

  @property({type: Number})
  activeTabIndex = 0;

  @property({type: String})
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'invert'
    | 'info' = 'primary';

  @property({type: String})
  variant?: 'underline' | 'accent' | 'fill' | 'text' | 'pills' = 'underline';

  @property({type: Boolean})
  rounded? = false;

  @property({type: Boolean})
  fill? = false;

  @property({type: Boolean})
  nobaseline? = false;

  @property({type: Array})
  private _hiddenTabIndexes: number[] = [];

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
    const _hiddenTabIndexesComputed: any = [];
    this._hiddenTabIndexes = [..._hiddenTabIndexesComputed];
    setTimeout(() => this._doAdjustPositioning());
  }

  private _doAdjustPositioning() {
    try {
      if (this.shadowRoot) {
        const tabElList: any = this.shadowRoot.querySelectorAll(
          `.${customElementName}-${this.variant}__tab`
        );
        const headerEl = this.shadowRoot.getElementById(this.headerElementId);
        const overflowMenuEl = this.shadowRoot.getElementById(
          this.overflowMenuElementId
        );
        const _hiddenTabIndexesComputed: number[] = [];

        if (tabElList && headerEl && overflowMenuEl) {
          let stopWidth = overflowMenuEl.clientWidth;
          for (let i = 0; i < tabElList.length; ++i) {
            stopWidth += tabElList[i].scrollWidth;
            if (stopWidth > headerEl.clientWidth) {
              _hiddenTabIndexesComputed.push(i);
            }
          }

          this._hiddenTabIndexes = [..._hiddenTabIndexesComputed];
        }
      }
    } catch (e) {
      console.log('**error', e);
    }
  }

  private handleClick = (tabIndex: number) => {
    this.propagateEvent(TAB_CHANGE_EVENT, tabIndex);
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

  private _renderTab(tabIndex: number) {
    return html`<li class=${classMap(this.getClassMap('tab', tabIndex))}>
      <button
        class=${classMap(this.getClassMap('button', tabIndex))}
        @click=${() => this.handleClick(tabIndex)}
        id=${this.elementId}
        type="button"
      >
        <slot .name=${tabIndex.toString()}></slot>${this.tabs[tabIndex]}
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
        <div class=${compose({})} slot="menu-popup">
          ${this._hiddenTabIndexes.map(
            (tabIndex: any) =>
              html`<oak-menu-item
                @menu-click=${() => this.handleClick(tabIndex)}
                >${this.tabs[tabIndex]}</oak-menu-item
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
      | 'button'
      | 'overflow-menu'
      | 'overflow-menu__trigger',
    tabIndex = 0
  ): any {
    const _baseClass = `${customElementName}-${this.variant}`;
    switch (baseClass) {
      case 'base':
        const data = {
          [_baseClass]: true,
          [`${_baseClass}--color-${this.color}`]: true,
          [`${_baseClass}--variant-${this.variant}`]: true,
        };
        return data;
      case 'header':
        return {
          [`${_baseClass}__${baseClass}`]: true,
          [`${_baseClass}__${baseClass}--${
            this.nobaseline ? 'nobaseline' : 'baseline'
          }`]: true,
        };
      case 'tab':
        return {
          [`${_baseClass}__${baseClass}`]: true,
          [`${_baseClass}__${baseClass}--${this.elementId}`]: true,
          [`${_baseClass}__${baseClass}--hidden`]: this._hiddenTabIndexes.includes(
            tabIndex
          ),
        };
      case 'button':
      case 'overflow-menu__trigger':
        const localClass = 'button';
        return {
          [`${_baseClass}__${localClass}`]: true,
          [`${_baseClass}__${localClass}--rounded`]: this.rounded,
          [`${_baseClass}__${localClass}--fill`]: this.fill,
          [`${_baseClass}__${localClass}--active`]:
            baseClass === 'button'
              ? tabIndex === this.activeTabIndex
              : this._hiddenTabIndexes.includes(this.activeTabIndex),
          [`${_baseClass}__${localClass}--color-${this.color}`]: true,
          [`${_baseClass}__${localClass}--variant-${this.variant}`]: true,
        };
      case 'overflow-menu':
        return {
          [`${_baseClass}__${baseClass}`]: true,
          [`${_baseClass}__${baseClass}--hidden`]:
            this._hiddenTabIndexes.length === 0,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [
      ...globalStyles,
      oakTabBaseStyles,
      oakTabVariantUnderlineStyles,
      oakTabVariantAccentStyles,
      oakTabVariantFillStyles,
      oakTabVariantTextStyles,
      oakTabVariantPillsStyles,
      oakTabAnimationStyles,
    ];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <ul
          class=${classMap(this.getClassMap('header'))}
          id=${this.headerElementId}
        >
          ${this.tabs.map((_: string, tabIndex: number) =>
            this._renderTab(tabIndex)
          )}
          ${this._renderOverflowMenu()}
        </ul>
        <slot name="content"></slot>
      </div>
    `;
  }
}

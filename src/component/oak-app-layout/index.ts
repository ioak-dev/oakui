import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';

import {oakAppLayoutStyles} from './index-styles';

import '../oak-button';

let elementIdCounter = 0;

/**
 * App layout component.
 *
 */
const customElementName = 'oak-app-layout';
@customElement(customElementName)
export class OakAppLayout extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  topbarVariant: 'sticky' | 'static' | 'auto' = 'auto';

  @property({type: String})
  sidebarVariant: 'side' | 'over' | 'push' = 'side';

  @property({type: String})
  topbarColor:
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
    | 'invert'
    | 'custom' = 'container';

  @property({type: String})
  sidebarColor:
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
    | 'invert'
    | 'custom' = 'surface';

  @property({type: Number})
  topbarElevation?:
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

  @property({type: Number})
  sidebarElevation?:
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
  private _isSidebarOpen = false;

  constructor() {
    super();
  }

  private _renderBackdrop() {
    if (['push', 'over'].includes(this.sidebarVariant) && this._isSidebarOpen) {
      return html`<div
        class="backdrop-fade"
        @click=${this._toggleSidebar}
      ></div>`;
    } else {
      return html``;
    }
  }

  private getClassMap(
    baseClass:
      | 'base'
      | 'main'
      | 'sidebar'
      | 'topbar'
      | 'topbar-container'
      | 'expand-icon'
  ): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          [`${customElementName}--sidebar-state-open`]: this._isSidebarOpen,
          [`${customElementName}--sidebar-variant-${this.sidebarVariant}`]: this
            .sidebarVariant,
          [`${customElementName}--topbar-variant-${this.topbarVariant}`]: this
            .topbarVariant,
        };
      case 'topbar':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--${this.topbarVariant}`]: true,
          [`${customElementName}__${baseClass}--color-${this.topbarColor}`]: true,
          [`oak-bs-elevation${this.topbarElevation}`]: true,
          [`oak-color-bg-${this.topbarColor}`]: true,
          [`oak-color-${this.topbarColor}-i`]: true,
        };
      case 'topbar-container':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'expand-icon':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'sidebar':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--top-layer`]: [
            'push',
            'over',
          ].includes(this.sidebarVariant),
          [`oak-bs-elevation${this.sidebarElevation}`]: this._isSidebarOpen,
          [`oak-color-bg-${this.sidebarColor}`]: true,
          [`oak-color-${this.sidebarColor}-i`]: true,
        };
      case 'main':
        return {
          [`${customElementName}__${baseClass}`]: true,
          ['oak-color-bg-global']: true,
          ['oak-color-global-i']: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakAppLayoutStyles];
  }

  private _toggleSidebar() {
    this._isSidebarOpen = !this._isSidebarOpen;
  }

  render() {
    return html`<div
      class=${classMap(this.getClassMap('base'))}
      id=${this.elementId}
    >
      ${this._renderBackdrop()}
      <header class=${classMap(this.getClassMap('topbar'))}>
        <button @click=${this._toggleSidebar}>
          <svg
            class=${classMap(this.getClassMap('expand-icon'))}
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"
            ></path>
          </svg>
        </button>
        <div class=${classMap(this.getClassMap('topbar-container'))}>
          <slot name="topbar"></slot>
        </div>
      </header>
      <aside class=${classMap(this.getClassMap('sidebar'))}>
        <slot name="sidebar"></slot>
      </aside>
      <main class=${classMap(this.getClassMap('main'))}>
        <slot name="main"></slot>
      </main>
    </div>`;
  }
}

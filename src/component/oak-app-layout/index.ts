import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import OakAppLayoutEvent from '../../event/OakAppLayoutEvent';
import {globalStyles} from '../../_internal/styles/global-styles';

import {oakAppLayoutStyles} from './index-styles';
import {
  recomputeDimensionsLeft,
  recomputeDimensionsRight,
  recomputeTopbarSpacing,
} from './service';

let elementIdCounter = 0;

/**
 * App layout component.
 *
 */
const customElementName = 'oak-app-layout';
@customElement(customElementName)
export class OakAppLayout extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;
  private topbarElementId = `${this.elementId}-topbar`;
  private leftDrawerElementId = `${this.elementId}-drawer-left`;
  private rightDrawerElementId = `${this.elementId}-drawer-right`;
  private contentElementId = `${this.elementId}-content`;

  @property({type: String})
  topbarVariant: 'sticky' | 'static' | 'auto' = 'auto';

  @property({type: Boolean})
  leftDrawerOpen = false;

  @property({type: Boolean})
  rightDrawerOpen = false;

  @property({type: String})
  leftDrawerType: 'side' | 'over' | 'push' = 'side';

  @property({type: String})
  rightDrawerType: 'side' | 'over' | 'push' = 'side';

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
    | 'custom' = 'primary';

  @property({type: Number})
  topElevation?:
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
  leftElevation?:
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
  rightElevation?:
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

  constructor() {
    super();
  }

  firstUpdated(_changedProperties: any) {
    super.firstUpdated(_changedProperties);
    setTimeout(() => this._recomputeDimensions());
  }

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    _changedProperties.forEach((_, propName) => {
      if (propName === 'leftDrawerOpen' || propName === 'rightDrawerOpen') {
        this._recomputeDimensions();
      }
    });
    return true;
  }

  private _recomputeDimensions() {
    try {
      if (this.shadowRoot) {
        const topbarEl = this.shadowRoot.getElementById(this.topbarElementId);
        const leftDrawerEl = this.shadowRoot.getElementById(
          this.leftDrawerElementId
        );
        const rightDrawerEl = this.shadowRoot.getElementById(
          this.rightDrawerElementId
        );
        const contentEl = this.shadowRoot.getElementById(this.contentElementId);
        recomputeDimensionsLeft(
          this.leftDrawerType,
          topbarEl,
          contentEl,
          leftDrawerEl,
          this.leftDrawerOpen,
          this.topbarVariant
        );
        recomputeDimensionsRight(
          this.rightDrawerType,
          topbarEl,
          contentEl,
          rightDrawerEl,
          this.rightDrawerOpen,
          this.topbarVariant
        );
        recomputeTopbarSpacing(topbarEl, contentEl, this.topbarVariant);
      }
    } catch (e) {
      console.log('**error', e);
    }
  }

  private _handleClose() {
    if (this.leftDrawerOpen && ['over', 'push'].includes(this.leftDrawerType)) {
      this.propagateEvent(OakAppLayoutEvent.CLOSE_DRAWER, {
        name: 'left',
        value: true,
      });
    }
    if (
      this.rightDrawerOpen &&
      ['over', 'push'].includes(this.rightDrawerType)
    ) {
      this.propagateEvent(OakAppLayoutEvent.CLOSE_DRAWER, {
        name: 'right',
        value: true,
      });
    }
  }

  private propagateEvent = (eventType: OakAppLayoutEvent, event: any) => {
    this.dispatchEvent(
      new CustomEvent(eventType, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: event.name,
          value: event.value,
        },
      })
    );
  };

  private _renderBackdrop() {
    if (
      (['push', 'over'].includes(this.leftDrawerType) && this.leftDrawerOpen) ||
      (['push', 'over'].includes(this.rightDrawerType) && this.rightDrawerOpen)
    ) {
      return html`<div
        class="backdrop-fade"
        @click=${this._handleClose}
      ></div>`;
    } else {
      return html``;
    }
  }

  private getClassMap(
    baseClass:
      | 'base'
      | 'drawer-left'
      | 'drawer-right'
      | 'topbar'
      | 'content'
      | 'content__topbar'
  ): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
        };
      case 'drawer-left':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--top-layer`]: [
            'push',
            'over',
          ].includes(this.leftDrawerType),
          [`oak-bs-elevation${this.leftElevation}`]: this.leftDrawerOpen,
        };
      case 'drawer-right':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--top-layer`]: [
            'push',
            'over',
          ].includes(this.rightDrawerType),
          [`oak-bs-elevation${this.rightElevation}`]: this.rightDrawerOpen,
        };
      case 'topbar':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--${this.topbarVariant}`]: true,
          [`oak-bs-elevation${this.topElevation}`]: true,
          [`oak-color-bg-${this.topbarColor}`]: true,
          [`oak-color-${this.topbarColor}-i`]: true,
        };
      case 'content':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'content__topbar':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`oak-bs-elevation${this.topElevation}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakAppLayoutStyles];
  }

  render() {
    return html`<div
      class=${classMap(this.getClassMap('base'))}
      id=${this.elementId}
    >
      ${this._renderBackdrop()}
      <div
        class=${classMap(this.getClassMap('drawer-left'))}
        id=${this.leftDrawerElementId}
      >
        <slot name="drawer-left"></slot>
      </div>
      ${this.topbarVariant !== 'auto'
        ? html`<div
            class=${classMap(this.getClassMap('topbar'))}
            id=${this.topbarElementId}
          >
            <slot name="topbar"></slot>
          </div>`
        : html``}
      <div
        class=${classMap(this.getClassMap('content'))}
        id=${this.contentElementId}
      >
        ${this.topbarVariant === 'auto'
          ? html` <div class=${classMap(this.getClassMap('content__topbar'))}>
              <slot name="topbar"></slot>
            </div>`
          : html``}
        <slot name="content"></slot>
      </div>
      <div
        class=${classMap(this.getClassMap('drawer-right'))}
        id=${this.rightDrawerElementId}
      >
        <slot name="drawer-right"></slot>
      </div>
    </div>`;
  }
}

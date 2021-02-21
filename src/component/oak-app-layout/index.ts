import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';

import {oakAppLayoutStyles} from './index-styles';
import {recomputeDimensionsLeft, recomputeDimensionsRight} from './service';

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

  @property({type: Boolean})
  leftDrawerOpen = false;

  @property({type: Boolean})
  rightDrawerOpen = false;

  @property({type: String})
  leftDrawerType: 'side' | 'over' | 'push' = 'side';

  @property({type: String})
  rightDrawerType: 'side' | 'over' | 'push' = 'side';

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
        const leftDrawerEl = this.shadowRoot.getElementById(
          this.leftDrawerElementId
        );
        const rightDrawerEl = this.shadowRoot.getElementById(
          this.rightDrawerElementId
        );
        const contentEl = this.shadowRoot.getElementById(this.contentElementId);
        recomputeDimensionsLeft(
          this.leftDrawerType,
          contentEl,
          leftDrawerEl,
          this.leftDrawerOpen
        );
        recomputeDimensionsRight(
          this.rightDrawerType,
          contentEl,
          rightDrawerEl,
          this.rightDrawerOpen
        );
      }
    } catch (e) {
      console.log('**error', e);
    }
  }

  private _renderBackdrop() {
    if (['push', 'over'].includes(this.leftDrawerType) && this.leftDrawerOpen) {
      return html`<div class="backdrop-fade"></div>`;
    } else if (
      ['push', 'over'].includes(this.rightDrawerType) &&
      this.rightDrawerOpen
    ) {
      return html`<div class="backdrop-fade"></div>`;
    } else {
      return html``;
    }
  }

  private getClassMap(
    baseClass: 'base' | 'drawer-left' | 'drawer-right' | 'content'
  ): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
        };
      case 'drawer-left':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`oak-bs-elevation${this.leftElevation}`]: true,
        };
      case 'drawer-right':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`oak-bs-elevation${this.rightElevation}`]: true,
        };
      case 'content':
        return {
          [`${customElementName}__${baseClass}`]: true,
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
      <div
        class=${classMap(this.getClassMap('content'))}
        id=${this.contentElementId}
      >
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

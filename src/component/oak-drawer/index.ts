import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';

import {oakDrawerStyles} from './index-styles';
import {recomputeDimensionsLeft, recomputeDimensionsRight} from './service';

let elementIdCounter = 0;

/**
 * Drawer component.
 *
 */
const customElementName = 'oak-drawer';
@customElement(customElementName)
export class OakDrawer extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;
  private drawerElementId = `${this.elementId}-drawer`;
  private contentElementId = `${this.elementId}-content`;

  @property({type: String})
  position?: 'left' | 'right' = 'left';

  @property({type: Boolean})
  isOpen = false;

  constructor() {
    super();
  }

  firstUpdated(_changedProperties: any) {
    super.firstUpdated(_changedProperties);
    setTimeout(() => this._recomputeDimensions());
  }

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    _changedProperties.forEach((_, propName) => {
      if (propName === 'isOpen') {
        this._recomputeDimensions();
      }
    });
    return true;
  }

  private _recomputeDimensions() {
    try {
      if (this.shadowRoot) {
        const drawerEl = this.shadowRoot.getElementById(this.drawerElementId);
        const contentEl = this.shadowRoot.getElementById(this.contentElementId);
        if (drawerEl && contentEl) {
          switch (this.position) {
            case 'left':
              recomputeDimensionsLeft(drawerEl, contentEl, this.isOpen);
              break;
            case 'right':
              recomputeDimensionsRight(drawerEl, contentEl, this.isOpen);
              break;
            default:
              break;
          }
        }
      }
    } catch (e) {
      console.log('**error', e);
    }
  }

  private getClassMap(
    baseClass: 'base' | 'container' | 'drawer' | 'content'
  ): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
        };
      case 'container':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'drawer':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--${this.position}`]: true,
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
    return [...globalStyles, oakDrawerStyles];
  }

  render() {
    return html`<div
      class=${classMap(this.getClassMap('base'))}
      id=${this.elementId}
    >
      <div
        class=${classMap(this.getClassMap('drawer'))}
        id=${this.drawerElementId}
      >
        <slot name="drawer"></slot>
      </div>
      <div
        class=${classMap(this.getClassMap('content'))}
        id=${this.contentElementId}
      >
        <slot name="content"></slot>
      </div>
    </div>`;
  }
}

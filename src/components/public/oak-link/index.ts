import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';

import {oakLinkStyles} from './index-styles';

import '../oak-typography';
import {LINK_CLICK_EVENT} from '../../../types/LinkEventTypes';

let elementIdCounter = 0;

/**
 * Hyper link component.
 *
 */
const customElementName = 'oak-link';
@customElement(customElementName)
export class OakLink extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  href?: string | null = null;

  @property({type: String})
  underline: 'none' | 'hover' | 'always' = 'hover';

  @property({type: Boolean})
  block = false;

  @property({type: String})
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'primary-text'
    | 'secondary-text'
    | 'tertiary-text'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'danger-text'
    | 'warning-text'
    | 'success-text'
    | 'info' = 'inherit';

  /**
   * Set the text-align on the component.
   */
  @property({type: String})
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' = 'inherit';

  /**
   * Controls the display type
   */
  @property({type: String})
  display?: 'initial' | 'block' | 'inline' = 'initial';

  @property({type: String})
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline'
    | 'inherit' = 'body1';

  constructor() {
    super();
  }

  private handleClick = (event: any) => {
    this.propagateEvent(LINK_CLICK_EVENT, event);
  };

  private propagateEvent = (eventName: string, event: any) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          event: event,
        },
      })
    );
  };

  private getClassMap(baseClass: 'base'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          [`${customElementName}-${this.underline}`]: true,
          [`${customElementName}-block`]: this.block,
          [`oak-color-fg-${this.color}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakLinkStyles];
  }

  render() {
    return html`<div class=${`${customElementName}--container`}>
      ${this.href && this.href !== '#'
        ? html`<a
            class=${classMap(this.getClassMap('base'))}
            id=${this.elementId}
            href=${this.href}
          >
            <oak-typography
              .align=${this.align}
              .display=${this.display}
              .color=${this.color}
              .variant=${this.variant}
            >
              <slot></slot>
            </oak-typography>
          </a>`
        : html` <button
            class=${classMap(this.getClassMap('base'))}
            @click=${this.handleClick}
            id=${this.elementId}
            type="button"
          >
            <oak-typography
              .align=${this.align}
              .display=${this.display}
              .color=${this.color}
              .variant=${this.variant}
            >
              <slot></slot>
            </oak-typography>
          </button>`}
    </div>`;
  }
}

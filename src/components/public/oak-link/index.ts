import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';

import {oakLinkStyles} from './index-styles';

import '../oak-typography';
import {LINK_CLICK_EVENT} from '../../../types/LinkEventTypes';
import {oakLinkSizeStyles} from './size-styles';
import {oakButtonSizeStyles} from '../oak-button/size-styles';
import {oakLinkShapeStyles} from './shape-styles';
import {oakButtonShapeStyles} from '../oak-button/shape-styles';

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
  blockSize?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  blockShape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' | 'icon' =
    'rectangle';

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
   * Set the text-align on the component. Applicable only when block = false
   */
  @property({type: String})
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' = 'inherit';

  /**
   * Controls the display type. Applicable only when block = false
   */
  @property({type: String})
  display?: 'initial' | 'block' | 'inline' = 'initial';

  /**
   * Variant type for the typography settings. Applicable only when block = false
   */
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
          [`oak-color-fg-${this.color}`]: true,
          [`${this.color}`]: true,
          [`${customElementName}-block`]: this.block,
          [`size-${this.blockSize}`]: this.block,
          [`shape-${this.blockShape}`]: this.block,
          icon: this.block && this.blockShape === 'icon',
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [
      ...globalStyles,
      oakLinkStyles,
      oakLinkSizeStyles,
      oakButtonSizeStyles,
      oakLinkShapeStyles,
      oakButtonShapeStyles,
    ];
  }

  render() {
    return html`<div class=${`${customElementName}--container`}>
      ${this.href && this.href !== '#'
        ? html`<a
            class=${classMap(this.getClassMap('base'))}
            id=${this.elementId}
            href=${this.href}
          >
            ${this.block
              ? html`<slot></slot>`
              : html` <oak-typography
                  .align=${this.align}
                  .display=${this.display}
                  .color=${this.color}
                  .variant=${this.variant}
                >
                  <slot></slot>
                </oak-typography>`}
          </a>`
        : html` <button
            class=${classMap(this.getClassMap('base'))}
            @click=${this.handleClick}
            id=${this.elementId}
            type="button"
          >
            ${this.block
              ? html`<slot></slot>`
              : html`<oak-typography
                  .align=${this.align}
                  .display=${this.display}
                  .color=${this.color}
                  .variant=${this.variant}
                >
                  <slot></slot>
                </oak-typography>`}
          </button>`}
    </div>`;
  }
}

import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';

import {oakTypographyStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Card component.
 *
 */
const customElementName = 'oak-typography';
@customElement(customElementName)
export class OakTypography extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'invert'
    | 'info' = 'inherit';

  @property({type: String})
  highlightColor?:
    | 'none'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'invert'
    | 'info' = 'none';

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

  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  @property({type: Boolean})
  noWrap?: boolean = false;

  /**
   * If true, the text will have a bottom margin.
   */
  @property({type: Boolean})
  paragraph?: boolean = false;

  /**
   * 	If true, the text will have a bottom margin.
   */
  @property({type: Boolean})
  gutterBottom?: boolean = false;

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

  private getClassMap(baseClass: 'base'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          'oak-typography-root': true,
          [`oak-typography-${this.variant}`]: true,
          [`oak-typography-align-${this.align}`]: true,
          [`oak-typography-display-${this.display}`]: true,
          [`oak-typography-highlight-${this.highlightColor}`]: true,
          'oak-typography-paragraph': this.paragraph,
          'oak-typography-noWrap': this.noWrap,
          'oak-gutter-bottom': this.gutterBottom,
          [`oak-color-fg-${this.color}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakTypographyStyles];
  }

  render() {
    return html`${[
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'caption',
      'overline',
      'inherit',
    ].includes(this.variant)
      ? html` <p
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </p>`
      : html``}
    ${this.variant === 'h1'
      ? html` <h1
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h1>`
      : html``}
    ${this.variant === 'h2'
      ? html` <h2
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h2>`
      : html``}
    ${this.variant === 'h3'
      ? html` <h3
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h3>`
      : html``}
    ${this.variant === 'h4'
      ? html` <h4
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h4>`
      : html``}
    ${this.variant === 'h5'
      ? html` <h5
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h5>`
      : html``}
    ${this.variant === 'h6'
      ? html` <h6
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <slot></slot>
        </h6>`
      : html``}`;
  }
}

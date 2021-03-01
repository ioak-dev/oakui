const BASE_CLASS_NAME = 'oak-typography';

export interface OakTypographyProps {
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
    | 'info';

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
    | 'info';

  /**
   * Set the text-align on the component.
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';

  /**
   * Controls the display type
   */
  display?: 'initial' | 'block' | 'inline';

  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean;

  /**
   * If true, the text will have a bottom margin.
   */
  paragraph?: boolean;

  /**
   * 	If true, the text will have a bottom margin.
   */
  gutterBottom?: boolean;

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
    | 'inherit';
}

export function compose(props: OakTypographyProps): string {
  let output = BASE_CLASS_NAME;
  output += ` ${BASE_CLASS_NAME}-root`;
  output += ` ${BASE_CLASS_NAME}-${props.variant}`;
  output += ` ${BASE_CLASS_NAME}-align-${props.align}`;
  output += ` ${BASE_CLASS_NAME}-display-${props.display}`;
  output += ` ${BASE_CLASS_NAME}-highlight-${props.highlightColor}`;
  if (props.paragraph) {
    output += ` ${BASE_CLASS_NAME}-paragraph`;
  }
  if (props.noWrap) {
    output += ` ${BASE_CLASS_NAME}-noWrap`;
  }
  if (props.gutterBottom) {
    output += ' oak-gutter-bottom';
  }
  if (props.color) {
    output += ` oak-color-fg-${props.color}`;
  }
  return output;
}

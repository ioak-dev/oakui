const BASE_CLASS_NAME = 'oak-typography';

export interface OakTypographyProps {
  baseClass?: string;

  transform?: 'lowercase' | 'uppercase' | 'titlecase';

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
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean;

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
  if (props.baseClass) {
    output += ` ${props.baseClass}`;
  }
  output += ` ${BASE_CLASS_NAME}-root`;
  output += ` ${BASE_CLASS_NAME}-${props.variant}`;
  if (props.align) {
    output += ` ${BASE_CLASS_NAME}-align-${props.align}`;
  }
  if (props.noWrap) {
    output += ` ${BASE_CLASS_NAME}-noWrap`;
  }
  if (props.color) {
    output += ` oak-color-fg-${props.color}`;
  }
  if (props.highlightColor) {
    output += ` ${BASE_CLASS_NAME}-highlight-${props.highlightColor}`;
  }
  if (props.transform) {
    output += ` ${BASE_CLASS_NAME}-transform--${props.transform}`;
  }
  return output;
}

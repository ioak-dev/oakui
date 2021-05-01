const BASE_CLASS_NAME = 'oak-link';

export interface OakLinkProps {
  href?: string | null;
  underline: 'none' | 'hover' | 'always';
  block: boolean;
  blockSize?: 'xsmall' | 'small' | 'medium' | 'large';
  blockShape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' | 'icon';
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
}

export function compose(props: OakLinkProps): string {
  let output = BASE_CLASS_NAME;

  output += ` ${BASE_CLASS_NAME}-${props.underline || 'hover'}`;
  output += ` oak-color-fg-${props.color || 'global'}`;
  output += ` ${props.color || 'global'}`;
  if (props.block) {
    output += ` ${BASE_CLASS_NAME}-block`;
    output += ` size-${props.blockSize || 'small'}`;
    output += ` oak-shape-${props.blockShape || 'small'}`;
  }
  if (props.block && props.blockShape === 'icon') {
    output += ' icon';
  }

  return output;
}

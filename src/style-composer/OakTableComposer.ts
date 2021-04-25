const BASE_CLASS_NAME = 'oak-table';

export interface OakTableProps {
  dense?: boolean;
  color?: 'global' | 'container' | 'surface' | 'float' | 'none';
  headerColor?:
    | 'global'
    | 'container'
    | 'surface'
    | 'float'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'info'
    | 'default'
    | 'invert'
    | 'danger'
    | 'warning'
    | 'success'
    | 'auto';
  navPosition?: 'none' | 'top' | 'bottom';
}

export function compose(props: OakTableProps): string {
  let output = BASE_CLASS_NAME;

  if (props.dense) {
    output += ` ${BASE_CLASS_NAME}--dense`;
  }
  output += ` ${BASE_CLASS_NAME}--fill-${props.color || 'container'}`;

  if (!props.headerColor || props.headerColor === 'auto') {
    output += ` ${BASE_CLASS_NAME}--header-fill-${props.color || 'container'}`;
  } else {
    output += ` ${BASE_CLASS_NAME}--header-fill-${props.headerColor}`;
  }

  output += ` ${BASE_CLASS_NAME}--nav-${props.navPosition || 'none'}`;

  return output;
}

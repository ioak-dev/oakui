const BASE_CLASS_NAME = 'oak-link';

export interface OakLinkProps {
  baseClass?: string;
  underlineStyle?: 'none' | 'hover' | 'always';
  textStyle?: 'none' | 'hover' | 'always';
  blockStyle?: 'none' | 'hover' | 'always';
  underlineThickness?: 'thin' | 'normal' | 'thick';
  dotted?: boolean;
  color?:
    | 'default'
    | 'info'
    | 'invert'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'warning'
    | 'success';
}

export function compose(props: OakLinkProps): string {
  let output = BASE_CLASS_NAME;
  if (props.baseClass) {
    output += ` ${props.baseClass}`;
  }

  output += ` ${BASE_CLASS_NAME}--underline-${props.underlineStyle || 'hover'}`;
  if (props.dotted) {
    output += ` ${BASE_CLASS_NAME}--dotted`;
  }
  output += ` ${BASE_CLASS_NAME}--underline-thickness-${
    props.underlineThickness || 'normal'
  }`;
  output += ` ${BASE_CLASS_NAME}--text-${props.textStyle || 'always'}`;
  output += ` ${BASE_CLASS_NAME}--color-${props.color || 'primary'}`;
  output += ` ${BASE_CLASS_NAME}--block-${props.blockStyle || 'none'}`;

  return output;
}

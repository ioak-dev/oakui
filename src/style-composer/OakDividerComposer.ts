const BASE_CLASS_NAME = 'oak-divider';

export interface OakDividerProps {
  colorMode?: 'darker' | 'lighter' | 'even' | 'i';
  color?:
    | 'none'
    | 'global'
    | 'container'
    | 'surface'
    | 'float'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'invert';
}

export function compose(props: OakDividerProps): string {
  let output = BASE_CLASS_NAME;

  output += ` ${BASE_CLASS_NAME}--color-${props.color || 'global'}`;
  output += ` ${BASE_CLASS_NAME}--mode-${props.colorMode || 'darker'}`;

  return output;
}

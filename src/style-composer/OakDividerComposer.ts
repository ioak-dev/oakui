const BASE_CLASS_NAME = 'oak-divider';

export interface OakDividerProps {
  colorMode?: 'darker' | 'lighter';
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
  marginVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export function compose(props: OakDividerProps): string {
  let output = BASE_CLASS_NAME;

  output += ` ${BASE_CLASS_NAME}--color-${props.color || 'global'}`;
  output += ` ${BASE_CLASS_NAME}--mode-${props.colorMode || 'darker'}`;
  output += ` oak-margin-vertical${props.marginVertical || 0}`;

  return output;
}

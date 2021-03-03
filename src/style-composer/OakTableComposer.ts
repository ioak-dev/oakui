const BASE_CLASS_NAME = 'oak-table-extern';

export interface OakTableProps {
  dense?: boolean;
  fill?: 'global' | 'container' | 'surface' | 'float' | 'none';
  elevation?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;
  variant?: 'outlined';
}

export function compose(props: OakTableProps): string {
  let output = BASE_CLASS_NAME;

  if (props.dense) {
    output += ` ${BASE_CLASS_NAME}--dense`;
  }

  output += ` ${BASE_CLASS_NAME}--fill-${props.fill || 'surface'}`;
  if (props.elevation === 0 && props.variant !== 'outlined') {
    output += ` ${BASE_CLASS_NAME}--orphan`;
  }

  return output;
}

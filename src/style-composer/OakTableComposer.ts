const BASE_CLASS_NAME = 'oak-table-extern';

export interface OakTableProps {
  dense?: boolean;
  fill?: 'container' | 'surface' | 'float' | 'none';
}

export function compose(props: OakTableProps): string {
  let output = BASE_CLASS_NAME;

  if (props.dense) {
    output += ` ${BASE_CLASS_NAME}--dense`;
  }

  output += ` ${BASE_CLASS_NAME}--fill-${props.fill || 'surface'}`;

  return output;
}

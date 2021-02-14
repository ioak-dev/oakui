const BASE_CLASS_NAME = 'oak-table-extern';

export function getStyleClass({
  dense,
  fill,
}: {
  dense?: boolean;
  fill?: 'container' | 'surface' | 'float' | 'none';
}): string {
  let output = BASE_CLASS_NAME;

  if (dense) {
    output += ` ${BASE_CLASS_NAME}--dense`;
  }

  output += ` ${BASE_CLASS_NAME}--fill-${fill || 'surface'}`;

  return output;
}

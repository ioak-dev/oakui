const BASE_CLASS_NAME = 'oak-menu-extern';

export function getStyleClass({variant}: {variant?: 'list' | 'grid'}): string {
  let output = BASE_CLASS_NAME;

  output += ` ${BASE_CLASS_NAME}--${variant || 'list'}`;

  return output;
}

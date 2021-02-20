const BASE_CLASS_NAME = 'oak-menu-extern';

export interface OakMenuProps {
  variant?: 'list' | 'grid';
}

export function compose(props: OakMenuProps): string {
  let output = BASE_CLASS_NAME;

  output += ` ${BASE_CLASS_NAME}--${props.variant || 'list'}`;

  return output;
}

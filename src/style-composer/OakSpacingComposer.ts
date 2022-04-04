const BASE_CLASS_NAME = 'oak-spacing';

export interface OakSpacingProps {
  paddingHorizontal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  marginHorizontal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  marginVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export function compose(props: OakSpacingProps): string {
  let output = BASE_CLASS_NAME;
  output += ` ${BASE_CLASS_NAME}__padding-horizontal${
    props.paddingHorizontal === null ? 2 : props.paddingHorizontal
  }`;
  output += ` ${BASE_CLASS_NAME}__padding-vertical${
    props.paddingVertical === null ? 2 : props.paddingVertical
  }`;
  output += ` ${BASE_CLASS_NAME}__margin-horizontal${
    props.marginHorizontal === null ? 0 : props.marginHorizontal
  }`;
  output += ` ${BASE_CLASS_NAME}__margin-vertical${
    props.marginVertical === null ? 0 : props.marginVertical
  }`;

  return output;
}

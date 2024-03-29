const BASE_CLASS_NAME = 'oak-section-extern';

export interface OakSectionProps {
  baseClass?: string;
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
  paddingHorizontal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  marginHorizontal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  marginVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  rounded?: boolean;
  semitransparent?: boolean;
  fillColor?:
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
    | 'invert'
    | 'none';
  outlineColor?:
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
    | 'invert'
    | 'none';
  textColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'invert'
    | 'auto';
  gutterBottom?: boolean;
  fullWidth?: boolean;
}

export function compose(props: OakSectionProps): string {
  let output = BASE_CLASS_NAME;
  if (props.baseClass) {
    output += ` ${props.baseClass}`;
  }
  output += ` oak-bs-elevation${props.elevation || 0}`;
  output += ` oak-padding-horizontal${
    props.paddingHorizontal === null ? 2 : props.paddingHorizontal
  }`;
  output += ` oak-padding-vertical${
    props.paddingVertical === null ? 2 : props.paddingVertical
  }`;
  output += ` oak-margin-horizontal${
    props.marginHorizontal === null ? 0 : props.marginHorizontal
  }`;
  output += ` oak-margin-vertical${
    props.marginVertical === null ? 0 : props.marginVertical
  }`;
  output += ` ${BASE_CLASS_NAME}--outline-${props.outlineColor || 'none'}`;
  output += ` ${BASE_CLASS_NAME}--fill-${props.fillColor || 'container'}`;
  output += ` ${BASE_CLASS_NAME}--text-${props.textColor || 'auto'}`;
  if (props.semitransparent) {
    output += ` ${BASE_CLASS_NAME}--semitransparent`;
  }
  if (props.rounded) {
    output += ' oak-rounded';
  }
  if (props.gutterBottom) {
    output += ' oak-gutter-bottom';
  }
  if (props.fullWidth) {
    output += ` ${BASE_CLASS_NAME}--fullwidth`;
  }
  return output;
}

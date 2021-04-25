import {css} from 'lit-element';

export const oakLabelStyles = css`
  label {
    display: block;
    font-size: var(--oak-label-size);
    margin-bottom: 4px;
    color: var(--formelement-color-label);
    text-transform: capitalize;
    word-break: keep-all;
  }
  label.no-margin {
    margin-bottom: 0.5px;
  }
`;

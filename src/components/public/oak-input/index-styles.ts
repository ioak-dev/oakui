import {css} from 'lit-element';

export const oakInputStyles = css`
  input {
    width: 100%;
    border: 1px solid var(--global-border-color);
    color: var(--formelement-color-fg);
    box-sizing: border-box;
    padding: 0 5px;
    border-radius: var(--formelement-border-radius);
    outline: none;
  }
  input:focus {
    box-shadow: var(--formelement-outline-box-shadow);
    border-color: var(--formelement-outline-border-color);
    color: var(--formelement-color-fg-active);
  }
  input.validation-failure {
    border-color: var(--color-danger);
  }
  input.validation-failure:focus {
    box-shadow: var(--formelement-outline-box-shadow-error);
  }
`;

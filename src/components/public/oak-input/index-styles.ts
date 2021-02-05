import {css} from 'lit-element';

export const oakInputStyles = css`
  .oak-input {
    margin-bottom: var(--oak-padding-vertical4);
  }
  input {
    width: 100%;
    font-size: 14px;
    border: 1px solid var(--global-border-color);
    background-color: var(--formelement-color-bg);
    color: var(--formelement-color-fg);
    box-sizing: border-box;
    padding: 0 5px;
    min-height: var(--formelement-height);
    border-radius: var(--formelement-border-radius);
    outline: none;
  }
  input:focus {
    box-shadow: var(--formelement-outline-box-shadow);
    border-color: var(--formelement-outline-border-color);
    background-color: var(--formelement-color-bg-active);
    color: var(--formelement-color-fg-active);
  }
  input.validation-failure {
    border-color: var(--color-danger);
  }
  input.validation-failure:focus {
    box-shadow: var(--formelement-outline-box-shadow-error);
  }
  input[type='file'] {
    line-height: var(--formelement-height);
  }
`;

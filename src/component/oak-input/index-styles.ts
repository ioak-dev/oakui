import {css} from 'lit-element';

export const oakInputStyles = css`
  .oak-input {
    text-align: left;
  }
  input {
    width: 100%;
    border: var(--oak-userinput-border);
    box-sizing: border-box;
    padding: 0 5px;
    border-radius: var(--formelement-border-radius);
    outline: none;
    text-overflow: ellipsis;
  }
  input:focus {
    box-shadow: var(--oak-userinput-box-shadow-focus);
    border: var(--oak-userinput-border-focus);
    outline-style: var(--oak-userinput-outline-style);
    outline-width: var(--oak-userinput-outline-width);
    outline-offset: var(--oak-userinput-outline-offset);
    outline-color: var(--oak-userinput-outline-color);
  }
  input.validation-failure {
    border: var(--oak-userinput-border-error);
  }
  input.validation-failure:focus {
    box-shadow: var(--oak-userinput-box-shadow-error-focus);
    border: var(--oak-userinput-border-error-focus);
    outline-style: var(--oak-userinput-outline-style);
    outline-width: var(--oak-userinput-outline-width);
    outline-offset: var(--oak-userinput-outline-offset);
    outline-color: var(--oak-userinput-outline-color);
  }
  input.oak-input--error-style-fill.validation-failure {
    background-color: var(--color-danger-transparent);
  }
  input.oak-input--error-style-fill.validation-failure:focus {
    background-color: var(--color-danger-semitransparent1);
  }
`;

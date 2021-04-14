import {css} from 'lit-element';

export const oakInternalSelectNativeStyles = css`
  select {
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
  select:focus {
    box-shadow: var(--oak-userinput-outline-box-shadow);
    border-color: var(--oak-userinput-outline-border-color);
    background-color: var(--formelement-color-bg-active);
    color: var(--formelement-color-fg-active);
    appearance: none;
    /* for Firefox */
    -moz-appearance: none;
    /* for Chrome */
    -webkit-appearance: none;
    outline-style: var(--oak-userinput-outline-style);
    outline-width: var(--oak-userinput-outline-width);
    outline-offset: var(--oak-userinput-outline-offset);
    outline-color: var(--oak-userinput-outline-color);
  }
  select.validation-failure {
    border-color: var(--color-danger);
  }
  select.validation-failure:focus {
    box-shadow: var(--oak-userinput-outline-box-shadow-error);
    outline-style: var(--oak-userinput-outline-style);
    outline-width: var(--oak-userinput-outline-width);
    outline-offset: var(--oak-userinput-outline-offset);
    outline-color: var(--oak-userinput-outline-color);
  }
`;

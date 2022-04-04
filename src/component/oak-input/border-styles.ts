import {css} from 'lit-element';

export const oakInputBorderStyles = css`
  .oak-input--no-underline {
    border: 1px solid transparent;
  }
  .oak-input--underline {
    border: none;
    border-bottom: 1px solid transparent;
  }
  .oak-input--color-none {
    border-color: var(--color-global-darkest);
  }
  .oak-input--color-global {
    border-color: var(--color-global-darkest);
  }
  .oak-input--color-container {
    border-color: var(--color-container-darkest);
  }
  .oak-input--color-surface {
    border-color: var(--color-surface-darkest);
  }
  .oak-input--color-float {
    border-color: var(--color-float-darkest);
  }
  .oak-input--color-default {
    border-color: var(--color-default);
  }
  .oak-input--color-info {
    border-color: var(--color-info);
  }
  .oak-input--color-invert {
    border-color: var(--color-invert);
  }
  .oak-input--color-primary {
    border-color: var(--color-primary);
  }
  .oak-input--color-secondary {
    border-color: var(--color-secondary);
  }
  .oak-input--color-tertiary {
    border-color: var(--color-tertiary);
  }
  .oak-input--color-danger {
    border-color: var(--color-danger);
  }
  .oak-input--color-warning {
    border-color: var(--color-warning);
  }
  .oak-input--color-success {
    border-color: var(--color-success);
  }

  .oak-input--no-underline:focus {
    box-shadow: var(--oak-userinput-box-shadow-focus);
    outline-style: var(--oak-userinput-outline-style);
    outline-width: var(--oak-userinput-outline-width);
    outline-offset: var(--oak-userinput-outline-offset);
    outline-color: var(--oak-userinput-outline-color);
    border: var(--oak-userinput-border-focus);
  }
  .oak-input--no-underline.validation-failure {
    border: var(--oak-userinput-border-error);
  }
  .oak-input--no-underline.validation-failure:focus {
    box-shadow: var(--oak-userinput-box-shadow-error-focus);
    outline-style: var(--oak-userinput-outline-style);
    outline-width: var(--oak-userinput-outline-width);
    outline-offset: var(--oak-userinput-outline-offset);
    outline-color: var(--oak-userinput-outline-color);
    border: var(--oak-userinput-border-error-focus);
  }

  .oak-input--underline:focus {
    border-color: var(--oak-userinput-underline-color-focus);
  }
  .oak-input--underline.validation-failure {
    border-color: var(--oak-userinput-underline-color-error);
  }
  .oak-input--underline.validation-failure:focus {
    border-color: var(--oak-userinput-underline-color-error-focus);
  }
`;

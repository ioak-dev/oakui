import {css} from 'lit-element';

export const oakInputBorderStyles = css`
  input.oak-input--no-underline {
    border: 1px solid transparent;
  }
  input.oak-input--underline {
    border: none;
    border-bottom: 1px solid transparent;
  }
  input.oak-input--color-none {
    border-color: var(--color-global-darkest);
  }
  input.oak-input--color-global {
    border-color: var(--color-global-darkest);
  }
  input.oak-input--color-container {
    border-color: var(--color-container-darkest);
  }
  input.oak-input--color-surface {
    border-color: var(--color-surface-darkest);
  }
  input.oak-input--color-float {
    border-color: var(--color-float-darkest);
  }
  input.oak-input--color-default {
    border-color: var(--color-default);
  }
  input.oak-input--color-info {
    border-color: var(--color-info);
  }
  input.oak-input--color-invert {
    border-color: var(--color-invert);
  }
  input.oak-input--color-primary {
    border-color: var(--color-primary);
  }
  input.oak-input--color-secondary {
    border-color: var(--color-secondary);
  }
  input.oak-input--color-tertiary {
    border-color: var(--color-tertiary);
  }
  input.oak-input--color-danger {
    border-color: var(--color-danger);
  }
  input.oak-input--color-warning {
    border-color: var(--color-warning);
  }
  input.oak-input--color-success {
    border-color: var(--color-success);
  }

  input.oak-input--no-underline:focus {
    box-shadow: var(--oak-userinput-box-shadow-focus);
    outline-style: var(--oak-userinput-outline-style);
    outline-width: var(--oak-userinput-outline-width);
    outline-offset: var(--oak-userinput-outline-offset);
    outline-color: var(--oak-userinput-outline-color);
    border: var(--oak-userinput-border-focus);
  }
  input.oak-input--no-underline.validation-failure {
    border: var(--oak-userinput-border-error);
  }
  input.oak-input--no-underline.validation-failure:focus {
    box-shadow: var(--oak-userinput-box-shadow-error-focus);
    outline-style: var(--oak-userinput-outline-style);
    outline-width: var(--oak-userinput-outline-width);
    outline-offset: var(--oak-userinput-outline-offset);
    outline-color: var(--oak-userinput-outline-color);
    border: var(--oak-userinput-border-error-focus);
  }

  input.oak-input--underline:focus {
    border-color: var(--oak-userinput-underline-color-focus);
  }
  input.oak-input--underline.validation-failure {
    border-color: var(--oak-userinput-underline-color-error);
  }
  input.oak-input--underline.validation-failure:focus {
    border-color: var(--oak-userinput-underline-color-error-focus);
  }
`;

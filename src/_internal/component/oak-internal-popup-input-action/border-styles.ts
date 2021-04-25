import {css} from 'lit-element';

export const oakInternalPopupInputActionBorderStyles = css`
  .oak-internal-popup-input-action--no-underline {
    border: 1px solid transparent;
  }
  .oak-internal-popup-input-action--underline {
    border: none;
    border-bottom: 1px solid transparent;
  }
  .oak-internal-popup-input-action--color-none {
    border-color: var(--color-global-darkest);
  }
  .oak-internal-popup-input-action--color-global {
    border-color: var(--color-global-darkest);
  }
  .oak-internal-popup-input-action--color-container {
    border-color: var(--color-container-darkest);
  }
  .oak-internal-popup-input-action--color-surface {
    border-color: var(--color-surface-darkest);
  }
  .oak-internal-popup-input-action--color-float {
    border-color: var(--color-float-darkest);
  }
  .oak-internal-popup-input-action--color-default {
    border-color: var(--color-default);
  }
  .oak-internal-popup-input-action--color-info {
    border-color: var(--color-info);
  }
  .oak-internal-popup-input-action--color-invert {
    border-color: var(--color-invert);
  }
  .oak-internal-popup-input-action--color-primary {
    border-color: var(--color-primary);
  }
  .oak-internal-popup-input-action--color-secondary {
    border-color: var(--color-secondary);
  }
  .oak-internal-popup-input-action--color-tertiary {
    border-color: var(--color-tertiary);
  }
  .oak-internal-popup-input-action--color-danger {
    border-color: var(--color-danger);
  }
  .oak-internal-popup-input-action--color-warning {
    border-color: var(--color-warning);
  }
  .oak-internal-popup-input-action--color-success {
    border-color: var(--color-success);
  }

  .oak-internal-popup-input-action--no-underline:focus {
    box-shadow: var(--oak-userinput-box-shadow-focus);
    outline-style: var(--oak-userinput-outline-style);
    outline-width: var(--oak-userinput-outline-width);
    outline-offset: var(--oak-userinput-outline-offset);
    outline-color: var(--oak-userinput-outline-color);
    border: var(--oak-userinput-border-focus);
  }
  .oak-internal-popup-input-action--no-underline.validation-failure {
    border: var(--oak-userinput-border-error);
  }
  .oak-internal-popup-input-action--no-underline.validation-failure:focus {
    box-shadow: var(--oak-userinput-box-shadow-error-focus);
    outline-style: var(--oak-userinput-outline-style);
    outline-width: var(--oak-userinput-outline-width);
    outline-offset: var(--oak-userinput-outline-offset);
    outline-color: var(--oak-userinput-outline-color);
    border: var(--oak-userinput-border-error-focus);
  }

  .oak-internal-popup-input-action--underline:focus {
    border-color: var(--oak-userinput-underline-color-focus);
  }
  .oak-internal-popup-input-action--underline.validation-failure {
    border-color: var(--oak-userinput-underline-color-error);
  }
  .oak-internal-popup-input-action--underline.validation-failure:focus {
    border-color: var(--oak-userinput-underline-color-error-focus);
  }
`;

import {css} from 'lit-element';

export const oakInputFillStyles = css`
  input {
    background-color: inherit;
    color: inherit;
  }
  .oak-input--fill-color-none {
    background-color: var(--color-global-dark);
    color: var(--color-global-dark-i);
  }
  .oak-input--fill-color-global {
    background-color: var(--color-global-dark);
    color: var(--color-global-dark-i);
  }
  .oak-input--fill-color-container {
    background-color: var(--color-container-dark);
    color: var(--color-container-dark-i);
  }
  .oak-input--fill-color-surface {
    background-color: var(--color-surface-dark);
    color: var(--color-surface-dark-i);
  }
  .oak-input--fill-color-float {
    background-color: var(--color-float-dark);
    color: var(--color-float-dark-i);
  }
  .oak-input--fill-color-default {
    background-color: var(--color-default-dark);
    color: var(--color-default-dark-i);
  }
  .oak-input--fill-color-info {
    background-color: var(--color-info-dark);
    color: var(--color-info-dark-i);
  }
  .oak-input--fill-color-invert {
    background-color: var(--color-invert-dark);
    color: var(--color-invert-dark-i);
  }
  .oak-input--fill-color-primary {
    background-color: var(--color-primary-transparent);
  }
  .oak-input--fill-color-secondary {
    background-color: var(--color-secondary-transparent);
  }
  .oak-input--fill-color-tertiary {
    background-color: var(--color-tertiary-transparent);
  }
  .oak-input--fill-color-danger {
    background-color: var(--color-danger-transparent);
  }
  .oak-input--fill-color-warning {
    background-color: var(--color-warning-transparent);
  }
  .oak-input--fill-color-success {
    background-color: var(--color-success-transparent);
  }

  .oak-input--fill-color-none:hover,
  .oak-input--fill-color-none:focus {
    background-color: var(--color-global-darker);
    color: var(--color-global-darker-i);
  }
  .oak-input--fill-color-global:hover,
  .oak-input--fill-color-global:focus {
    background-color: var(--color-global-darker);
    color: var(--color-global-darker-i);
  }
  .oak-input--fill-color-container:hover,
  .oak-input--fill-color-container:focus {
    background-color: var(--color-container-darker);
    color: var(--color-container-darker-i);
  }
  .oak-input--fill-color-surface:hover,
  .oak-input--fill-color-surface:focus {
    background-color: var(--color-surface-darker);
    color: var(--color-surface-darker-i);
  }
  .oak-input--fill-color-float:hover,
  .oak-input--fill-color-float:focus {
    background-color: var(--color-float-darker);
    color: var(--color-float-darker-i);
  }
  .oak-input--fill-color-default:hover,
  .oak-input--fill-color-default:focus {
    background-color: var(--color-default-darker);
    color: var(--color-default-darker-i);
  }
  .oak-input--fill-color-info:hover,
  .oak-input--fill-color-info:focus {
    background-color: var(--color-info-darker);
    color: var(--color-info-darker-i);
  }
  .oak-input--fill-color-invert:hover,
  .oak-input--fill-color-invert:focus {
    background-color: var(--color-invert-darker);
    color: var(--color-invert-darker-i);
  }
  .oak-input--fill-color-primary:hover,
  .oak-input--fill-color-primary:focus {
    background-color: var(--color-primary-semitransparent1);
  }
  .oak-input--fill-color-secondary:hover,
  .oak-input--fill-color-secondary:focus {
    background-color: var(--color-secondary-semitransparent1);
  }
  .oak-input--fill-color-tertiary:hover,
  .oak-input--fill-color-tertiary:focus {
    background-color: var(--color-tertiary-semitransparent1);
  }
  .oak-input--fill-color-danger:hover,
  .oak-input--fill-color-danger:focus {
    background-color: var(--color-danger-semitransparent1);
  }
  .oak-input--fill-color-warning:hover,
  .oak-input--fill-color-warning:focus {
    background-color: var(--color-warning-semitransparent1);
  }
  .oak-input--fill-color-success:hover,
  .oak-input--fill-color-success:focus {
    background-color: var(--color-success-semitransparent1);
  }

  .oak-input--fill.validation-failure {
    background-color: var(--color-danger-transparent);
  }
  .oak-input--fill.validation-failure:focus {
    background-color: var(--color-danger-semitransparent1);
  }
`;

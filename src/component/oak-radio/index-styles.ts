import {css} from 'lit-element';

export const oakRadioStyles = css`
  .oak-radio {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    flex: 0 0 auto;
    overflow: visible;
    text-align: center;
    font-size: 1.5rem;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    border: 0;
    /* margin: 0; */
    outline: 0;
    /* padding: 0; */
    position: relative;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    white-space: nowrap;
    justify-content: center;
    text-decoration: none;
  }

  .oak-radio__label-container {
    user-select: auto;
    -webkit-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    font-size: 14px;
    white-space: nowrap;
  }

  .oak-radio__input-container {
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  .oak-radio__input {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
  }

  .oak-radio__radio-svg--size-xsmall {
    width: 16px;
  }
  .oak-radio__radio-svg--size-small {
    width: 20px;
  }
  .oak-radio__radio-svg--size-medium {
    width: 24px;
  }
  .oak-radio__radio-svg--size-large {
    width: 28px;
  }

  .oak-radio__radio-svg--dot {
    position: absolute;
  }
  .oak-radio__radio-svg {
    /* border: 1px solid transparent; */
    border-radius: 50px;
  }
  /* .oak-radio__input:focus + .oak-radio__radio-svg {
    border: 1px solid var(--formelement-outline-border-color);
  } */

  .oak-radio__radio-svg--notchecked {
    fill: var(--color-1);
  }

  .oak-radio__radio-svg--checked.oak-radio__radio-svg--color-primary {
    fill: var(--color-primary);
  }
  .oak-radio__radio-svg--checked.oak-radio__radio-svg--color-secondary {
    fill: var(--color-secondary);
  }
  .oak-radio__radio-svg--checked.oak-radio__radio-svg--color-tertiary {
    fill: var(--color-tertiary);
  }
  .oak-radio__radio-svg--checked.oak-radio__radio-svg--color-default {
    fill: var(--color-default);
  }
  .oak-radio__radio-svg--checked.oak-radio__radio-svg--color-info {
    fill: var(--color-info);
  }
  .oak-radio__radio-svg--checked.oak-radio__radio-svg--color-danger {
    fill: var(--color-danger);
  }
  .oak-radio__radio-svg--checked.oak-radio__radio-svg--color-warning {
    fill: var(--color-warning);
  }
  .oak-radio__radio-svg--checked.oak-radio__radio-svg--color-success {
    fill: var(--color-success);
  }
  .oak-radio__radio-svg--checked.oak-radio__radio-svg--color-invert {
    fill: var(--color-invert);
  }

  .oak-radio__input:focus + .oak-radio__radio-svg--color-primary {
    background-color: var(--color-primary-semitransparent1);
  }
  .oak-radio__input:focus + .oak-radio__radio-svg--color-secondary {
    background-color: var(--color-secondary-semitransparent1);
  }
  .oak-radio__input:focus + .oak-radio__radio-svg--color-tertiary {
    background-color: var(--color-tertiary-semitransparent1);
  }
  .oak-radio__input:focus + .oak-radio__radio-svg--color-default {
    background-color: var(--color-default-semitransparent1);
  }
  .oak-radio__input:focus + .oak-radio__radio-svg--color-info {
    background-color: var(--color-info-semitransparent1);
  }
  .oak-radio__input:focus + .oak-radio__radio-svg--color-invert {
    background-color: var(--color-invert-semitransparent1);
  }
  .oak-radio__input:focus + .oak-radio__radio-svg--color-danger {
    background-color: var(--color-danger-semitransparent1);
  }
  .oak-radio__input:focus + .oak-radio__radio-svg--color-warning {
    background-color: var(--color-warning-semitransparent1);
  }
  .oak-radio__input:focus + .oak-radio__radio-svg--color-success {
    background-color: var(--color-success-semitransparent1);
  }
`;

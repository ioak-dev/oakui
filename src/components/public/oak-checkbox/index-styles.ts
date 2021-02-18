import {css} from 'lit-element';

export const oakCheckboxStyles = css`
  .oak-checkbox {
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
    margin: 0;
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

  .oak-checkbox__label-container {
    user-select: auto;
    -webkit-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    font-size: 14px;
    white-space: nowrap;
  }

  .oak-checkbox__input-container {
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
  }

  .oak-checkbox__input {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
  }

  .oak-checkbox__checkbox-svg {
    width: 24px;
    height: auto;
  }

  .oak-checkbox__checkbox-svg {
    /* border: 1px solid transparent; */
    border-radius: 2px;
  }
  /* .oak-checkbox__input:focus + .oak-checkbox__checkbox-svg {
    border: 1px solid var(--formelement-outline-border-color);
  } */

  .oak-checkbox__checkbox-svg--notchecked {
    fill: var(--color-1);
  }

  .oak-checkbox__checkbox-svg--checked.oak-checkbox__checkbox-svg--color-primary {
    fill: var(--color-primary);
  }
  .oak-checkbox__checkbox-svg--checked.oak-checkbox__checkbox-svg--color-secondary {
    fill: var(--color-secondary);
  }
  .oak-checkbox__checkbox-svg--checked.oak-checkbox__checkbox-svg--color-tertiary {
    fill: var(--color-tertiary);
  }
  .oak-checkbox__checkbox-svg--checked.oak-checkbox__checkbox-svg--color-default {
    fill: var(--color-default);
  }
  .oak-checkbox__checkbox-svg--checked.oak-checkbox__checkbox-svg--color-info {
    fill: var(--color-info);
  }
  .oak-checkbox__checkbox-svg--checked.oak-checkbox__checkbox-svg--color-danger {
    fill: var(--color-danger);
  }
  .oak-checkbox__checkbox-svg--checked.oak-checkbox__checkbox-svg--color-warning {
    fill: var(--color-warning);
  }
  .oak-checkbox__checkbox-svg--checked.oak-checkbox__checkbox-svg--color-success {
    fill: var(--color-success);
  }
  .oak-checkbox__checkbox-svg--checked.oak-checkbox__checkbox-svg--color-invert {
    fill: var(--color-invert);
  }

  .oak-checkbox__input:focus + .oak-checkbox__checkbox-svg--color-primary {
    background-color: var(--color-primary-semitransparent1);
  }
  .oak-checkbox__input:focus + .oak-checkbox__checkbox-svg--color-secondary {
    background-color: var(--color-secondary-semitransparent1);
  }
  .oak-checkbox__input:focus + .oak-checkbox__checkbox-svg--color-tertiary {
    background-color: var(--color-tertiary-semitransparent1);
  }
  .oak-checkbox__input:focus + .oak-checkbox__checkbox-svg--color-default {
    background-color: var(--color-default-semitransparent1);
  }
  .oak-checkbox__input:focus + .oak-checkbox__checkbox-svg--color-info {
    background-color: var(--color-info-semitransparent1);
  }
  .oak-checkbox__input:focus + .oak-checkbox__checkbox-svg--color-invert {
    background-color: var(--color-invert-semitransparent1);
  }
  .oak-checkbox__input:focus + .oak-checkbox__checkbox-svg--color-danger {
    background-color: var(--color-danger-semitransparent1);
  }
  .oak-checkbox__input:focus + .oak-checkbox__checkbox-svg--color-warning {
    background-color: var(--color-warning-semitransparent1);
  }
  .oak-checkbox__input:focus + .oak-checkbox__checkbox-svg--color-success {
    background-color: var(--color-success-semitransparent1);
  }
`;

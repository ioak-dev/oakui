import {css} from 'lit-element';

export const oakButtonStyles = css`
  button {
    display: grid;
    align-items: center;
    align-content: center;
    --btn-text-color: #fcfcfc;
    --btn-text-color-dark: #000;
    user-select: none;
    border-radius: var(--formelement-border-radius);
    white-space: nowrap;
    font-size: 12.5px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    border: 2px solid var(--color-bg);
    background: none;
    color: var(--btn-text-color);
    cursor: pointer;
    transition: 0.4s cubic-bezier(0.5, 1.6, 0.4, 0.7);
    position: relative;
    overflow: hidden;
    z-index: 0;
  }
  button.shape-sharp {
    border-radius: 0;
  }
  button.shape-rectangle {
    border-radius: var(--formelement-border-radius);
  }
  button.shape-rounded {
    border-radius: 100px;
  }
  button.shape-leaf {
    border-radius: 7px 0;
  }
  button.size-xsmall {
    font-size: 10.5px;
    padding: 0 10px;
    height: 25px;
  }
  button.size-xsmall .button-label-container .svg-inline--fa {
    font-size: 10px;
  }
  button.size-xsmall .button-label-container .MuiSvgIcon-root {
    font-size: 14px;
  }
  button.size-small {
    font-size: 12.25px;
    padding: 4px 15px;
    height: 35px;
  }
  button.size-small .button-label-container .svg-inline--fa {
    font-size: 12px;
  }
  button.size-small .button-label-container .MuiSvgIcon-root {
    font-size: 16px;
  }
  button.size-medium {
    font-size: 12.25px;
    padding: 5px 20px;
    height: 40px;
  }
  button.size-medium .button-label-container .svg-inline--fa {
    font-size: 14px;
  }
  button.size-medium .button-label-container .MuiSvgIcon-root {
    font-size: 18px;
  }
  button.size-large {
    font-size: 15.75px;
    padding: 15px 30px;
    height: 55px;
  }
  button.size-large .button-label-container .svg-inline--fa {
    font-size: 14px;
  }
  button.size-large .button-label-container .MuiSvgIcon-root {
    font-size: 18px;
  }
  button .button-label-container {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    column-gap: 10px;
  }
  button.default {
    --color-bg: var(--color-default-1);
    --color-bg-hover: var(--color-default-2);
    --btn-text-color: var(--color-default-fg);
    --btn-text-color-dark: var(--color-default-fg-dark);
  }
  button.primary {
    --color-bg: var(--color-primary-1);
    --color-bg-hover: var(--color-primary-2);
  }
  button.secondary {
    --color-bg: var(--color-secondary-1);
    --color-bg-hover: var(--color-secondary-2);
  }
  button.tertiary {
    --color-bg: var(--color-tertiary-1);
    --color-bg-hover: var(--color-tertiary-2);
  }
  button.danger {
    --color-bg: var(--color-danger-1);
    --color-bg-hover: var(--color-danger-2);
  }
  button.warning {
    --color-bg: var(--color-warning-1);
    --color-bg-hover: var(--color-warning-2);
  }
  button.success {
    --color-bg: var(--color-success-1);
    --color-bg-hover: var(--color-success-2);
  }
  button.info {
    --color-bg: var(--color-info-1);
    --color-bg-hover: var(--color-info-2);
    --btn-text-color: var(--color-info-fg);
    --btn-text-color-dark: var(--color-info-fg-dark);
  }
  button.small {
    padding: 0 8px;
  }
  button.align-left {
    margin-right: 5px;
  }
  button.align-right {
    margin-left: 5px;
  }
  button.align-center {
    margin-left: 5px;
    margin-right: 5px;
  }
  button.regular {
    background-color: var(--color-bg);
  }
  button.regular:hover {
    background-color: var(--color-bg-hover);
    border: 2px solid var(--color-bg-hover);
  }
  button.drama {
    background-color: var(--color-default-1);
    border: 2px solid var(--color-default-1);
  }
  button.drama.dark {
    color: var(--btn-text-color-dark);
  }
  button.drama.dark:hover {
    color: var(--btn-text-color);
  }
  button.drama.dark.default {
    color: var(--btn-text-color);
  }
  button.drama.light.info {
    color: var(--btn-text-color-dark);
  }
  button.drama.light.info {
    color: var(--btn-text-color-dark);
  }
  button.drama.light.info:hover {
    color: var(--btn-text-color);
  }
  button.drama:hover {
    background-color: var(--color-bg-hover);
    border: 2px solid var(--color-bg-hover);
  }
  button.appear:hover {
    background-color: var(--color-bg);
  }
  button.appear.default {
    color: var(--btn-text-color-dark);
  }
  button.appear.default:hover {
    color: var(--btn-text-color);
  }
  button.appear.light {
    color: var(--btn-text-color-dark);
  }
  button.appear.light:hover {
    color: var(--btn-text-color);
  }
  button.appear.light.info {
    color: var(--btn-text-color);
  }
  button.appear.light.info:hover {
    color: var(--btn-text-color);
  }
  button.disappear {
    background-color: var(--color-bg);
  }
  button.disappear:hover {
    background-color: transparent;
  }
  button.disappear.default {
    color: var(--btn-text-color);
  }
  button.disappear.default:hover {
    color: var(--btn-text-color-dark);
  }
  button.disappear.light:hover {
    color: var(--btn-text-color-dark);
  }
  button.disappear.light.info {
    color: var(--btn-text-color);
  }
  button.disappear.light.info:hover {
    color: var(--btn-text-color);
  }
  button.block {
    border: 2px solid transparent;
  }
  button.block:hover {
    background-color: var(--color-bg);
  }
  button.block.default {
    color: var(--btn-text-color-dark);
  }
  button.block.default:hover {
    color: var(--btn-text-color);
  }
  button.block.light {
    color: var(--btn-text-color-dark);
  }
  button.block.light:hover {
    color: var(--btn-text-color);
  }
  button.block.light.info {
    color: var(--btn-text-color);
  }
  button.block.light.info:hover {
    color: var(--btn-text-color);
  }
  button.outline {
    border: 2px solid transparent;
  }
  button.outline:hover {
    border: 2px solid var(--color-bg);
  }
  button.outline.default {
    color: var(--btn-text-color-dark);
  }
  button.outline.default:hover {
    color: var(--btn-text-color-dark);
  }
  button.outline.light {
    color: var(--btn-text-color-dark);
  }
  button.outline.light.info {
    color: var(--btn-text-color);
  }
  button.outline.light.info:hover {
    color: var(--btn-text-color);
  }
  button.disabled {
    opacity: 0.5;
  }
  button.disabled.default {
    color: var(--btn-text-color-dark);
  }
  button.disabled.default:hover {
    color: var(--btn-text-color-dark);
  }
  button.disabled.light {
    color: var(--btn-text-color-dark);
  }
  button.disabled.light.info {
    color: var(--btn-text-color);
  }
  button.disabled.light.info:hover {
    color: var(--btn-text-color);
  }
  button.icon {
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    padding: 0;
    border-radius: 50%;
  }
  button.icon.size-xsmall {
    height: 25px;
    width: 25px;
  }
  button.icon.size-small {
    height: 35px;
    width: 35px;
  }
  button.icon.size-medium {
    height: 40px;
    width: 40px;
  }
  button.icon.size-large {
    height: 55px;
    width: 55px;
  }
  button:focus {
    outline: none;
    box-shadow: var(--formelement-outline-box-shadow);
  }
`;

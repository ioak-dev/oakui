import {css} from 'lit-element';

export const oakInternalPopupInputActionStyles = css`
  .oak-internal-popup-input-action {
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    border: 1px solid var(--global-border-color);
    background-color: var(--formelement-color-bg);
    padding: 0 5px;
    color: var(--formelement-color-fg);
    white-space: nowrap;
  }
  .oak-internal-popup-input-action:focus {
    outline: none;
    box-shadow: var(--formelement-outline-box-shadow);
    border-color: var(--formelement-outline-border-color);
    background-color: var(--formelement-color-bg-active);
  }
`;

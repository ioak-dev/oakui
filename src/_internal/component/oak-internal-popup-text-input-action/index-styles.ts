import {css} from 'lit-element';

export const oakInternalPopupTextInputActionStyles = css`
  .oak-internal-popup-text-input-action__button {
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    border: 1px solid var(--global-border-color);
    padding: 0 5px;
    color: var(--formelement-color-fg);
    white-space: nowrap;
  }
  .oak-internal-popup-text-input-action__button:focus {
    outline: none;
    box-shadow: var(--formelement-outline-box-shadow);
    border-color: var(--formelement-outline-border-color);
  }
  .oak-internal-popup-text-input-action__down-arrow svg {
    width: 1em;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  .oak-internal-popup-text-input-action__down-arrow svg path {
    fill: var(--formelement-color-fg);
  }
`;

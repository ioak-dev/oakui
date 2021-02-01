import {css} from 'lit-element';

export const oakInternalPopupStyles = css`
  .oak-internal-popup {
    position: relative;
  }
  .oak-internal-popup
    .oak-internal-popup--popup
    .oak-internal-popup--popup-container {
    font-size: 14px;
    border-radius: 4px;
    // padding: 6px 0;
    background-color: var(--formelement-color-bg-active);
    box-shadow: var(--oak-bs-elevation10);
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    position: fixed;
    width: auto;
    visibility: hidden;
    opacity: 0;
    border: 1px solid var(--global-border-color);
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      visibility 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .oak-internal-popup
    .oak-internal-popup--popup
    .oak-internal-popup--popup-container.activated {
    visibility: visible;
    opacity: 1;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      visibility 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

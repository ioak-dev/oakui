import {css} from 'lit-element';

export const oakSelectModernStyles = css`
  .oak-select-modern {
    position: relative;
  }
  .oak-select-modern .oak-select-modern--value {
    width: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    border: 1px solid var(--global-border-color);
    border-radius: var(--formelement-border-radius);
    background-color: var(--formelement-color-bg);
    padding: 0 5px;
    min-height: var(--formelement-height);
    color: var(--formelement-color-fg);
    white-space: nowrap;
  }
  .oak-select-modern .oak-select-modern--value:focus {
    outline: none;
    box-shadow: var(--formelement-outline-box-shadow);
    border-color: var(--formelement-outline-border-color);
    background-color: var(--formelement-color-bg-active);
  }
  .oak-select-modern .oak-select-modern--results {
    opacity: 0;
    transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      height 1s cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      width 1s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .oak-select-modern .oak-select-modern--results.activated {
    opacity: 1;
    transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      height 1s cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      width 1s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .oak-select-modern .oak-select-modern--results ul {
    font-size: 14px;
    border-radius: 4px;
    list-style: none;
    margin: 0;
    padding: 6px 0;
    background-color: var(--formelement-color-bg-active);
    box-shadow: var(--oak-bs-elevation10);
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    position: fixed;
    width: auto;
  }
  .oak-select-modern .oak-select-modern--results ul li {
    padding: 8px 5px;
    background-color: var(--formelement-color-bg-active);
    cursor: pointer;
  }
  .oak-select-modern .oak-select-modern--results ul li:hover,
  .oak-select-modern .oak-select-modern--results ul li.option-active {
    background-color: var(--color-primary-1);
    color: #fff;
  }
`;

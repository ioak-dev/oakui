import {css} from 'lit-element';

export const oakSelectModernStyles = css`
  .oak-select-modern {
    position: relative;
  }
  .oak-select-modern .oak-select-modern--search-filter {
    padding: 8px;
    border-bottom: 1px solid var(--global-border-color);
  }
  .oak-select-modern .oak-select-modern--search-filter input {
    width: 100%;
    font-size: 14px;
    border: 1px solid var(--global-border-color);
    background-color: var(--formelement-color-bg);
    color: var(--formelement-color-fg);
    box-sizing: border-box;
    padding: 0 5px;
    min-height: 30px;
    border-radius: var(--formelement-border-radius);
    outline: none;
  }
  .oak-select-modern .oak-select-modern--search-filter input:focus {
    box-shadow: var(--formelement-outline-box-shadow);
    border-color: var(--formelement-outline-border-color);
    // background-color: var(--formelement-color-bg-active);
    // color: var(--formelement-color-fg-active);
  }

  .oak-select-modern .oak-select-modern--value-container {
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
  .oak-select-modern .oak-select-modern--value-container:focus {
    outline: none;
    box-shadow: var(--formelement-outline-box-shadow);
    border-color: var(--formelement-outline-border-color);
    background-color: var(--formelement-color-bg-active);
  }
  .oak-select-modern
    .oak-select-modern--popup
    .oak-select-modern--popup-container {
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
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    position: fixed;
    width: auto;
    visibility: hidden;
    opacity: 0;
    border: 1px solid var(--global-border-color);
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      visibility 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .oak-select-modern
    .oak-select-modern--popup
    .oak-select-modern--popup-container.activated {
    visibility: visible;
    opacity: 1;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      visibility 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .oak-select-modern
    .oak-select-modern--popup
    .oak-select-modern--popup-container
    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    // visibility: hidden;
    // opacity: 0;
  }

  .oak-select-modern
    .oak-select-modern--popup
    .oak-select-modern--popup-container
    ul.activated {
    // visibility: visible;
    // opacity: 1;
  }
  .oak-select-modern
    .oak-select-modern--popup
    .oak-select-modern--popup-container
    ul
    li {
    padding: 7px 16px;
    background-color: var(--formelement-color-bg-active);
    border-bottom: 1px solid var(--global-border-color);
    cursor: pointer;
  }
  .oak-select-modern
    .oak-select-modern--popup
    .oak-select-modern--popup-container
    ul
    li:hover,
  .oak-select-modern
    .oak-select-modern--popup
    .oak-select-modern--popup-container
    ul
    li.option-active {
    background-color: var(--color-primary-1);
    color: #fff;
  }
`;

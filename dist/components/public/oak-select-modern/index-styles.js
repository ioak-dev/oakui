import { css } from 'lit-element';
export const oakSelectModernStyles = css `
  .oak-select-modern {
    position: relative;
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
    .oak-select-modern--results
    .oak-select-modern--results-container {
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
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      visibility 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .oak-select-modern
    .oak-select-modern--results
    .oak-select-modern--results-container.activated {
    visibility: visible;
    opacity: 1;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      visibility 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .oak-select-modern
    .oak-select-modern--results
    .oak-select-modern--results-container
    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    // visibility: hidden;
    // opacity: 0;
  }

  .oak-select-modern
    .oak-select-modern--results
    .oak-select-modern--results-container
    ul.activated {
    // visibility: visible;
    // opacity: 1;
  }
  .oak-select-modern
    .oak-select-modern--results
    .oak-select-modern--results-container
    ul
    li {
    padding: 8px 5px;
    background-color: var(--formelement-color-bg-active);
    cursor: pointer;
  }
  .oak-select-modern
    .oak-select-modern--results
    .oak-select-modern--results-container
    ul
    li:hover,
  .oak-select-modern
    .oak-select-modern--results
    .oak-select-modern--results-container
    ul
    li.option-active {
    background-color: var(--color-primary-1);
    color: #fff;
  }
`;
//# sourceMappingURL=index-styles.js.map
import { css } from 'lit-element';
export const oakSelectModernStyles = css `
  .oak-select-modern--popup .oak-select-modern--search-filter {
    padding: 8px;
    border-bottom: 1px solid var(--global-border-color);
  }
  .oak-select-modern--popup .oak-select-modern--search-filter input {
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
  .oak-select-modern--popup .oak-select-modern--search-filter input:focus {
    box-shadow: var(--formelement-outline-box-shadow);
    border-color: var(--formelement-outline-border-color);
    // background-color: var(--formelement-color-bg-active);
    // color: var(--formelement-color-fg-active);
  }

  .oak-select-modern--popup ul {
    list-style: none;
    margin: 0;
    padding: 0;
    // visibility: hidden;
    // opacity: 0;

    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .oak-select-modern--popup ul.activated {
    // visibility: visible;
    // opacity: 1;
  }

  .oak-select-modern--popup ul li {
    padding: 7px 16px;
    background-color: var(--formelement-color-bg-active);
    color: var(--formelement-color-fg-active);
    cursor: pointer;
  }

  .oak-select-modern--popup ul li:not(:last-child) {
    border-bottom: 1px solid var(--global-border-color);
  }
  .oak-select-modern--popup ul li:hover,
  .oak-select-modern--popup ul li.option-active {
    background-color: var(--formelement-color-bg-highlight);
    color: var(--formelement-color-fg-highlight);
  }
`;
//# sourceMappingURL=index-styles.js.map
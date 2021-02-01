import { css } from 'lit-element';
export const oakSelectModernStyles = css `
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

  .oak-select-modern ul {
    list-style: none;
    margin: 0;
    padding: 0;
    // visibility: hidden;
    // opacity: 0;

    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .oak-select-modern ul.activated {
    // visibility: visible;
    // opacity: 1;
  }

  .oak-select-modern ul li {
    padding: 7px 16px;
    background-color: var(--formelement-color-bg-active);
    cursor: pointer;
  }

  .oak-select-modern ul li:not(:last-child) {
    border-bottom: 1px solid var(--global-border-color);
  }
  .oak-select-modern ul li:hover,
  .oak-select-modern ul li.option-active {
    background-color: var(--color-primary-1);
    color: #fff;
  }
`;
//# sourceMappingURL=index-styles.js.map
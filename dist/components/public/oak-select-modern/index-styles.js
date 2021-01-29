import { css } from 'lit-element';
export const oakSelectModernStyles = css `
  .oak-select-modern {
    position: relative;
  }
  .oak-select-modern .oak-select-modern--results ul {
    font-size: 14px;
    border-radius: 4px;
    list-style: none;
    margin: 0;
    padding: 6px 0;
    background-color: var(--formelement-color-bg);
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
    background-color: var(--formelement-color-bg);
    cursor: pointer;
  }
  .oak-select-modern .oak-select-modern--results ul li:hover,
  .oak-select-modern .oak-select-modern--results ul li.option-active {
    background-color: var(--color-primary-1);
    color: #fff;
  }
`;
//# sourceMappingURL=index-styles.js.map
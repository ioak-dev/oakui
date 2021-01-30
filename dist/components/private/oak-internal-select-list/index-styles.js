import { css } from 'lit-element';
export const oakInternalSelectListStyles = css `
  ul {
    font-size: 14px;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  ul li {
    padding: 8px 5px;
    background-color: var(--formelement-color-bg-active);
    cursor: pointer;
  }
  ul li:hover,
  ul li.option-active {
    background-color: var(--color-primary-1);
    color: #fff;
  }
`;
//# sourceMappingURL=index-styles.js.map
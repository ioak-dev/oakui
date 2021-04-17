import {css} from 'lit-element';

export const oakMenuItemStyles = css`
  .oak-menu-item__container {
    /* display: contents; */
    padding: 10px 16px;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: flex-start;
    row-gap: 4px;
  }
`;

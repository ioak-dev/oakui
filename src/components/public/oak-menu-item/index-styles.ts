import {css} from 'lit-element';

export const oakMenuItemStyles = css`
  .oak-menu-item {
    padding: 8px 16px;
    line-height: 1.5;
    font-size: 14px;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    border: none;
    color: var(--color-i1);
    width: 100%;
    text-align: left;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .oak-menu-item:hover,
  .oak-menu-item:focus {
    outline: none;
    color: var(--color-primary-i);
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

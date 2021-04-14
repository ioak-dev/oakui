import {css} from 'lit-element';

export const oakNavGroupStyles = css`
  .oak-nav-group__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: var(--color-3);
    cursor: pointer;
  }
  .oak-nav-group__header svg {
    font-size: 0.8em;
    height: 12px;
    transition: transform 250ms ease-in-out;
  }
  .oak-nav-group__header:hover {
    color: var(--color-4);
  }
  .oak-nav-group__header--active {
    color: var(--color-primary);
  }
  .oak-nav-group__header--active svg {
    transform: rotate(90deg);
  }
  .oak-nav-group__header--level-1 {
    padding: var(--oak-nav-padding-level-1);
  }
  .oak-nav-group__header--level-2 {
    padding: var(--oak-nav-padding-level-2);
  }
  .oak-nav-group__header--level-3 {
    padding: var(--oak-nav-padding-level-3);
  }
`;

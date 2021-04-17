import {css} from 'lit-element';

export const oakNavGroupStyles = css`
  .oak-nav-group__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }
  .oak-nav-group__header svg {
    font-size: 0.8em;
    height: 12px;
    transition: transform 250ms ease-in-out;
  }
  .oak-nav-group__header--active svg {
    transform: rotate(90deg);
  }

  .oak-nav-group__header--level-1 {
    padding: var(--oak-nav-group-level-1-padding);
    color: var(--oak-nav-group-level-1-fg);
    background-color: var(--oak-nav-group-level-1-bg);
    font-size: var(--oak-nav-group-level-1-font-size);
    font-weight: var(--oak-nav-group-level-1-font-weight);
  }
  .oak-nav-group__header--level-1:hover {
    color: var(--oak-nav-group-level-1-hover-fg);
    background-color: var(--oak-nav-group-level-1-hover-bg);
    font-weight: var(--oak-nav-group-level-1-hover-font-weight);
  }
  .oak-nav-group__header--level-1.oak-nav-group__header--active {
    color: var(--oak-nav-group-level-1-active-fg);
    background-color: var(--oak-nav-group-level-1-active-bg);
    font-weight: var(--oak-nav-group-level-1-active-font-weight);
  }

  .oak-nav-group__header--level-2 {
    padding: var(--oak-nav-group-level-2-padding);
    color: var(--oak-nav-group-level-2-fg);
    background-color: var(--oak-nav-group-level-2-bg);
    font-size: var(--oak-nav-group-level-2-font-size);
    font-weight: var(--oak-nav-group-level-2-font-weight);
  }
  .oak-nav-group__header--level-2:hover {
    color: var(--oak-nav-group-level-2-hover-fg);
    background-color: var(--oak-nav-group-level-2-hover-bg);
    font-weight: var(--oak-nav-group-level-2-hover-font-weight);
  }
  .oak-nav-group__header--level-2.oak-nav-group__header--active {
    color: var(--oak-nav-group-active-fg-level-2);
    background-color: var(--oak-nav-group-level-2-active-bg);
    font-weight: var(--oak-nav-group-level-2-active-font-weight);
  }
`;

import {css} from 'lit-element';

export const oakNavElementStyles = css`
  .oak-nav-element__content {
    width: 100%;
    font-size: 14px;
    cursor: pointer;
  }

  .oak-nav-element__container {
    transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
      font-weight 250ms ease-in-out;
  }
  .oak-nav-element__container--level-1 {
    padding: var(--oak-nav-element-level-1-padding);
    color: var(--oak-nav-element-level-1-fg);
    background-color: var(--oak-nav-element-level-1-bg);
    font-size: var(--oak-nav-element-level-1-font-size);
    font-weight: var(--oak-nav-element-level-1-font-weight);
  }
  .oak-nav-element__container--level-1:hover {
    color: var(--oak-nav-element-level-1-hover-fg);
    background-color: var(--oak-nav-element-level-1-hover-bg);
    font-weight: var(--oak-nav-element-level-1-hover-font-weight);
  }
  .oak-nav-element__container--level-1.oak-nav-element__container--active {
    color: var(--oak-nav-element-level-1-active-fg);
    background-color: var(--oak-nav-element-level-1-active-bg);
    font-weight: var(--oak-nav-element-level-1-active-font-weight);
  }

  .oak-nav-element__container--level-2 {
    padding: var(--oak-nav-element-level-2-padding);
    color: var(--oak-nav-element-level-2-fg);
    background-color: var(--oak-nav-element-level-2-bg);
    font-size: var(--oak-nav-element-level-2-font-size);
    font-weight: var(--oak-nav-element-level-2-font-weight);
  }
  .oak-nav-element__container--level-2:hover {
    color: var(--oak-nav-element-level-2-hover-fg);
    background-color: var(--oak-nav-element-level-2-hover-bg);
    font-weight: var(--oak-nav-element-level-2-hover-font-weight);
  }
  .oak-nav-element__container--level-2.oak-nav-element__container--active {
    color: var(--oak-nav-element-level-2-active-fg);
    background-color: var(--oak-nav-element-level-2-active-bg);
    font-weight: var(--oak-nav-element-level-2-active-font-weight);
  }

  .oak-nav-element__container--level-3 {
    padding: var(--oak-nav-element-level-3-padding);
    color: var(--oak-nav-element-level-3-fg);
    background-color: var(--oak-nav-element-level-3-bg);
    font-size: var(--oak-nav-element-level-3-font-size);
    font-weight: var(--oak-nav-element-level-3-font-weight);
  }
  .oak-nav-element__container--level-3:hover {
    color: var(--oak-nav-element-level-3-hover-fg);
    background-color: var(--oak-nav-element-level-3-hover-bg);
    font-weight: var(--oak-nav-element-level-3-hover-font-weight);
  }
  .oak-nav-element__container--level-3.oak-nav-element__container--active {
    color: var(--oak-nav-element-level-3-active-fg);
    background-color: var(--oak-nav-element-level-3-active-bg);
    font-weight: var(--oak-nav-element-level-3-active-font-weight);
  }
`;

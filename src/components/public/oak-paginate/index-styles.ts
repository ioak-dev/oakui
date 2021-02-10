import {css} from 'lit-element';

export const oakPaginateStyles = css`
  .oak-paginate {
    font-size: 0.8em;
    user-select: none;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }
  .oak-paginate__left {
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
    align-items: center;
  }
  .oak-paginate__right {
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
    align-items: center;
  }
  .oak-paginate__page-nav {
    display: flex;
    align-items: center;
  }
`;

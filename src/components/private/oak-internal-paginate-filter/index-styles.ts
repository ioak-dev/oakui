import {css} from 'lit-element';

export const oakInternalPaginateFilterStyles = css`
  .oak-internal-paginate-filter {
    padding: 0 16px;
    min-height: 54px;
    display: grid;
    align-content: center;
  }
  .oak-internal-paginate-filter__filter-container {
    display: grid;
    // grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 10px;
    justify-content: flex-start;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .oak-internal-paginate-filter__search-form {
    display: grid;
    grid-auto-flow: column;
    column-gap: 6px;
    align-items: center;
    justify-content: flex-start;
  }
`;

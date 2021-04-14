import {css} from 'lit-element';

export const oakInternalSelectModernFillStyles = css`
  .oak-internal-select-modern__search-filter--fill-none {
    border-bottom: 1px solid var(--color-global-darker);
  }
  .oak-internal-select-modern__search-filter--fill-container {
    border-bottom: 1px solid var(--color-container-darker);
  }
  .oak-internal-select-modern__search-filter--fill-surface {
    border-bottom: 1px solid var(--color-surface-darker);
  }
  .oak-internal-select-modern__search-filter--fill-float {
    border-bottom: 1px solid var(--color-float-darker);
  }

  .oak-internal-select-modern__popup--fill-global ul li {
    color: var(--color-global-i);
  }
  .oak-internal-select-modern__popup--fill-container ul li {
    color: var(--color-container-i);
  }
  .oak-internal-select-modern__popup--fill-surface ul li {
    color: var(--color-surface-i);
  }
  .oak-internal-select-modern__popup--fill-float ul li {
    color: var(--color-float-i);
  }

  .oak-internal-select-modern__popup--fill-none ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-global-darker);
  }
  .oak-internal-select-modern__popup--fill-container ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-container-darker);
  }
  .oak-internal-select-modern__popup--fill-surface ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-surface-darker);
  }
  .oak-internal-select-modern__popup--fill-float ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-float-darker);
  }

  .oak-internal-select-modern__popup--fill-none ul li:hover,
  .oak-internal-select-modern__popup--fill-none
    ul
    li.oak-internal-select-modern__li--active {
    background-color: var(--color-global-darker);
  }

  .oak-internal-select-modern__popup--fill-container ul li:hover,
  .oak-internal-select-modern__popup--fill-container
    ul
    li.oak-internal-select-modern__li--active {
    background-color: var(--color-container-darker);
  }

  .oak-internal-select-modern__popup--fill-surface ul li:hover,
  .oak-internal-select-modern__popup--fill-surface
    ul
    li.oak-internal-select-modern__li--active {
    background-color: var(--color-surface-darker);
  }

  .oak-internal-select-modern__popup--fill-float ul li:hover,
  .oak-internal-select-modern__popup--fill-float
    ul
    li.oak-internal-select-modern__li--active {
    background-color: var(--color-float-darker);
  }
`;

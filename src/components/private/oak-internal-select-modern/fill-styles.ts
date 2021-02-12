import {css} from 'lit-element';

export const oakInternalSelectModernFillStyles = css`
  .oak-internal-select-modern__search-filter--fill-none {
    border-bottom: 1px solid var(--color-global-darker);
    background-color: var(--color-global-light);
  }
  .oak-internal-select-modern__search-filter--fill-container {
    border-bottom: 1px solid var(--color-surface-darker);
    background-color: var(--color-surface-light);
  }
  .oak-internal-select-modern__search-filter--fill-surface {
    border-bottom: 1px solid var(--color-surface-darker);
    background-color: var(--color-surface-light);
  }
  .oak-internal-select-modern__search-filter--fill-float {
    border-bottom: 1px solid var(--color-float-darker);
    background-color: var(--color-float-light);
  }

  .oak-internal-select-modern__popup--fill-none ul li {
    background-color: var(--color-global-light);
  }
  .oak-internal-select-modern__popup--fill-container ul li {
    background-color: var(--color-container-light);
  }
  .oak-internal-select-modern__popup--fill-surface ul li {
    background-color: var(--color-surface-light);
  }
  .oak-internal-select-modern__popup--fill-float ul li {
    background-color: var(--color-float-light);
  }

  .oak-internal-select-modern__popup--fill-none ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-global-darker);
  }
  .oak-internal-select-modern__popup--fill-container ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-container-darker);
  }
  oak-internal-select-modern__popup--fill-surface ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-surface-darker);
  }
  .oak-internal-select-modern__popup--fill-float ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-float-darker);
  }

  .oak-internal-select-modern__popup--fill-none ul li:hover,
  .oak-internal-select-modern__popup--fill-none ul li.option-active {
    background-color: var(--color-global-darker);
  }

  .oak-internal-select-modern__popup--fill-container ul li:hover,
  .oak-internal-select-modern__popup--fill-container ul li.option-active {
    background-color: var(--color-container-darker);
  }

  .oak-internal-select-modern__popup--fill-surface ul li:hover,
  .oak-internal-select-modern__popup--fill-surface ul li.option-active {
    background-color: var(--color-surface-darker);
  }

  .oak-internal-select-modern__popup--fill-float ul li:hover,
  .oak-internal-select-modern__popup--fill-float ul li.option-active {
    background-color: var(--color-float-darker);
  }
`;

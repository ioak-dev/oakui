import {css} from 'lit-element';

export const oakMenuFillStyles = css`
  .oak-menu__search-filter--fill-none {
    border-bottom: 1px solid var(--color-global-darker);
  }
  .oak-menu__search-filter--fill-container {
    border-bottom: 1px solid var(--color-container-darker);
  }
  .oak-menu__search-filter--fill-surface {
    border-bottom: 1px solid var(--color-surface-darker);
  }
  .oak-menu__search-filter--fill-float {
    border-bottom: 1px solid var(--color-float-darker);
  }

  .oak-menu__popup--fill-none ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-global-darker);
  }
  .oak-menu__popup--fill-container ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-container-darker);
  }
  .oak-menu__popup--fill-surface ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-surface-darker);
  }
  .oak-menu__popup--fill-float ul li:not(:last-child) {
    border-bottom: 1px solid var(--color-float-darker);
  }

  .oak-menu__popup--fill-none ul li:hover,
  .oak-menu__popup--fill-none ul li.option-active {
    background-color: var(--color-global-darker);
  }

  .oak-menu__popup--fill-container ul li:hover,
  .oak-menu__popup--fill-container ul li.option-active {
    background-color: var(--color-container-darker);
  }

  .oak-menu__popup--fill-surface ul li:hover,
  .oak-menu__popup--fill-surface ul li.option-active {
    background-color: var(--color-surface-darker);
  }

  .oak-menu__popup--fill-float ul li:hover,
  .oak-menu__popup--fill-float ul li.option-active {
    background-color: var(--color-float-darker);
  }
`;

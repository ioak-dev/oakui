import {css} from 'lit-element';

export const oakTabVariantUnderlineStyles = css`
  .oak-tab-underline__button {
    border: none;
    border-bottom: 2px solid transparent;
  }
  .oak-tab-underline__button:hover,
  .oak-tab-underline__button:focus {
    border-bottom: 2px solid var(--color-default);
  }

  .oak-tab-underline__button--active.oak-tab-underline__button--color-primary,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-primary:hover,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-primary:focus {
    border-bottom: 2px solid var(--color-primary);
  }

  .oak-tab-underline__button--active.oak-tab-underline__button--color-secondary,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-secondary:hover,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-secondary:focus {
    border-bottom: 2px solid var(--color-secondary);
  }

  .oak-tab-underline__button--active.oak-tab-underline__button--color-tertiary,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-tertiary:hover,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-tertiary:focus {
    border-bottom: 2px solid var(--color-tertiary);
  }

  .oak-tab-underline__button--active.oak-tab-underline__button--color-default,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-default:hover,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-default:focus {
    border-bottom: 2px solid var(--color-default);
  }

  .oak-tab-underline__button--active.oak-tab-underline__button--color-info,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-info:hover,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-info:focus {
    border-bottom: 2px solid var(--color-info);
  }

  .oak-tab-underline__button--active.oak-tab-underline__button--color-danger,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-danger:hover,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-danger:focus {
    border-bottom: 2px solid var(--color-danger);
  }

  .oak-tab-underline__button--active.oak-tab-underline__button--color-warning,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-warning:hover,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-warning:focus {
    border-bottom: 2px solid var(--color-warning);
  }

  .oak-tab-underline__button--active.oak-tab-underline__button--color-success,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-success:hover,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-success:focus {
    border-bottom: 2px solid var(--color-success);
  }

  .oak-tab-underline__button--active.oak-tab-underline__button--color-invert,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-invert:hover,
  .oak-tab-underline__button--active.oak-tab-underline__button--color-invert:focus {
    border-bottom: 2px solid var(--color-invert);
  }
`;

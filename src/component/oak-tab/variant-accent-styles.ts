import {css} from 'lit-element';

export const oakTabVariantAccentStyles = css`
  .oak-tab-accent__button::before {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 50%;
    width: 30px;
    height: 3px;
    border-radius: 6px 6px 0 0;
    transform: translateX(-50%) scale(0);
    transform-origin: 50% 100%;
    will-change: transform;
    transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
  }

  .oak-tab-accent__button--active::before {
    transform: translateX(-50%) scale(1);
    transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
  }

  .oak-tab-accent__button.oak-tab-accent__button--color-primary::before {
    background-color: var(--color-primary);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-primary::before {
    background-color: var(--color-primary);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-primary,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-primary:hover,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-primary:focus {
    color: var(--color-primary);
  }

  .oak-tab-accent__button.oak-tab-accent__button--color-secondary::before {
    background-color: var(--color-secondary);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary::before {
    background-color: var(--color-secondary);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary:hover,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary:focus {
    color: var(--color-secondary);
  }

  .oak-tab-accent__button.oak-tab-accent__button--color-tertiary::before {
    background-color: var(--color-tertiary);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-tertiary::before {
    background-color: var(--color-tertiary);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-tertiary,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-tertiary:hover,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-tertiary:focus {
    background-color: var(--color-secondary);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary::before {
    background-color: var(--color-secondary);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary:hover,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary:focus {
    color: var(--color-secondary);
  }
  ry:focus {
    color: var(--color-tertiary);

    .oak-tab-accent__button.oak-tab-accent__button--color-secondary::before {
      background-color: var(--color-secondary);
    }

    .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary::before {
      background-color: var(--color-secondary);
    }

    .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary,
    .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary:hover,
    .oak-tab-accent__button--active.oak-tab-accent__button--color-secondary:focus {
      color: var(--color-secondary);
    }
  }

  .oak-tab-accent__button.oak-tab-accent__button--color-default::before {
    background-color: var(--color-default);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-default::before {
    background-color: var(--color-default);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-default,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-default:hover,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-default:focus {
    color: var(--color-default);
  }

  .oak-tab-accent__button.oak-tab-accent__button--color-info::before {
    background-color: var(--color-info);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-info::before {
    background-color: var(--color-info);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-info,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-info:hover,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-info:focus {
    color: var(--color-info);
  }

  .oak-tab-accent__button.oak-tab-accent__button--color-danger::before {
    background-color: var(--color-danger);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-danger::before {
    background-color: var(--color-danger);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-danger,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-danger:hover,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-danger:focus {
    color: var(--color-danger);
  }

  .oak-tab-accent__button.oak-tab-accent__button--color-warning::before {
    background-color: var(--color-warning);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-warning::before {
    background-color: var(--color-warning);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-warning,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-warning:hover,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-warning:focus {
    color: var(--color-warning);
  }

  .oak-tab-accent__button.oak-tab-accent__button--color-success::before {
    background-color: var(--color-success);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-success::before {
    background-color: var(--color-success);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-success,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-success:hover,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-success:focus {
    color: var(--color-success);
  }

  .oak-tab-accent__button.oak-tab-accent__button--color-invert::before {
    background-color: var(--color-invert);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-invert::before {
    background-color: var(--color-invert);
  }

  .oak-tab-accent__button--active.oak-tab-accent__button--color-invert,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-invert:hover,
  .oak-tab-accent__button--active.oak-tab-accent__button--color-invert:focus {
    color: var(--color-invert);
  }
`;

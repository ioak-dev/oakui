import { css } from 'lit-element';
export const oakButtonVariantDisabledStyles = css `
  button.disabled {
    background-color: transparent;
    opacity: 0.5;
  }

  button.disabled.primary {
    border: 2px solid var(--color-primary-darker);
  }

  button.disabled.secondary {
    border: 2px solid var(--color-secondary-darker);
  }

  button.disabled.tertiary {
    border: 2px solid var(--color-tertiary-darker);
  }

  button.disabled.default {
    border: 2px solid var(--color-default-darker);
  }

  button.disabled.info {
    border: 2px solid var(--color-info-darker);
  }

  button.disabled.danger {
    border: 2px solid var(--color-danger-darker);
  }

  button.disabled.warning {
    border: 2px solid var(--color-warning-darker);
  }

  button.disabled.success {
    border: 2px solid var(--color-success-darker);
  }
`;
//# sourceMappingURL=variant-disabled-styles.js.map
import { css } from 'lit-element';
export const oakButtonStyles = css `
  button.default {
    --color-bg: var(--color-default);
    --color-bg-hover: var(--color-default-darker);
    --btn-text-color: var(--color-default-fg);
    --btn-text-color-dark: var(--color-default-fg-dark);
  }
  button.primary {
    --color-bg: var(--color-primary);
    --color-bg-hover: var(--color-primary-darker);
  }
  button.secondary {
    --color-bg: var(--color-secondary);
    --color-bg-hover: var(--color-secondary-darker);
  }
  button.tertiary {
    --color-bg: var(--color-tertiary);
    --color-bg-hover: var(--color-tertiary-darker);
  }
  button.danger {
    --color-bg: var(--color-danger);
    --color-bg-hover: var(--color-danger-darker);
  }
  button.warning {
    --color-bg: var(--color-warning);
    --color-bg-hover: var(--color-warning-darker);
  }
  button.success {
    --color-bg: var(--color-success);
    --color-bg-hover: var(--color-success-darker);
  }
  button.info {
    --color-bg: var(--color-info);
    --color-bg-hover: var(--color-info-darker);
    --btn-text-color: var(--color-info-fg);
    --btn-text-color-dark: var(--color-info-fg-dark);
  }
  button.regular {
    background-color: var(--color-bg);
  }
  button.regular:hover {
    background-color: var(--color-bg-hover);
    border: 2px solid var(--color-bg-hover);
  }
  button.drama {
    background-color: var(--color-default);
    border: 2px solid var(--color-default);
  }
  button.drama.dark {
    color: var(--btn-text-color-dark);
  }
  button.drama.dark:hover {
    color: var(--btn-text-color);
  }
  button.drama.dark.default {
    color: var(--btn-text-color);
  }
  button.drama.light.info {
    color: var(--btn-text-color-dark);
  }
  button.drama.light.info {
    color: var(--btn-text-color-dark);
  }
  button.drama.light.info:hover {
    color: var(--btn-text-color);
  }
  button.drama:hover {
    background-color: var(--color-bg-hover);
    border: 2px solid var(--color-bg-hover);
  }
  button.appear:hover {
    background-color: var(--color-bg);
  }
  button.appear.default {
    color: var(--btn-text-color-dark);
  }
  button.appear.default:hover {
    color: var(--btn-text-color);
  }
  button.appear.light {
    color: var(--btn-text-color-dark);
  }
  button.appear.light:hover {
    color: var(--btn-text-color);
  }
  button.appear.light.info {
    color: var(--btn-text-color);
  }
  button.appear.light.info:hover {
    color: var(--btn-text-color);
  }
  button.disappear {
    background-color: var(--color-bg);
  }
  button.disappear:hover {
    background-color: transparent;
  }
  button.disappear.default {
    color: var(--btn-text-color);
  }
  button.disappear.default:hover {
    color: var(--btn-text-color-dark);
  }
  button.disappear.light:hover {
    color: var(--btn-text-color-dark);
  }
  button.disappear.light.info {
    color: var(--btn-text-color);
  }
  button.disappear.light.info:hover {
    color: var(--btn-text-color);
  }
  button.block {
    border: 2px solid transparent;
  }
  button.block:hover {
    background-color: var(--color-bg);
  }
  button.block.default {
    color: var(--btn-text-color-dark);
  }
  button.block.default:hover {
    color: var(--btn-text-color);
  }
  button.block.light {
    color: var(--btn-text-color-dark);
  }
  button.block.light:hover {
    color: var(--btn-text-color);
  }
  button.block.light.info {
    color: var(--btn-text-color);
  }
  button.block.light.info:hover {
    color: var(--btn-text-color);
  }
  button.outline {
    border: 2px solid transparent;
  }
  button.outline:hover {
    border: 2px solid var(--color-bg);
  }
  button.outline.default {
    color: var(--btn-text-color-dark);
  }
  button.outline.default:hover {
    color: var(--btn-text-color-dark);
  }
  button.outline.light {
    color: var(--btn-text-color-dark);
  }
  button.outline.light.info {
    color: var(--btn-text-color);
  }
  button.outline.light.info:hover {
    color: var(--btn-text-color);
  }
  button.disabled {
    opacity: 0.5;
  }
  button.disabled.default {
    color: var(--btn-text-color-dark);
  }
  button.disabled.default:hover {
    color: var(--btn-text-color-dark);
  }
  button.disabled.light {
    color: var(--btn-text-color-dark);
  }
  button.disabled.light.info {
    color: var(--btn-text-color);
  }
  button.disabled.light.info:hover {
    color: var(--btn-text-color);
  }
`;
//# sourceMappingURL=index-styles.js.map
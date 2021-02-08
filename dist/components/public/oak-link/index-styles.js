import { css } from 'lit-element';
export const oakLinkStyles = css `
  a.oak-link {
    text-decoration: none;
  }
  a.oak-link.oak-link-hover:hover,
  a.oak-link.oak-link-always {
    text-decoration: underline;
  }

  button.oak-link {
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background: none;
  }
  button.oak-link.oak-link-hover:hover,
  button.oak-link.oak-link-always {
    text-decoration: underline;
  }
  .oak-link--container {
    display: flex;
  }

  a.oak-link:focus,
  button.oak-link:focus {
    // outline: none;
    // box-shadow: var(--formelement-outline-box-shadow);
    // border: 1px solid var(--formelement-outline-border-color);
    // border-radius: var(--formelement-border-radius);
  }

  button.oak-link,
  a.oak-link {
    display: grid;
    align-items: center;
    align-content: center;
    --btn-text-color: #fcfcfc;
    --btn-text-color-dark: #000;
    user-select: none;
    border-radius: var(--formelement-border-radius);
    white-space: nowrap;
    font-size: 12.5px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    // border: 2px solid var(--color-bg);
    background: none;
    color: var(--color-i1);
    cursor: pointer;
    transition: 0.4s cubic-bezier(0.5, 1.6, 0.4, 0.7);
    position: relative;
    overflow: hidden;
    z-index: 0;
  }
  button.oak-link:focus,
  a.oak-link:focus {
    outline: none;
    box-shadow: var(--formelement-outline-box-shadow);
  }

  button.oak-link.primary,
  a.oak-link.primary {
    color: var(--color-primary);
  }

  button.oak-link.secondary,
  a.oak-link.secondary {
    color: var(--color-secondary);
  }

  button.oak-link.tertiary,
  a.oak-link.tertiary {
    color: var(--color-tertiary);
  }

  button.oak-link.primary-text,
  a.oak-link.primary-text {
    color: var(--color-primary-darker);
  }

  button.oak-link.secondary-text,
  a.oak-link.secondary-text {
    color: var(--color-secondary-darker);
  }

  button.oak-link.tertiary-text,
  a.oak-link.tertiary-text {
    color: var(--color-tertiary-darker);
  }

  button.oak-link.default,
  a.oak-link.default {
    color: var(--color-i1);
  }

  button.oak-link.info,
  a.oak-link.info {
    color: var(--color-i1);
  }

  button.oak-link.danger,
  a.oak-link.danger {
    color: var(--color-danger);
  }

  button.oak-link.warning,
  a.oak-link.warning {
    color: var(--color-warning);
  }

  button.oak-link.success,
  a.oak-link.success {
    color: var(--color-success);
  }

  button.oak-link.danger-text,
  a.oak-link.danger-text {
    color: var(--color-danger-darker);
  }

  button.oak-link.warning-text,
  a.oak-link.warning-text {
    color: var(--color-warning-darker);
  }

  button.oak-link.success-text,
  a.oak-link.success-text {
    color: var(--color-success-darker);
  }

  button.oak-link.oak-link-block,
  a.oak-link.oak-link-block {
    text-decoration: none;
  }

  button.oak-link.oak-link-block:hover,
  button.oak-link.oak-link-block:focus,
  a.oak-link.oak-link-block:hover,
  a.oak-link.oak-link-block:focus {
    text-decoration: none;
  }

  button.oak-link.oak-link-block.primary:hover,
  button.oak-link.oak-link-block.primary:focus,
  a.oak-link.oak-link-block.primary:hover,
  a.oak-link.oak-link-block.primary:focus,
  button.oak-link.oak-link-block.primary-text:hover,
  button.oak-link.oak-link-block.primary-text:focus,
  a.oak-link.oak-link-block.primary-text:hover,
  a.oak-link.oak-link-block.primary-text:focus {
    background-color: var(--color-primary-transparent);
  }

  button.oak-link.oak-link-block.secondary:hover,
  button.oak-link.oak-link-block.secondary:focus,
  a.oak-link.oak-link-block.secondary:hover,
  a.oak-link.oak-link-block.secondary:focus,
  button.oak-link.oak-link-block.secondary-text:hover,
  button.oak-link.oak-link-block.secondary-text:focus,
  a.oak-link.oak-link-block.secondary-text:hover,
  a.oak-link.oak-link-block.secondary-text:focus {
    background-color: var(--color-secondary-transparent);
  }

  button.oak-link.oak-link-block.tertiary:hover,
  button.oak-link.oak-link-block.tertiary:focus,
  a.oak-link.oak-link-block.tertiary:hover,
  a.oak-link.oak-link-block.tertiary:focus,
  button.oak-link.oak-link-block.tertiary-text:hover,
  button.oak-link.oak-link-block.tertiary-text:focus,
  a.oak-link.oak-link-block.tertiary-text:hover,
  a.oak-link.oak-link-block.tertiary-text:focus {
    background-color: var(--color-tertiary-transparent);
  }

  button.oak-link.oak-link-block.default:hover,
  button.oak-link.oak-link-block.default:focus,
  a.oak-link.oak-link-block.default:hover,
  a.oak-link.oak-link-block.default:focus {
    background-color: var(--color-default-transparent);
  }

  button.oak-link.oak-link-block.info:hover,
  button.oak-link.oak-link-block.info:focus,
  a.oak-link.oak-link-block.info:hover,
  a.oak-link.oak-link-block.info:focus {
    background-color: var(--color-info-transparent);
  }

  button.oak-link.oak-link-block.danger:hover,
  button.oak-link.oak-link-block.danger:focus,
  a.oak-link.oak-link-block.danger:hover,
  a.oak-link.oak-link-block.danger:focus,
  button.oak-link.oak-link-block.danger-text:hover,
  button.oak-link.oak-link-block.danger-text:focus,
  a.oak-link.oak-link-block.danger-text:hover,
  a.oak-link.oak-link-block.danger-text:focus {
    background-color: var(--color-danger-transparent);
  }

  button.oak-link.oak-link-block.warning:hover,
  button.oak-link.oak-link-block.warning:focus,
  a.oak-link.oak-link-block.warning:hover,
  a.oak-link.oak-link-block.warning:focus,
  button.oak-link.oak-link-block.warning-text:hover,
  button.oak-link.oak-link-block.warning-text:focus,
  a.oak-link.oak-link-block.warning-text:hover,
  a.oak-link.oak-link-block.warning-text:focus {
    background-color: var(--color-warning-transparent);
  }

  button.oak-link.oak-link-block.success:hover,
  button.oak-link.oak-link-block.success:focus,
  a.oak-link.oak-link-block.success:hover,
  a.oak-link.oak-link-block.success:focus,
  button.oak-link.oak-link-block.success-text:hover,
  button.oak-link.oak-link-block.success-text:focus,
  a.oak-link.oak-link-block.success-text:hover,
  a.oak-link.oak-link-block.success-text:focus {
    background-color: var(--color-success-transparent);
  }
`;
//# sourceMappingURL=index-styles.js.map
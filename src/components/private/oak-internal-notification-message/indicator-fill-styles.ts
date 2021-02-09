import {css} from 'lit-element';

export const oakInternalNotificationMessageIndicatorFillStyles = css`
  .oak-internal-notification-message--fill {
    background-color: var(--color-container);
  }
  .oak-internal-notification-message--fill.oak-internal-notification-message--info {
    background-color: var(--color-default);
    color: var(--color-default-i);
  }
  .oak-internal-notification-message--fill.oak-internal-notification-message--success {
    background-color: var(--color-success);
    color: var(--color-success-i);
  }
  .oak-internal-notification-message--fill.oak-internal-notification-message--warning {
    background-color: var(--color-warning);
    color: var(--color-warning-i);
  }
  .oak-internal-notification-message--fill.oak-internal-notification-message--danger {
    background-color: var(--color-danger);
    color: var(--color-danger-i);
  }
`;

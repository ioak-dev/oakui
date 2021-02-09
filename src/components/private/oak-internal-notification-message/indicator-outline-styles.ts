import {css} from 'lit-element';

export const oakInternalNotificationMessageIndicatorOutlineStyles = css`
  .oak-internal-notification-message--outline {
    border: 1px solid var(--color-container);
  }
  .oak-internal-notification-message--outline.oak-internal-notification-message--info {
    border: 1px solid var(--color-default);
  }
  .oak-internal-notification-message--outline.oak-internal-notification-message--success {
    border: 1px solid var(--color-success);
  }
  .oak-internal-notification-message--outline.oak-internal-notification-message--warning {
    border: 1px solid var(--color-warning);
  }
  .oak-internal-notification-message--outline.oak-internal-notification-message--danger {
    border: 1px solid var(--color-danger);
  }
`;

import {css} from 'lit-element';

export const oakInternalNotificationMessageIndicatorCircleStyles = css`
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--color-info);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle.oak-internal-notification-message-info {
    background-color: var(--color-default);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle.oak-internal-notification-message-success {
    background-color: var(--color-success);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle.oak-internal-notification-message-warning {
    background-color: var(--color-warning);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle.oak-internal-notification-message-danger {
    background-color: var(--color-danger);
  }

  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle-outline {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--color-info);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle-outline.oak-internal-notification-message-info {
    border: 2px solid var(--color-default);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle-outline.oak-internal-notification-message-success {
    border: 2px solid var(--color-success);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle-outline.oak-internal-notification-message-warning {
    border: 2px solid var(--color-warning);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle-outline.oak-internal-notification-message-danger {
    border: 2px solid var(--color-danger);
  }

  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle-dotted {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px dotted var(--color-info);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle-dotted.oak-internal-notification-message-info {
    border: 1px dotted var(--color-default);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle-dotted.oak-internal-notification-message-success {
    border: 1px dotted var(--color-success);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle-dotted.oak-internal-notification-message-warning {
    border: 1px dotted var(--color-warning);
  }
  .oak-internal-notification-message-indicator.oak-internal-notification-message-circle-dotted.oak-internal-notification-message-danger {
    border: 1px dotted var(--color-danger);
  }
`;

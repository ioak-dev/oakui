import {css} from 'lit-element';

export const oakInternalNotificationMessageIndicatorCircleStyles = css`
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--color-default);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--circle.oak-internal-notification-message__indicator--info {
    background-color: var(--color-info);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--circle.oak-internal-notification-message__indicator--success {
    background-color: var(--color-success);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--circle.oak-internal-notification-message__indicator--warning {
    background-color: var(--color-warning);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--circle.oak-internal-notification-message__indicator--danger {
    background-color: var(--color-danger);
  }

  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--circle-outline {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--color-default);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--circle-outline.oak-internal-notification-message__indicator--info {
    border: 2px solid var(--color-info);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--circle-outline.oak-internal-notification-message__indicator--success {
    border: 2px solid var(--color-success);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--circle-outline.oak-internal-notification-message__indicator--warning {
    border: 2px solid var(--color-warning);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--circle-outline.oak-internal-notification-message__indicator--danger {
    border: 2px solid var(--color-danger);
  }
`;

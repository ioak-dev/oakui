import {css} from 'lit-element';

export const oakInternalNotificationMessageIndicatorEllipseStyles = css`
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--ellipse {
    width: 6px;
    height: 100%;
    border-radius: 10px;
    background-color: var(--color-default);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--ellipse.oak-internal-notification-message__indicator--info {
    background-color: var(--color-info);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--ellipse.oak-internal-notification-message__indicator--success {
    background-color: var(--color-success);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--ellipse.oak-internal-notification-message__indicator--warning {
    background-color: var(--color-warning);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--ellipse.oak-internal-notification-message__indicator--danger {
    background-color: var(--color-danger);
  }

  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--ellipse-outline {
    width: 6px;
    height: 100%;
    border-radius: 10px;
    border: 2px solid var(--color-default);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--ellipse-outline.oak-internal-notification-message__indicator--info {
    border: 2px solid var(--color-info);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--ellipse-outline.oak-internal-notification-message__indicator--success {
    border: 2px solid var(--color-success);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--ellipse-outline.oak-internal-notification-message__indicator--warning {
    border: 2px solid var(--color-warning);
  }
  .oak-internal-notification-message__indicator.oak-internal-notification-message__indicator--ellipse-outline.oak-internal-notification-message__indicator--danger {
    border: 2px solid var(--color-danger);
  }
`;

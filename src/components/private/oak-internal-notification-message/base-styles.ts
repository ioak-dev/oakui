import {css} from 'lit-element';

export const oakInternalNotificationMessageBaseStyles = css`
  .oak-internal-notification-message {
    display: grid;
    align-items: center;
    background-color: var(--color-container);
    margin-bottom: 6px;
    padding-left: 8px;
    max-width: 50vw;
    grid-auto-flow: column;
  }

  @media (max-width: 767px) {
    .oak-internal-notification-message {
      max-width: calc(90vw - 30px);
    }
  }

  .oak-internal-notification-message-content {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    font-size: 0.9em;
    column-gap: 8px;
    margin-left: 8px;
  }

  .oak-internal-notification-message-left {
  }
  .oak-internal-notification-message-right {
  }
`;

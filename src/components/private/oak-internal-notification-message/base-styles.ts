import {css} from 'lit-element';

export const oakInternalNotificationMessageBaseStyles = css`
  .oak-internal-notification-message {
    margin-bottom: 6px;
    max-height: 0px;
    transition: max-height 250ms ease-in-out;
    overflow: hidden;
    background-color: var(--color-container);
  }

  .oak-internal-notification-message__container {
    display: grid;
    align-items: center;
    padding-left: 8px;
    grid-template-columns: auto 1fr;
  }

  .oak-internal-notification-message__content {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: flex-start;
    font-size: 0.9em;
    column-gap: 8px;
    margin-left: 8px;
  }

  .oak-internal-notification-message__left {
    display: grid;
    grid-auto-flow: row;
    row-gap: 4px;
  }
  .oak-internal-notification-message__right {
  }
`;

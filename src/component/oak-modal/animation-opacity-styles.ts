import {css} from 'lit-element';

export const oakModalAnimationOpacityStyles = css`
  .oak-modal.hide .oak-modal__container {
    box-shadow: none;
  }
  .oak-modal--animation-opacity.oak-modal--speed-slow.oak-modal.show
    .oak-modal__backdrop {
    animation: opacity-in 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-opacity.oak-modal--speed-slow.oak-modal.show
    .oak-modal__content {
    animation: opacity-in 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-in 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  .oak-modal--animation-opacity.oak-modal--speed-slow.oak-modal.hide
    .oak-modal__backdrop {
    animation: opacity-out 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-opacity.oak-modal--speed-slow.oak-modal.hide
    .oak-modal__content {
    animation: opacity-out 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-out 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }

  .oak-modal--animation-opacity.oak-modal--speed-normal.oak-modal.show
    .oak-modal__backdrop {
    animation: opacity-in 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-opacity.oak-modal--speed-normal.oak-modal.show
    .oak-modal__content {
    animation: opacity-in 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-in 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  .oak-modal--animation-opacity.oak-modal--speed-normal.oak-modal.hide
    .oak-modal__backdrop {
    animation: opacity-out 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-opacity.oak-modal--speed-normal.oak-modal.hide
    .oak-modal__content {
    animation: opacity-out 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-out 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }

  .oak-modal--animation-opacity.oak-modal--speed-fast.oak-modal.show
    .oak-modal__backdrop {
    animation: opacity-in 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-opacity.oak-modal--speed-fast.oak-modal.show
    .oak-modal__content {
    animation: opacity-in 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-in 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  .oak-modal--animation-opacity.oak-modal--speed-fast.oak-modal.hide
    .oak-modal__backdrop {
    animation: opacity-out 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-opacity.oak-modal--speed-fast.oak-modal.hide
    .oak-modal__content {
    animation: opacity-out 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-out 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  @keyframes opacity-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes opacity-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

import {css} from 'lit-element';

export const oakModalAnimationZoomStyles = css`
  .oak-modal.hide .oak-modal__container {
    box-shadow: none;
  }
  .oak-modal--animation-zoom.oak-modal--speed-slow.oak-modal.show
    .oak-modal__backdrop {
    animation: opacity-in 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-zoom.oak-modal--speed-slow.oak-modal.show
    .oak-modal__content {
    animation: zoom-in 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-in 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  .oak-modal--animation-zoom.oak-modal--speed-slow.oak-modal.hide
    .oak-modal__backdrop {
    animation: opacity-out 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-zoom.oak-modal--speed-slow.oak-modal.hide
    .oak-modal__content {
    animation: zoom-out 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-out 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }

  .oak-modal--animation-zoom.oak-modal--speed-normal.oak-modal.show
    .oak-modal__backdrop {
    animation: opacity-in 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-zoom.oak-modal--speed-normal.oak-modal.show
    .oak-modal__content {
    animation: zoom-in 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-in 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  .oak-modal--animation-zoom.oak-modal--speed-normal.oak-modal.hide
    .oak-modal__backdrop {
    animation: opacity-out 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-zoom.oak-modal--speed-normal.oak-modal.hide
    .oak-modal__content {
    animation: zoom-out 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-out 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }

  .oak-modal--animation-zoom.oak-modal--speed-fast.oak-modal.show
    .oak-modal__backdrop {
    animation: opacity-in 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-zoom.oak-modal--speed-fast.oak-modal.show
    .oak-modal__content {
    animation: zoom-in 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-in 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  .oak-modal--animation-zoom.oak-modal--speed-fast.oak-modal.hide
    .oak-modal__backdrop {
    animation: opacity-out 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--animation-zoom.oak-modal--speed-fast.oak-modal.hide
    .oak-modal__content {
    animation: zoom-out 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slide-out 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  @keyframes zoom-in {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes zoom-out {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  }
`;

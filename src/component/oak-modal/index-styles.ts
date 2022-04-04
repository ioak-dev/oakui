import {css} from 'lit-element';

export const oakModalStyles = css`
  .oak-modal__backdrop {
    z-index: 101;
  }
  .oak-modal__container {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: grid;
    align-items: center;
    justify-items: center;
    z-index: 100;
  }
  .oak-modal__footer,
  .oak-modal__heading {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .oak-modal__footer {
    display: flex;
    flex-wrap: wrap;
  }
  .oak-modal__body {
    overflow: auto;
  }
  .oak-modal__content {
    z-index: 102;
    display: flex;
    /* transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    border-top: 2px solid var(--color-transparent); */
  }
  .oak-modal__content-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: auto;
    width: auto;
    max-height: 100vh;
    max-width: 100vw;
  }
  .oak-modal__content-container--height-small {
    height: 40vh;
  }
  .oak-modal__content-container--height-medium {
    height: 80vh;
  }
  .oak-modal__content-container--height-large {
    height: 94vh;
  }
  .oak-modal__content-container--height-full {
    height: 100vh;
  }
  .oak-modal__content-container--width-small {
    width: 40vw;
  }
  .oak-modal__content-container--width-medium {
    width: 80vw;
  }
  .oak-modal__content-container--width-large {
    width: 94vw;
  }
  .oak-modal__content-container--width-full {
    width: 100vw;
  }
  .oak-modal__content-container--rounded {
    border-radius: var(--global-border-radius);
  }
  .oak-modal__content-container--rounded.oak-modal__content-container--width-full,
  .oak-modal__content-container--rounded.oak-modal__content-container--height-full {
    border-radius: 0px;
  }
  @media (max-width: 767px) {
    .oak-modal__content-container--width-small {
      width: 60vw;
    }
    .oak-modal__content-container--width-medium {
      width: 80vw;
    }
    .oak-modal__content-container--width-large {
      width: 94vw;
    }
    .oak-modal__content-container--rounded {
      border-radius: 0px;
    }
  }
  @media (max-width: 480px) {
    .oak-modal__content-container--width-small {
      width: 100vw;
    }
    .oak-modal__content-container--width-medium {
      width: 100vw;
    }
    .oak-modal__content-container--width-large {
      width: 100vw;
    }
    .oak-modal__content-container--rounded {
      border-radius: 0px;
    }
  }

  /* @media (max-width: 767px) { */
  /* .oak-modal.mobilize .oak-modal__container {
      top: 0;
      left: 0;
      transform: translateX(0%) translateY(0%);
      max-width: 100vw;
    }
    .oak-modal.mobilize .oak-modal__content {
      width: 100vw;
      height: 100vh;
    }
    .oak-modal.mobilize .oak-modal__content .modal-body {
      max-height: calc(100vh - 80px - 60px);
      height: calc(100vh - 80px - 60px);
    }
  }
  .oak-modal.fullscreen .oak-modal__container {
    top: 0;
    left: 0;
    transform: translateX(0%) translateY(0%);
    max-width: 100vw;
  }
  .oak-modal.fullscreen .oak-modal__content-container--rounded {
    border-radius: 0px;
  }
  .oak-modal.fullscreen .oak-modal__content-container {
    width: 100vw;
    height: 100vh;
  }
  .oak-modal.fullscreen .oak-modal__content .modal-body {
    max-height: calc(100vh - 80px - 60px - 40px);
    height: calc(100vh - 80px - 60px - 40px);
  } */
  .oak-modal.hide .oak-modal__container {
    box-shadow: none;
  }
  .oak-modal--speed-slow.oak-modal.show .oak-modal__backdrop {
    animation: opacity-in 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--speed-slow.oak-modal.show .oak-modal__content {
    animation: opacity-in 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slideUpIn 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  .oak-modal--speed-slow.oak-modal.hide .oak-modal__backdrop {
    animation: opacity-out 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--speed-slow.oak-modal.hide .oak-modal__content {
    animation: opacity-out 650ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slideUpOut 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }

  .oak-modal--speed-normal.oak-modal.show .oak-modal__backdrop {
    animation: opacity-in 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--speed-normal.oak-modal.show .oak-modal__content {
    animation: opacity-in 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slideUpIn 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  .oak-modal--speed-normal.oak-modal.hide .oak-modal__backdrop {
    animation: opacity-out 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--speed-normal.oak-modal.hide .oak-modal__content {
    animation: opacity-out 350ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slideUpOut 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }

  .oak-modal--speed-fast.oak-modal.show .oak-modal__backdrop {
    animation: opacity-in 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--speed-fast.oak-modal.show .oak-modal__content {
    animation: opacity-in 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slideUpIn 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  .oak-modal--speed-fast.oak-modal.hide .oak-modal__backdrop {
    animation: opacity-out 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
  }
  .oak-modal--speed-fast.oak-modal.hide .oak-modal__content {
    animation: opacity-out 200ms cubic-bezier(0, 1, 0.5, 1);
    animation-fill-mode: forwards;
    /* slideUpOut 0.3s cubic-bezier(0, 1, 0.5, 1); */
  }
  @keyframes slideUpIn {
    0% {
      transform: translateY(30vh);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes slideUpOut {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(30vh);
    }
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
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes zoomOut {
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

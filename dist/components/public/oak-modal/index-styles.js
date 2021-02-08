import { css } from 'lit-element';
export const oakModalStyles = css `
  .oak-modal-root .backdrop-fade {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
  }
  .oak-modal-root .oak-modal {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: grid;
    align-items: center;
    justify-items: center;
  }
  .oak-modal-root .oak-modal .modal {
    z-index: 12;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    border-top: 2px solid var(--color-transparent);
    display: flex;
  }
  @media (max-width: 767px) {
    .oak-modal-root .oak-modal .modal {
      border-radius: 0px;
    }
  }
  .oak-modal-root .oak-modal .modal.error {
    border-top: 2px solid var(--color-danger);
  }
  .oak-modal-root .oak-modal .modal .container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    background-color: var(--color-container);
    border-radius: var(--global-border-radius);
  }
  @media (min-width: 768px) {
    .oak-modal-root .oak-modal .modal .container {
      min-width: 500px;
    }
  }
  @media (max-width: 767px) {
    .oak-modal-root.mobilize .oak-modal {
      top: 0;
      left: 0;
      transform: translateX(0%) translateY(0%);
      max-width: 100vw;
    }
    .oak-modal-root.mobilize .oak-modal .modal {
      width: 100vw;
      height: 100vh;
    }
    .oak-modal-root.mobilize .oak-modal .modal .modal-body {
      max-height: calc(100vh - 80px - 60px);
      height: calc(100vh - 80px - 60px);
    }
  }
  .oak-modal-root.fullscreen .oak-modal {
    top: 0;
    left: 0;
    transform: translateX(0%) translateY(0%);
    max-width: 100vw;
  }
  .oak-modal-root.fullscreen .oak-modal .modal {
    border-radius: 0px;
    width: 100vw;
    height: 100vh;
  }
  .oak-modal-root.fullscreen .oak-modal .modal .modal-body {
    max-height: calc(100vh - 80px - 60px - 40px);
    height: calc(100vh - 80px - 60px - 40px);
  }
  .oak-modal-root.show .backdrop-fade {
    animation: opacity-in 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-modal-root.show .oak-modal .modal {
    animation: opacity-in 0.3s cubic-bezier(0, 1, 0.5, 1),
      slideUpIn 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-modal-root.hide .backdrop-fade {
    animation: opacity-out 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-modal-root.hide .oak-modal {
    box-shadow: none;
  }
  .oak-modal-root.hide .oak-modal .modal {
    animation: opacity-out 0.3s cubic-bezier(0, 1, 0.5, 1),
      slideUpOut 0.3s cubic-bezier(0, 1, 0.5, 1);
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
//# sourceMappingURL=index-styles.js.map
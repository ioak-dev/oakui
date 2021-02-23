import {css} from 'lit-element';

export const oakSheetBackdropStyles = css`
  .oak-sheet__backdrop {
    z-index: 13;
  }
  .oak-sheet--show .oak-sheet__backdrop {
    animation: opacity-in 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide .oak-sheet__backdrop {
    animation: opacity-out 0.3s cubic-bezier(0, 1, 0.5, 1);
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

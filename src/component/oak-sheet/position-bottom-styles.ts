import {css} from 'lit-element';

export const oakSheetPositionBottomStyles = css`
  .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-horizontal-one-third {
    width: 33%;
  }
  .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-horizontal-two-third {
    width: 66%;
  }
  .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-horizontal-half {
    width: 50%;
  }
  .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-horizontal-full {
    width: 100%;
  }
  .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-horizontal-auto {
    width: auto;
  }

  .oak-sheet__sheet--position-bottom {
    display: flex;
    justify-items: center;
    align-items: flex-start;
  }
  .oak-sheet--show
    .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-vertical-one-third {
    height: 33%;
    margin-bottom: 0%;
    animation: bottom-in-one-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-vertical-one-third {
    height: 33%;
    margin-bottom: -33%;
    animation: bottom-out-one-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-vertical-two-third {
    height: 66%;
    margin-bottom: 0%;
    animation: bottom-in-two-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-vertical-two-third {
    height: 66%;
    margin-bottom: -66%;
    animation: bottom-out-two-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-vertical-half,
  .oak-sheet--show
    .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-vertical-auto {
    height: 50%;
    margin-bottom: 0%;
    animation: bottom-in-half 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-vertical-half,
  .oak-sheet--hide
    .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-vertical-auto {
    height: 50%;
    margin-bottom: -50%;
    animation: bottom-out-half 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-vertical-full {
    height: 100%;
    margin-bottom: 0%;
    animation: bottom-in-full 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-bottom.oak-sheet__sheet--size-vertical-full {
    height: 100%;
    margin-bottom: -100%;
    animation: bottom-out-full 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  @keyframes bottom-in-one-third {
    0% {
      margin-bottom: -33%;
    }
    100% {
      margin-bottom: 0%;
    }
  }
  @keyframes bottom-out-one-third {
    0% {
      margin-bottom: 0%;
    }
    100% {
      margin-bottom: -33%;
    }
  }

  @keyframes bottom-in-two-third {
    0% {
      margin-bottom: -66%;
    }
    100% {
      margin-bottom: 0%;
    }
  }
  @keyframes bottom-out-two-third {
    0% {
      margin-bottom: 0%;
    }
    100% {
      margin-bottom: -66%;
    }
  }

  @keyframes bottom-in-half {
    0% {
      margin-bottom: -50%;
    }
    100% {
      margin-bottom: 0%;
    }
  }
  @keyframes bottom-out-half {
    0% {
      margin-bottom: 0%;
    }
    100% {
      margin-bottom: -50%;
    }
  }

  @keyframes bottom-in-full {
    0% {
      margin-bottom: -100%;
    }
    100% {
      margin-bottom: 0%;
    }
  }
  @keyframes bottom-out-full {
    0% {
      margin-bottom: 0%;
    }
    100% {
      margin-bottom: -100%;
    }
  }
`;

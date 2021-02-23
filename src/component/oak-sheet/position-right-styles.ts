import {css} from 'lit-element';

export const oakSheetPositionRightStyles = css`
  .oak-sheet__sheet--position-right.oak-sheet__sheet--size-vertical-one-third {
    height: 33%;
  }
  .oak-sheet__sheet--position-right.oak-sheet__sheet--size-vertical-two-third {
    height: 66%;
  }
  .oak-sheet__sheet--position-right.oak-sheet__sheet--size-vertical-half {
    height: 50%;
  }
  .oak-sheet__sheet--position-right.oak-sheet__sheet--size-vertical-full {
    height: 100%;
  }
  .oak-sheet__sheet--position-right.oak-sheet__sheet--size-vertical-auto {
    height: auto;
  }

  .oak-sheet__sheet--position-right {
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .oak-sheet--show
    .oak-sheet__sheet--position-right.oak-sheet__sheet--size-horizontal-one-third {
    width: 33%;
    margin-right: 0%;
    animation: right-in-one-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-right.oak-sheet__sheet--size-horizontal-one-third {
    width: 33%;
    margin-right: -33%;
    animation: right-out-one-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-right.oak-sheet__sheet--size-horizontal-two-third {
    width: 66%;
    margin-right: 0%;
    animation: right-in-two-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-right.oak-sheet__sheet--size-horizontal-two-third {
    width: 66%;
    margin-right: -66%;
    animation: right-out-two-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-right.oak-sheet__sheet--size-horizontal-half,
  .oak-sheet--show
    .oak-sheet__sheet--position-right.oak-sheet__sheet--size-horizontal-auto {
    width: 50%;
    margin-right: 0%;
    animation: right-in-half 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-right.oak-sheet__sheet--size-horizontal-half,
  .oak-sheet--hide
    .oak-sheet__sheet--position-right.oak-sheet__sheet--size-horizontal-auto {
    width: 50%;
    margin-right: -50%;
    animation: right-out-half 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-right.oak-sheet__sheet--size-horizontal-full {
    width: 100%;
    margin-right: 0%;
    animation: right-in-full 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-right.oak-sheet__sheet--size-horizontal-full {
    width: 100%;
    margin-right: -100%;
    animation: right-out-full 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  @keyframes right-in-one-third {
    0% {
      margin-right: -33%;
    }
    100% {
      margin-right: 0%;
    }
  }
  @keyframes right-out-one-third {
    0% {
      margin-right: 0%;
    }
    100% {
      margin-right: -33%;
    }
  }

  @keyframes right-in-two-third {
    0% {
      margin-right: -66%;
    }
    100% {
      margin-right: 0%;
    }
  }
  @keyframes right-out-two-third {
    0% {
      margin-right: 0%;
    }
    100% {
      margin-right: -66%;
    }
  }

  @keyframes right-in-half {
    0% {
      margin-right: -50%;
    }
    100% {
      margin-right: 0%;
    }
  }
  @keyframes right-out-half {
    0% {
      margin-right: 0%;
    }
    100% {
      margin-right: -50%;
    }
  }

  @keyframes right-in-full {
    0% {
      margin-right: -100%;
    }
    100% {
      margin-right: 0%;
    }
  }
  @keyframes right-out-full {
    0% {
      margin-right: 0%;
    }
    100% {
      margin-right: -100%;
    }
  }
`;

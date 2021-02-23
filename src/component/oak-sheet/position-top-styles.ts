import {css} from 'lit-element';

export const oakSheetPositionTopStyles = css`
  .oak-sheet__sheet--position-top.oak-sheet__sheet--size-horizontal-one-third {
    width: 33%;
  }
  .oak-sheet__sheet--position-top.oak-sheet__sheet--size-horizontal-two-third {
    width: 66%;
  }
  .oak-sheet__sheet--position-top.oak-sheet__sheet--size-horizontal-half {
    width: 50%;
  }
  .oak-sheet__sheet--position-top.oak-sheet__sheet--size-horizontal-full {
    width: 100%;
  }
  .oak-sheet__sheet--position-top.oak-sheet__sheet--size-horizontal-auto {
    width: auto;
  }

  .oak-sheet__sheet--position-top {
    display: flex;
    justify-items: center;
    align-items: center;
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-top.oak-sheet__sheet--size-vertical-one-third {
    height: 33%;
    margin-top: 0%;
    animation: top-in-one-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-top.oak-sheet__sheet--size-vertical-one-third {
    height: 33%;
    margin-top: -33%;
    animation: top-out-one-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-top.oak-sheet__sheet--size-vertical-two-third {
    height: 66%;
    margin-top: 0%;
    animation: top-in-two-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-top.oak-sheet__sheet--size-vertical-two-third {
    height: 66%;
    margin-top: -66%;
    animation: top-out-two-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-top.oak-sheet__sheet--size-vertical-half,
  .oak-sheet--show
    .oak-sheet__sheet--position-top.oak-sheet__sheet--size-vertical-auto {
    height: 50%;
    margin-top: 0%;
    animation: top-in-half 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-top.oak-sheet__sheet--size-vertical-half,
  .oak-sheet--hide
    .oak-sheet__sheet--position-top.oak-sheet__sheet--size-vertical-auto {
    height: 50%;
    margin-top: -50%;
    animation: top-out-half 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-top.oak-sheet__sheet--size-vertical-full {
    height: 100%;
    margin-top: 0%;
    animation: top-in-full 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-top.oak-sheet__sheet--size-vertical-full {
    height: 100%;
    margin-top: -100%;
    animation: top-out-full 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  @keyframes top-in-one-third {
    0% {
      margin-top: -33%;
    }
    100% {
      margin-top: 0%;
    }
  }
  @keyframes top-out-one-third {
    0% {
      margin-top: 0%;
    }
    100% {
      margin-top: -33%;
    }
  }

  @keyframes top-in-two-third {
    0% {
      margin-top: -66%;
    }
    100% {
      margin-top: 0%;
    }
  }
  @keyframes top-out-two-third {
    0% {
      margin-top: 0%;
    }
    100% {
      margin-top: -66%;
    }
  }

  @keyframes top-in-half {
    0% {
      margin-top: -50%;
    }
    100% {
      margin-top: 0%;
    }
  }
  @keyframes top-out-half {
    0% {
      margin-top: 0%;
    }
    100% {
      margin-top: -50%;
    }
  }

  @keyframes top-in-full {
    0% {
      margin-top: -100%;
    }
    100% {
      margin-top: 0%;
    }
  }
  @keyframes top-out-full {
    0% {
      margin-top: 0%;
    }
    100% {
      margin-top: -100%;
    }
  }
`;

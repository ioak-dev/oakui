import {css} from 'lit-element';

export const oakSheetPositionLeftStyles = css`
  .oak-sheet__sheet--position-left.oak-sheet__sheet--size-vertical-one-third {
    height: 33%;
  }
  .oak-sheet__sheet--position-left.oak-sheet__sheet--size-vertical-two-third {
    height: 66%;
  }
  .oak-sheet__sheet--position-left.oak-sheet__sheet--size-vertical-half {
    height: 50%;
  }
  .oak-sheet__sheet--position-left.oak-sheet__sheet--size-vertical-full {
    height: 100%;
  }
  .oak-sheet__sheet--position-left.oak-sheet__sheet--size-vertical-auto {
    height: auto;
  }

  .oak-sheet__sheet--position-left {
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .oak-sheet--show
    .oak-sheet__sheet--position-left.oak-sheet__sheet--size-horizontal-one-third {
    width: 33%;
    margin-left: 0%;
    animation: left-in-one-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-left.oak-sheet__sheet--size-horizontal-one-third {
    width: 33%;
    margin-left: -33%;
    animation: left-out-one-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-left.oak-sheet__sheet--size-horizontal-two-third {
    width: 66%;
    margin-left: 0%;
    animation: left-in-two-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-left.oak-sheet__sheet--size-horizontal-two-third {
    width: 66%;
    margin-left: -66%;
    animation: left-out-two-third 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-left.oak-sheet__sheet--size-horizontal-half,
  .oak-sheet--show
    .oak-sheet__sheet--position-left.oak-sheet__sheet--size-horizontal-auto {
    width: 50%;
    margin-left: 0%;
    animation: left-in-half 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-left.oak-sheet__sheet--size-horizontal-half,
  .oak-sheet--hide
    .oak-sheet__sheet--position-left.oak-sheet__sheet--size-horizontal-auto {
    width: 50%;
    margin-left: -50%;
    animation: left-out-half 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  .oak-sheet--show
    .oak-sheet__sheet--position-left.oak-sheet__sheet--size-horizontal-full {
    width: 100%;
    margin-left: 0%;
    animation: left-in-full 0.3s cubic-bezier(0, 1, 0.5, 1);
  }
  .oak-sheet--hide
    .oak-sheet__sheet--position-left.oak-sheet__sheet--size-horizontal-full {
    width: 100%;
    margin-left: -100%;
    animation: left-out-full 0.3s cubic-bezier(0, 1, 0.5, 1);
  }

  @keyframes left-in-one-third {
    0% {
      margin-left: -33%;
    }
    100% {
      margin-left: 0%;
    }
  }
  @keyframes left-out-one-third {
    0% {
      margin-left: 0%;
    }
    100% {
      margin-left: -33%;
    }
  }

  @keyframes left-in-two-third {
    0% {
      margin-left: -66%;
    }
    100% {
      margin-left: 0%;
    }
  }
  @keyframes left-out-two-third {
    0% {
      margin-left: 0%;
    }
    100% {
      margin-left: -66%;
    }
  }

  @keyframes left-in-half {
    0% {
      margin-left: -50%;
    }
    100% {
      margin-left: 0%;
    }
  }
  @keyframes left-out-half {
    0% {
      margin-left: 0%;
    }
    100% {
      margin-left: -50%;
    }
  }

  @keyframes left-in-full {
    0% {
      margin-left: -100%;
    }
    100% {
      margin-left: 0%;
    }
  }
  @keyframes left-out-full {
    0% {
      margin-left: 0%;
    }
    100% {
      margin-left: -100%;
    }
  }
`;

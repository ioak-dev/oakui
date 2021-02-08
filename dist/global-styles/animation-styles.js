import { css } from 'lit-element';
export const animationStyles = css `
  @-webkit-keyframes slideInLeft {
    from {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
      opacity: 0;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes slideInLeft {
    from {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
      opacity: 0;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  .oak-animate__slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes slideOutLeft {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    to {
      visibility: hidden;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      opacity: 0;
    }
  }
  @keyframes slideOutLeft {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    to {
      visibility: hidden;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      opacity: 0;
    }
  }
  .oak-animate__slideOutLeft {
    -webkit-animation-name: slideOutLeft;
    animation-name: slideOutLeft;
    -webkit-animation-duration: 100ms;
    animation-duration: 100ms;
    -webkit-animation-duration: 100ms;
    animation-duration: 100ms;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
`;
//# sourceMappingURL=animation-styles.js.map
import {css} from 'lit-element';

export const oakNotificationStyles = css`
  .oak-notification {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 11;
    pointer-events: none;
  }

  .oak-notification-container {
    position: absolute;
    pointer-events: all;
    width: 350px;
  }

  .oak-notification__distance-from-base-x--0 {
    --distance-from-base-x: 0px;
  }

  .oak-notification__distance-from-base-x--1 {
    --distance-from-base-x: 10px;
  }

  .oak-notification__distance-from-base-x--2 {
    --distance-from-base-x: 20px;
  }

  .oak-notification__distance-from-base-x--3 {
    --distance-from-base-x: 30px;
  }

  .oak-notification__distance-from-base-x--4 {
    --distance-from-base-x: 40px;
  }

  .oak-notification__distance-from-base-x--5 {
    --distance-from-base-x: 50px;
  }

  .oak-notification__distance-from-base-x--6 {
    --distance-from-base-x: 60px;
  }

  .oak-notification__distance-from-base-x--7 {
    --distance-from-base-x: 70px;
  }

  .oak-notification__distance-from-base-x--8 {
    --distance-from-base-x: 80px;
  }

  .oak-notification__distance-from-base-x--9 {
    --distance-from-base-x: 90px;
  }

  .oak-notification__distance-from-base-x--10 {
    --distance-from-base-x: 100px;
  }

  .oak-notification__distance-from-base-y--0 {
    --distance-from-base-y: 0px;
  }

  .oak-notification__distance-from-base-y--1 {
    --distance-from-base-y: 10px;
  }

  .oak-notification__distance-from-base-y--2 {
    --distance-from-base-y: 20px;
  }

  .oak-notification__distance-from-base-y--3 {
    --distance-from-base-y: 30px;
  }

  .oak-notification__distance-from-base-y--4 {
    --distance-from-base-y: 40px;
  }

  .oak-notification__distance-from-base-y--5 {
    --distance-from-base-y: 50px;
  }

  .oak-notification__distance-from-base-y--6 {
    --distance-from-base-y: 60px;
  }

  .oak-notification__distance-from-base-y--7 {
    --distance-from-base-y: 70px;
  }

  .oak-notification__distance-from-base-y--8 {
    --distance-from-base-y: 80px;
  }

  .oak-notification__distance-from-base-y--9 {
    --distance-from-base-y: 90px;
  }

  .oak-notification__distance-from-base-y--10 {
    --distance-from-base-y: 100px;
  }

  .oak-notification__distance-from-base-x-mobile--0 {
    --distance-from-base-x-mobile: 0px;
  }

  .oak-notification__distance-from-base-x-mobile--1 {
    --distance-from-base-x-mobile: 10px;
  }

  .oak-notification__distance-from-base-x-mobile--2 {
    --distance-from-base-x-mobile: 20px;
  }

  .oak-notification__distance-from-base-x-mobile--3 {
    --distance-from-base-x-mobile: 30px;
  }

  .oak-notification__distance-from-base-x-mobile--4 {
    --distance-from-base-x-mobile: 40px;
  }

  .oak-notification__distance-from-base-x-mobile--5 {
    --distance-from-base-x-mobile: 50px;
  }

  .oak-notification__distance-from-base-x-mobile--6 {
    --distance-from-base-x-mobile: 60px;
  }

  .oak-notification__distance-from-base-x-mobile--7 {
    --distance-from-base-x-mobile: 70px;
  }

  .oak-notification__distance-from-base-x-mobile--8 {
    --distance-from-base-x-mobile: 80px;
  }

  .oak-notification__distance-from-base-x-mobile--9 {
    --distance-from-base-x-mobile: 90px;
  }

  .oak-notification__distance-from-base-x-mobile--10 {
    --distance-from-base-x-mobile: 100px;
  }

  .oak-notification__distance-from-base-y-mobile--0 {
    --distance-from-base-y-mobile: 0px;
  }

  .oak-notification__distance-from-base-y-mobile--1 {
    --distance-from-base-y-mobile: 10px;
  }

  .oak-notification__distance-from-base-y-mobile--2 {
    --distance-from-base-y-mobile: 20px;
  }

  .oak-notification__distance-from-base-y-mobile--3 {
    --distance-from-base-y-mobile: 30px;
  }

  .oak-notification__distance-from-base-y-mobile--4 {
    --distance-from-base-y-mobile: 40px;
  }

  .oak-notification__distance-from-base-y-mobile--5 {
    --distance-from-base-y-mobile: 50px;
  }

  .oak-notification__distance-from-base-y-mobile--6 {
    --distance-from-base-y-mobile: 60px;
  }

  .oak-notification__distance-from-base-y-mobile--7 {
    --distance-from-base-y-mobile: 70px;
  }

  .oak-notification__distance-from-base-y-mobile--8 {
    --distance-from-base-y-mobile: 80px;
  }

  .oak-notification__distance-from-base-y-mobile--9 {
    --distance-from-base-y-mobile: 90px;
  }

  .oak-notification__distance-from-base-y-mobile--10 {
    --distance-from-base-y-mobile: 100px;
  }

  .oak-notification__position--top-left {
    left: var(--distance-from-base-x);
    top: var(--distance-from-base-y);
  }

  .oak-notification__position--top-center {
    left: calc(50% - 175px);
    top: var(--distance-from-base-y);
  }

  .oak-notification__position--top-right {
    right: var(--distance-from-base-x);
    top: var(--distance-from-base-y);
  }

  .oak-notification__position--bottom-left {
    left: var(--distance-from-base-x);
    bottom: var(--distance-from-base-y);
  }

  .oak-notification__position--bottom-center {
    left: calc(50% - 175px);
    bottom: var(--distance-from-base-y);
  }

  .oak-notification__position--bottom-right {
    right: var(--distance-from-base-x);
    bottom: var(--distance-from-base-y);
  }

  @media (max-width: 767px) {
    .oak-notification__position--mobile-top-left,
    .oak-notification__position--mobile-top-center,
    .oak-notification__position--mobile-top-right,
    .oak-notification__position--mobile-bottom-left,
    .oak-notification__position--mobile-bottom-center,
    .oak-notification__position--mobile-bottom-right {
      width: auto;
      left: var(--distance-from-base-x-mobile);
      right: var(--distance-from-base-x-mobile);
    }
    .oak-notification__position--mobile-top-left,
    .oak-notification__position--mobile-top-center,
    .oak-notification__position--mobile-top-right {
      top: var(--distance-from-base-y-mobile);
      bottom: auto;
    }
    .oak-notification__position--mobile-bottom-left,
    .oak-notification__position--mobile-bottom-center,
    .oak-notification__position--mobile-bottom-right {
      top: auto;
      bottom: var(--distance-from-base-y-mobile);
    }
  }
`;

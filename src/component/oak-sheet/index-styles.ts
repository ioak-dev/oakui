import {css} from 'lit-element';

export const oakSheetStyles = css`
  .oak-sheet {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: grid;
    overflow: hidden;
    z-index: 12;
  }
  .oak-sheet__backdrop {
    z-index: 13;
  }
  .oak-sheet__sheet {
    /* position: fixed; */
    z-index: 20;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .oak-sheet--position-middle {
    justify-items: center;
    align-items: center;
  }
  .oak-sheet--position-top {
    justify-items: center;
    align-items: flex-start;
  }
  .oak-sheet--position-bottom {
    justify-items: center;
    align-items: flex-end;
  }
  .oak-sheet--position-left {
    justify-items: flex-start;
    align-items: center;
  }
  .oak-sheet--position-right {
    justify-items: flex-end;
    align-items: center;
  }

  .oak-sheet__sheet--position-middle,
  .oak-sheet__sheet--position-bottom,
  .oak-sheet__sheet--position-top {
    /* left: 50%;
    transform: translateX(-50%); */
  }
  .oak-sheet__sheet--position-middle {
    /* top: 0;
    transform: translateY(-50%); */
  }
  .oak-sheet__sheet--position-bottom {
    /* bottom: 0; */
  }
  .oak-sheet__sheet--position-top {
    /* top: 0; */
  }
  .oak-sheet__sheet--position-left,
  .oak-sheet__sheet--position-right {
    /* top: 50%;
    transform: translateY(-50%); */
  }
  .oak-sheet__sheet--position-left {
    left: 0;
  }
  .oak-sheet__sheet--position-right {
    /* right: 0; */
  }
`;

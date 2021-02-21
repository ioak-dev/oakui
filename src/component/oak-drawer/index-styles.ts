import {css} from 'lit-element';

export const oakDrawerStyles = css`
  .oak-drawer {
    display: flex;
    /* overflow-x: hidden; */
  }

  .oak-drawer__drawer {
    position: fixed;
    top: 0;
    height: 100%;
    z-index: 10;
    /* overflow-y: auto; */
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
  .oak-drawer__drawer--left {
    left: 0;
    right: auto;
  }
  .oak-drawer__drawer--right {
    left: auto;
    right: 0;
  }
  .oak-drawer__content {
    width: 100vw;
    flex-grow: 1;
    /* overflow-x: auto; */
    /* overflow-y: inherit; */
    transition: padding 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
`;

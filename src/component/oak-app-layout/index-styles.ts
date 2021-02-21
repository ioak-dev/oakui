import {css} from 'lit-element';

export const oakAppLayoutStyles = css`
  .backdrop-fade {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
  }
  .oak-app-layout {
    display: flex;
    z-index: 10;
    /* overflow-x: hidden; */
  }

  .oak-app-layout__drawer-left,
  .oak-app-layout__drawer-right {
    position: fixed;
    top: 0;
    height: 100%;
    z-index: 12;
    /* overflow-y: auto; */
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
  .oak-app-layout__drawer-left {
    left: 0;
    right: auto;
  }
  .oak-app-layout__drawer-right {
    left: auto;
    right: 0;
  }
  .oak-app-layout__content {
    width: 100vw;
    flex-grow: 1;
    /* overflow-x: auto; */
    /* overflow-y: inherit; */
    transition: padding 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
`;

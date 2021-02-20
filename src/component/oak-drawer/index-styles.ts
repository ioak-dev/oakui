import {css} from 'lit-element';

export const oakDrawerStyles = css`
  .oak-drawer {
    display: flex;
  }
  .oak-drawer--left {
    flex-direction: row;
  }
  .oak-drawer--right {
    flex-direction: row-reverse;
  }

  .oak-drawer__drawer {
    width: auto;
    visibility: hidden;
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
      visibility 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .oak-drawer__content {
    width: 100%;
    visibility: hidden;
    transition: margin 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

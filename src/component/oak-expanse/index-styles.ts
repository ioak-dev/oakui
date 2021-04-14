import {css} from 'lit-element';

export const oakExpanseStyles = css`
  .oak-expanse {
    width: 100%;
    overflow: hidden;
  }
  .oak-expanse__header {
    width: 100%;
  }
  .oak-expanse__main {
    width: 100%;
    max-height: 0px;
    overflow-y: hidden;
    transition: max-height 250ms ease-in-out;
  }
`;

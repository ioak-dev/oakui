import {css} from 'lit-element';

export const oakClickAreaStyles = css`
  .oak-click-area {
    width: 100%;
    /* overflow: hidden; */
    display: contents;
  }
  .oak-click-area__container button {
    width: 100%;
    display: flex;
    background: none;
    user-select: none;
    margin: 0;
    padding: 0;
    color: inherit;
    border: none;
    text-align: left;
    /* border-radius: var(--global-border-radius); */
    border: 1px solid transparent;
  }
  .oak-click-area__container button:focus {
    outline: none;
    border: 1px solid var(--formelement-outline-border-color);
    /* border-color: var(--formelement-outline-border-color); */
    /* box-shadow: var(--formelement-outline-box-shadow); */
    /* outline-style: solid;
    outline-width: 2px;
    outline-offset: -4px;
    outline-color: var(--formelement-outline-border-color); */
  }
`;

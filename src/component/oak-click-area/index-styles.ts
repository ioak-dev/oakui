import {css} from 'lit-element';

export const oakClickAreaStyles = css`
  .oak-click-area {
    width: 100%;
    /* overflow: hidden; */
    display: contents;
  }
  .oak-click-area__container button {
    width: 100%;
    /* display: flex; */
    background: none;
    user-select: none;
    margin: 0;
    padding: 0;
    color: inherit;
    border: none;
    text-align: left;
    /* border-radius: var(--global-border-radius); */
    border: none;
  }
  .oak-click-area__container button:focus {
    /* border: 1px solid var(--oak-userinput-outline-border-color); */
    /* border-color: var(--oak-userinput-outline-border-color); */
    /* box-shadow: var(--oak-userinput-outline-box-shadow); */
    outline-style: var(--oak-global-outline-style);
    outline-width: var(--oak-global-outline-width);
    outline-offset: var(--oak-global-outline-offset);
    outline-color: var(--oak-global-outline-color);
  }
`;

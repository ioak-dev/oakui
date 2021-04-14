import {css} from 'lit-element';

export const oakInternalSelectModernStyles = css`
  .oak-internal-select-modern__search-filter {
    padding: 8px;
  }
  input {
    width: 100%;
    border: 1px solid var(--global-border-color);
    background-color: var(--formelement-color-bg);
    color: var(--formelement-color-fg);
    box-sizing: border-box;
    padding: 0 5px;
    border-radius: var(--formelement-border-radius);
    outline: none;
  }
  input:focus {
    box-shadow: var(--oak-userinput-outline-box-shadow);
    border-color: var(--oak-userinput-outline-border-color);
    // background-color: var(--formelement-color-bg-active);
    // color: var(--formelement-color-fg-active);
    outline-style: var(--oak-userinput-outline-style);
    outline-width: var(--oak-userinput-outline-width);
    outline-offset: var(--oak-userinput-outline-offset);
    outline-color: var(--oak-userinput-outline-color);
  }

  .oak-internal-select-modern__popup ul {
    list-style: none;
    margin: 0;
    padding: 0;
    // visibility: hidden;
    // opacity: 0;

    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .oak-internal-select-modern__popup ul.activated {
    // visibility: visible;
    // opacity: 1;
  }

  .oak-internal-select-modern__popup ul li {
    padding: 7px 8px;
    cursor: pointer;
  }

  .oak-internal-select-modern__li {
    display: flex;
    align-items: center;
  }
  .oak-internal-select-modern__li-indicator {
    margin-right: 8px;
    width: 16px;
    display: flex;
  }

  .oak-internal-select-modern__li-indicator svg path {
    fill: var(--formelement-color-fg);
  }
`;

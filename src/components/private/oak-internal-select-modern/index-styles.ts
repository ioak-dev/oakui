import {css} from 'lit-element';

export const oakInternalSelectModernStyles = css`
  .oak-internal-select-modern--margin {
    margin-bottom: var(--oak-padding-vertical4);
  }

  .oak-internal-select-modern--search-filter {
    padding: 8px;
    border-bottom: 1px solid var(--global-border-color);
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
    box-shadow: var(--formelement-outline-box-shadow);
    border-color: var(--formelement-outline-border-color);
    // background-color: var(--formelement-color-bg-active);
    // color: var(--formelement-color-fg-active);
  }

  .oak-internal-select-modern--popup ul {
    list-style: none;
    margin: 0;
    padding: 0;
    // visibility: hidden;
    // opacity: 0;

    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .oak-internal-select-modern--popup ul.activated {
    // visibility: visible;
    // opacity: 1;
  }

  .oak-internal-select-modern--popup ul li {
    padding: 7px 16px;
    background-color: var(--formelement-color-bg-active);
    color: var(--formelement-color-fg-active);
    cursor: pointer;
  }

  .oak-internal-select-modern--popup ul li:not(:last-child) {
    border-bottom: 1px solid var(--global-border-color);
  }
  .oak-internal-select-modern--popup ul li:hover,
  .oak-internal-select-modern--popup ul li.option-active {
    background-color: var(--formelement-color-bg-highlight);
    color: var(--formelement-color-fg-highlight);
  }
`;

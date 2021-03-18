import {css} from 'lit-element';

export const oakExpansionPanelStyles = css`
  .oak-expansion-panel {
    width: 100%;
    overflow: hidden;
  }
  .oak-expansion-panel__header {
    width: 100%;
  }
  .oak-expansion-panel__header button {
    width: 100%;
    background: none;
    user-select: none;
    margin: 0;
    padding: 0;
    color: inherit;
    border: none;
    /* border-radius: var(--global-border-radius); */
    /* border: 1px solid transparent; */
  }
  .oak-expansion-panel__header button:focus {
    outline: none;
    /* border-color: var(--formelement-outline-border-color); */
    box-shadow: inset var(--formelement-outline-box-shadow);
    /* outline-style: solid;
    outline-width: 2px;
    outline-offset: -4px;
    outline-color: var(--formelement-outline-border-color); */
  }
  .oak-expansion-panel__main {
    width: 100%;
    max-height: 0px;
    overflow-y: hidden;
    transition: max-height 250ms ease-in-out;
  }
`;

import {css} from 'lit-element';

export const oakButtonBaseStyles = css`
  button {
    display: grid;
    align-items: center;
    align-content: center;
    user-select: none;
    border-radius: var(--formelement-border-radius);
    white-space: nowrap;
    font-size: 12.5px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    background: none;
    color: var(--color-1);
    cursor: pointer;
    transition: background-color 0.4s cubic-bezier(0.5, 1.6, 0.4, 0.7),
      border-color 0.4s cubic-bezier(0.5, 1.6, 0.4, 0.7);
    position: relative;
    overflow: hidden;
    z-index: 0;
  }
  button.fullwidth {
    width: 100%;
  }
  button .button-label-container {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    column-gap: 10px;
  }
  button:focus {
    outline-style: var(--oak-global-outline-style);
    outline-width: var(--oak-global-outline-width);
    outline-offset: var(--oak-global-outline-offset);
    outline-color: var(--oak-global-outline-color);
    /* outline: none;
    box-shadow: var(--oak-userinput-outline-box-shadow); */
  }
`;

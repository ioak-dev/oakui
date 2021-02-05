import {css} from 'lit-element';

export const oakButtonBaseStyles = css`
  button {
    display: grid;
    align-items: center;
    align-content: center;
    --btn-text-color: #fcfcfc;
    --btn-text-color-dark: #000;
    user-select: none;
    border-radius: var(--formelement-border-radius);
    white-space: nowrap;
    font-size: 12.5px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    // border: 2px solid var(--color-bg);
    background: none;
    color: var(--color-i1);
    cursor: pointer;
    transition: 0.4s cubic-bezier(0.5, 1.6, 0.4, 0.7);
    position: relative;
    overflow: hidden;
    z-index: 0;
  }
  button .button-label-container {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    column-gap: 10px;
  }
  button:focus {
    outline: none;
    box-shadow: var(--formelement-outline-box-shadow);
  }
`;

import {css} from 'lit-element';

export const oakInputStyles = css`
  .oak-input {
    text-align: left;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    padding: 0 5px;
    outline: none;
    text-overflow: ellipsis;
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 5px 5px;
    outline: none;
    resize: vertical;

    font-family: inherit;
    color: inherit;
    background-color: inherit;
  }
  input.oak-input--underline {
    padding: 0 2px;
  }
  textarea.oak-input--underline {
    padding: 5px 2px;
  }
`;

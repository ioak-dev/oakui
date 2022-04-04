import {css} from 'lit-element';

export const oakImageUploadStyles = css`
  img {
    display: block;
    /* This rule is very important, please don't ignore this */
    max-width: 100%;
  }
  .oak-image-upload--top {
    display: flex;
    flex-direction: column-reverse;
  }
  .oak-image-upload--bottom {
    display: flex;
    flex-direction: column;
  }
  .oak-image-upload--left {
    display: flex;
    flex-direction: row-reverse;
  }
  .oak-image-upload--right {
    display: flex;
    flex-direction: row;
  }

  .oak-image-upload__container__noimage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    max-width: 100%;
    border: 1px solid var(--color-global-darkest);
  }
  .oak-image-upload__action--left,
  .oak-image-upload__action--right {
    display: flex;
    flex-direction: column;
  }
  .oak-image-upload__action--top,
  .oak-image-upload__action--bottom {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .oak-image-upload__action__upload {
    display: flex;
    justify-content: flex-end;
  }
  .oak-image-upload__action__upload__label {
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .oak-image-upload__action__upload__label__input {
    display: none;
  }
  .oak-image-upload__button {
    padding: 10px;
    cursor: pointer;
  }
  .oak-image-upload__button svg {
    width: 24px;
  }
  .oak-image-upload__button svg path {
    transition: fill 250ms ease-in-out;
    fill: var(--color-2);
  }
  .oak-image-upload__button:hover svg path,
  .oak-image-upload__button:focus svg path {
    fill: var(--color-1);
  }
`;

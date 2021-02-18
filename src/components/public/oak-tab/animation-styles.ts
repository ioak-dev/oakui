import {css} from 'lit-element';

export const oakTabAnimationStyles = css`
  .oak-tab-underline__button,
  .oak-tab-accent__button,
  .oak-tab-fill__button,
  .oak-tab-text__button,
  .oak-tab-pills__button,
  .oak-tab-underline__button--active,
  .oak-tab-accent__button--active,
  .oak-tab-fill__button--active,
  .oak-tab-text__button--active,
  .oak-tab-pills__button--active,
  .oak-tab-underline__button:hover,
  .oak-tab-accent__button:hover,
  .oak-tab-fill__button:hover,
  .oak-tab-text__button:hover,
  .oak-tab-pills__button:hover,
  .oak-tab-underline__button:focus,
  .oak-tab-accent__button:focus,
  .oak-tab-fill__button:focus,
  .oak-tab-text__button:focus,
  .oak-tab-pills__button:focus {
    transition: color 200ms ease-in-out, background-color 200ms ease-in-out,
      border 200ms ease-in-out;
  }
`;

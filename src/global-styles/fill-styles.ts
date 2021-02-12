import {css} from 'lit-element';

export const fillStyles = css`
  .oak-fill-container {
    background-color: var(--color-container);
  }
  .oak-fill-surface {
    background-color: var(--color-surface);
  }
  .oak-fill-float {
    background-color: var(--color-float);
  }
  .oak-fill-none {
    background-color: var(--color-global);
  }

  .oak-fill-container--hover:hover,
  .oak-fill-container--hover:focus {
    background-color: var(--color-container-dark);
  }
  .oak-fill-surface--hover:hover,
  .oak-fill-surface--hover:focus {
    background-color: var(--color-surface-dark);
  }
  .oak-fill-float--hover:hover,
  .oak-fill-float--hover:focus {
    background-color: var(--color-float-dark);
  }
  .oak-fill-none--hover:hover,
  .oak-fill-none--hover:focus {
    background-color: var(--color-global);
  }
`;

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
    background-color: var(--color-global-dark);
  }

  .oak-fill-container--hover-hc:hover,
  .oak-fill-container--hover-hc:focus {
    background-color: var(--color-container-darker);
  }
  .oak-fill-surface--hover-hc:hover,
  .oak-fill-surface--hover-hc:focus {
    background-color: var(--color-surface-darker);
  }
  .oak-fill-float--hover-hc:hover,
  .oak-fill-float--hover-hc:focus {
    background-color: var(--color-float-darker);
  }
  .oak-fill-none--hover-hc:hover,
  .oak-fill-none--hover-hc:focus {
    background-color: var(--color-global-darker);
  }

  .oak-fill-container--hover-i:hover,
  .oak-fill-container--hover-i:focus {
    background-color: var(--color-container-light);
  }
  .oak-fill-surface--hover-i:hover,
  .oak-fill-surface--hover-i:focus {
    background-color: var(--color-surface-light);
  }
  .oak-fill-float--hover-i:hover,
  .oak-fill-float--hover-i:focus {
    background-color: var(--color-float-light);
  }
  .oak-fill-none--hover-i:hover,
  .oak-fill-none--hover-i:focus {
    background-color: var(--color-global-light);
  }

  .oak-fill-container--hover-i-hc:hover,
  .oak-fill-container--hover-i-hc:focus {
    background-color: var(--color-container-lighter);
  }
  .oak-fill-surface--hover-i-hc:hover,
  .oak-fill-surface--hover-i-hc:focus {
    background-color: var(--color-surface-lighter);
  }
  .oak-fill-float--hover-i-hc:hover,
  .oak-fill-float--hover-i-hc:focus {
    background-color: var(--color-float-lighter);
  }
  .oak-fill-none--hover-i-hc:hover,
  .oak-fill-none--hover-i-hc:focus {
    background-color: var(--color-global-lighter);
  }
`;

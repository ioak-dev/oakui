import {css} from 'lit-element';

export const borderStyles = css`
  .oak-outlined {
    border: 1px solid var(--global-border-color);
  }
  .oak-rounded {
    border-radius: var(--global-border-radius);
  }
  .oak-shape-sharp {
    border-radius: 0;
  }
  .oak-shape-rectangle {
    border-radius: var(--formelement-border-radius);
  }
  .oak-shape-rounded {
    border-radius: 100px;
  }
  .oak-shape-leaf {
    border-radius: 7px 0;
  }
`;

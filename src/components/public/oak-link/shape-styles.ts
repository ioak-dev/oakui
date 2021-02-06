import {css} from 'lit-element';

export const oakLinkShapeStyles = css`
  a.shape-sharp {
    border-radius: 0;
  }
  a.shape-rectangle {
    border-radius: var(--formelement-border-radius);
  }
  a.shape-rounded {
    border-radius: 100px;
  }
  a.shape-leaf {
    border-radius: 7px 0;
  }
`;

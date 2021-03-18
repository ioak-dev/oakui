import {css} from 'lit-element';

export const oakToolbarStyles = css`
  .oak-toolbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: var(--oak-toolbar-min-height);
  }

  .oak-toolbar--bordervariant-top,
  .oak-toolbar--bordervariant-both {
    border-top: 1px solid var(--global-border-color);
  }

  .oak-toolbar--bordervariant-bottom,
  .oak-toolbar--bordervariant-both {
    border-bottom: 1px solid var(--global-border-color);
  }
`;

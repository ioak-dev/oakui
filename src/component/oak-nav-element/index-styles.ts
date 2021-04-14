import {css} from 'lit-element';

export const oakNavElementStyles = css`
  .oak-nav-element__container {
    padding: 8px 0 8px 30px;
  }
  .oak-nav-element__content {
    width: 100%;
    font-size: 14px;
    color: var(--color-3);
    cursor: pointer;
  }
  .oak-nav-element__container:hover .oak-nav-element__content {
    color: var(--color-4);
  }
`;

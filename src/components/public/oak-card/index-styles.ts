import {css} from 'lit-element';

export const oakCardStyles = css`
  .oak-card {
    position: relative;
    margin: 10px;
    border-radius: 6px;
    max-width: 100%;
    overflow-x: auto;
    display: grid;
    grid-auto-flow: row;
    background-color: var(--color-surface);
  }
  @media (max-width: 767px) {
    .oak-card {
      margin: 5px;
    }
  }
  .oak-card .oak-card--header-subtle,
  .oak-card .oak-card--header-apparent {
    display: grid;
    grid-auto-flow: column;
    padding: 15px 20px;
    margin-bottom: 15px;
    font-weight: 500;
    border-radius: 0 6px 0 0;
  }
  .oak-card .oak-card--header-apparent {
    background-color: var(--color-primary);
  }
  .oak-card .oak-card--body {
    padding: 10px 10px;
  }
  .oak-card .oak-card--body .oak-card--app-text {
    margin: auto;
    width: 100%;
    word-break: break-word;
  }
  @media (max-width: 767px) {
    .oak-card .oak-card--body .oak-card--app-text {
      width: 100%;
    }
  }
`;

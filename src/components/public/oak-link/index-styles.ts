import {css} from 'lit-element';

export const oakLinkStyles = css`
  a.oak-link {
    text-decoration: none;
  }
  a.oak-link.oak-link-hover:hover,
  a.oak-link.oak-link-always {
    text-decoration: underline;
  }

  button.oak-link {
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    background: none;
  }
  button.oak-link.oak-link-hover:hover,
  button.oak-link.oak-link-always {
    text-decoration: underline;
  }
  .oak-link--container {
    display: flex;
  }

  a.oak-link:focus,
  button.oak-link:focus {
    // outline: none;
    // box-shadow: var(--formelement-outline-box-shadow);
    // border: 1px solid var(--formelement-outline-border-color);
    // border-radius: var(--formelement-border-radius);
  }
`;

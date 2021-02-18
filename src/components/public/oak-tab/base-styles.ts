import {css} from 'lit-element';

export const oakTabBaseStyles = css`
  .oak-tab-accent__button,
  .oak-tab-fill__button,
  .oak-tab-text__button,
  .oak-tab-pills__button {
    border: none;
  }

  .oak-tab-underline__button,
  .oak-tab-accent__button,
  .oak-tab-fill__button,
  .oak-tab-text__button,
  .oak-tab-pills__button {
    display: flex;
    align-items: center;
    position: relative;
    background: none;
    color: var(--color-2);
    gap: 6px;
    padding: 8px 16px;
    /* line-height: 30px; */
    white-space: nowrap;
    text-align: center;
  }
  .oak-tab-underline__button,
  .oak-tab-accent__button,
  .oak-tab-fill__button,
  .oak-tab-text__button {
    font-size: 16px;
    height: 40px;
  }
  .oak-tab-pills__button {
    font-size: 14px;
    height: 30px;
    margin: 0 10px 10px 0;
  }
  .oak-tab-underline__button:focus,
  .oak-tab-accent__button:focus,
  .oak-tab-fill__button:focus,
  .oak-tab-text__button:focus,
  .oak-tab-pills__button:focus {
    outline: none;
  }
  .oak-tab-underline__button--rounded,
  .oak-tab-accent__button--rounded,
  .oak-tab-fill__button--rounded,
  .oak-tab-text__button--rounded {
    border-radius: 10px 10px 0 0;
  }

  .oak-tab-pills__button--rounded {
    border-radius: var(--global-border-radius);
  }
  .oak-tab-underline__button:focus,
  .oak-tab-accent__button:focus,
  .oak-tab-fill__button:focus,
  .oak-tab-text__button:focus,
  .oak-tab-pills__button:focus {
    background-color: var(--color-default-transparent);
  }

  .oak-tab-underline__button:hover,
  .oak-tab-underline__button:focus,
  .oak-tab-accent__button:hover,
  .oak-tab-accent__button:focus,
  .oak-tab-fill__button:hover,
  .oak-tab-fill__button:focus,
  .oak-tab-text__button:hover,
  .oak-tab-text__button:focus,
  .oak-tab-pills__button:hover,
  .oak-tab-pills__button:focus {
    color: var(--color-1);
  }

  .oak-tab-underline__header,
  .oak-tab-accent__header,
  .oak-tab-fill__header,
  .oak-tab-text__header,
  .oak-tab-pills__header {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    // overflow-x: auto;
    // -webkit-overflow-scrolling: touch;
    overflow: hidden;
  }

  .oak-tab-underline__header--baseline,
  .oak-tab-accent__header--baseline,
  .oak-tab-fill__header--baseline,
  .oak-tab-text__header--baseline,
  .oak-tab-pills__header--baseline {
    box-shadow: inset 0 -1px 0 var(--color-info);
  }

  .oak-tab-underline__tab--hidden,
  .oak-tab-accent__tab--hidden,
  .oak-tab-fill__tab--hidden,
  .oak-tab-text__tab--hidden,
  .oak-tab-pills__tab--hidden {
    display: none;
  }
  .oak-tab-underline__button--fill,
  .oak-tab-accent__button--fill,
  .oak-tab-fill__button--fill,
  .oak-tab-text__button--fill,
  .oak-tab-pills__button--fill {
    background-color: var(--color-default-transparent);
  }
  .oak-tab-underline__button--fill,
  .oak-tab-accent__button--fill,
  .oak-tab-fill__button--fill,
  .oak-tab-text__button--fill {
    margin: 0 2px;
  }
  .oak-tab-pills__button--fill {
    margin: 0 10px 10px 0;
  }
  .oak-tab-underline__button--fill:hover,
  .oak-tab-accent__button--fill:hover,
  .oak-tab-fill__button--fill:hover,
  .oak-tab-text__button--fill:hover,
  .oak-tab-pills__button--fill:hover,
  .oak-tab-underline__button--fill:focus,
  .oak-tab-accent__button--fill:focus,
  .oak-tab-fill__button--fill:focus,
  .oak-tab-text__button--fill:focus,
  .oak-tab-pills__button--fill:focus {
    background-color: var(--color-default-semitransparent1);
  }
`;

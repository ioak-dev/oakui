import {css} from 'lit-element';

export const oakTabStyles = css`
  .oak-tab {
  }
  .oak-tab__header {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    // overflow-x: auto;
    // -webkit-overflow-scrolling: touch;
    box-shadow: inset 0 -1px 0 var(--color-info);
    overflow: hidden;
  }
  .oak-tab__tab {
    /* visibility: visible; */
    /* display: none; */
  }
  .oak-tab__tab--hidden {
    display: none;
  }

  .oak-tab__hiddentab {
    visibility: hidden;
  }

  .oak-tab__button {
    padding: 8px 16px;
    line-height: 30px;
    font-size: 14px;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    background: none;
    color: var(--color-i1);
    border: none;
    border-bottom: 2px solid transparent;
  }
  .oak-tab__button:hover {
    border-bottom: 2px solid var(--color-default);
  }
  .oak-tab__button:focus {
    outline: none;
    border-bottom: 2px solid var(--color-default);
  }
  .oak-tab__button--active,
  .oak-tab__button--active:hover,
  .oak-tab__button--active:focus {
    border-bottom: 2px solid var(--color-primary);
  }

  .oak-tab__overflow-menu__trigger {
    padding: 8px 16px;
    line-height: 30px;
    font-size: 14px;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    background: none;
    color: var(--color-i1);
    border: none;
    border-bottom: 2px solid transparent;
  }
  .oak-tab__overflow-menu__trigger:hover {
    border-bottom: 2px solid var(--color-default);
  }
  .oak-tab__overflow-menu__trigger:focus {
    outline: none;
    border-bottom: 2px solid var(--color-default);
  }
  .oak-tab__overflow-menu__trigger--active,
  .oak-tab__overflow-menu__trigger--active:hover,
  .oak-tab__overflow-menu__trigger--active:focus {
    border-bottom: 2px solid var(--color-primary);
  }
`;

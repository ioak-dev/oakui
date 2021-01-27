import {css} from 'lit-element';

export const oakInternalModalHeaderStyles = css`
  .oak-internal-modal-header {
    padding: 20px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--global-color-fg);
  }
  @media (max-width: 767px) {
    .oak-internal-modal-header {
      padding: 20px 10px;
    }
  }
  .oak-internal-modal-header .left {
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
  .oak-internal-modal-header .left .icon {
    border: 1.4px solid var(--color-primary-1);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .oak-internal-modal-header .left .icon .material-icons {
    display: flex;
    align-items: center;
  }
  .oak-internal-modal-header .left .label {
    font-size: 16px;
    font-weight: 500;
    color: var(--global-color-fg);
  }
  .oak-internal-modal-header .right {
    cursor: pointer;
    color: var(--global-color-fg);
  }
  .oak-internal-modal-header .right .material-icons {
    display: flex;
    align-items: center;
    margin-left: 5px;
    font-size: 16px;
    font-weight: 500;
  }
  .oak-internal-modal-header .right .material-icons.modal-close-icon {
    transition: transform 0.2s ease-in-out;
  }
  .oak-internal-modal-header .right .material-icons.modal-close-icon:hover {
    transform: rotate(90deg);
  }
  .oak-internal-modal-header .right .text-esc {
    vertical-align: middle;
    margin-left: 5px;
    font-size: 1.2em;
  }
  .oak-internal-modal-header .right:hover {
    color: var(--global-color-fg);
    color: var(--color-danger-1);
  }
`;

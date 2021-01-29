import {css} from 'lit-element';

export const oakPopoverStyles = css`
  .oak-popover {
    // transition: 0.5s;
    // cursor: pointer;
    // display: flex;
  }
  .oak-popover .oak-popover--container {
    position: relative;
  }
  .oak-popover .oak-popover--container .content {
    position: absolute;
    visibility: visible;
    opacity: 1;
    transform: translateX(-0%) translateY(10px);
    background-color: #d0d0d0;
    padding: 100px;
  }
  .content:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #d0d0d0;
    top: 0;
    transform: rotate(45deg);
    left: 15px;
  }
`;

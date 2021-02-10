import {css} from 'lit-element';

export const oakButtonSizeStyles = css`
  button.size-xsmall {
    font-size: var(--formelement-button-fontsize-xsmall);
    padding: 0 10px;
    height: var(--formelement-height-xsmall);
  }
  button.size-xsmall .button-label-container .svg-inline--fa {
    font-size: 10px;
  }
  button.size-xsmall .button-label-container .MuiSvgIcon-root {
    font-size: 14px;
  }
  button.size-small {
    font-size: var(--formelement-button-fontsize-small);
    padding: 4px 15px;
    height: var(--formelement-height-small);
  }
  button.size-small .button-label-container .svg-inline--fa {
    font-size: 12px;
  }
  button.size-small .button-label-container .MuiSvgIcon-root {
    font-size: 16px;
  }
  button.size-medium {
    font-size: var(--formelement-button-fontsize-medium);
    padding: 5px 20px;
    height: var(--formelement-height-medium);
  }
  button.size-medium .button-label-container .svg-inline--fa {
    font-size: 14px;
  }
  button.size-medium .button-label-container .MuiSvgIcon-root {
    font-size: 18px;
  }
  button.size-large {
    font-size: var(--formelement-button-fontsize-large);
    padding: 15px 30px;
    height: var(--formelement-height-large);
  }
  button.size-large .button-label-container .svg-inline--fa {
    font-size: 14px;
  }
  button.size-large .button-label-container .MuiSvgIcon-root {
    font-size: 18px;
  }
  button.small {
    padding: 0 8px;
  }
  button.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    padding: 0;
    border-radius: 50%;
  }
  button.icon.size-xsmall {
    height: var(--formelement-height-xsmall);
    width: var(--formelement-height-xsmall);
  }
  button.icon.size-small {
    height: var(--formelement-height-small);
    width: var(--formelement-height-small);
  }
  button.icon.size-medium {
    height: var(--formelement-height-medium);
    width: var(--formelement-height-medium);
  }
  button.icon.size-large {
    height: var(--formelement-height-large);
    width: var(--formelement-height-large);
  }
`;

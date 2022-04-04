import {css} from 'lit-element';

export const oakInputSizeStyles = css`
  .oak-input--size-xsmall {
    font-size: var(--formelement-fontsize-xsmall);
    min-height: var(--formelement-height-xsmall);
  }
  .oak-input--size-small {
    font-size: var(--formelement-fontsize-small);
    min-height: var(--formelement-height-small);
  }
  .oak-input--size-medium {
    font-size: var(--formelement-fontsize-medium);
    min-height: var(--formelement-height-medium);
  }
  .oak-input--size-large {
    font-size: var(--formelement-fontsize-large);
    min-height: var(--formelement-height-large);
  }

  .oak-input--size-xsmall[type='file'] {
    line-height: var(--formelement-height-xsmall);
  }
  .oak-input--size-small[type='file'] {
    line-height: var(--formelement-height-small);
  }
  .oak-input--size-medium[type='file'] {
    line-height: var(--formelement-height-medium);
  }
  .oak-input--size-large[type='file'] {
    line-height: var(--formelement-height-large);
  }
`;

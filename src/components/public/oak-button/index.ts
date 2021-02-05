import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../../global-styles';
import '../../private/oak-internal-label';
import {BUTTON_CLICK_EVENT} from '../../../types/ButtonEventTypes';
import {formControlSubmitSubject} from '../../../events/FormControlSubmitEvent';
import {formControlResetSubject} from '../../../events/FormControlResetEvent';
import {oakButtonSizeStyles} from './size-styles';
import {oakButtonShapeStyles} from './shape-styles';
import {oakButtonBaseStyles} from './base-styles';
import {oakButtonVariantAppearStyles} from './variant-appear-styles';
import {oakButtonVariantRegularStyles} from './variant-regular-styles';
import {oakButtonVariantDisappearStyles} from './variant-disappear-styles';
import {oakButtonVariantDramaStyles} from './variant-drama-styles';
import {oakButtonVariantOutlineStyles} from './variant-outline-styles';
import {oakButtonVariantBlockStyles} from './variant-block-styles';
import {oakButtonVariantDisabledStyles} from './variant-disabled-styles';

let elementIdCounter = 0;

/**
 * Button element.
 *
 */
@customElement('oak-button')
export class OakButton extends LitElement {
  private elementId = `oak-button-${elementIdCounter++}`;

  @property({type: String})
  variant?:
    | 'block'
    | 'outline'
    | 'appear'
    | 'disappear'
    | 'regular'
    | 'disabled'
    | 'drama' = 'regular';

  @property({type: String})
  theme?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info' = 'primary';

  @property({type: String})
  size?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  shape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' | 'icon' = 'rectangle';

  @property({type: Boolean})
  semitransparent = false;

  @property({type: String})
  type: 'button' | 'submit' | 'reset' = 'button';

  @property({type: String})
  formGroupName?: string;

  computeStyle = () => {
    let style = `${this.theme} ${this.variant}`;

    if (this.shape === 'icon') {
      style += ' icon';
    }

    if (this.semitransparent) {
      style += ' semitransparent';
    }

    style += ` size-${this.size}`;
    style += ` shape-${this.shape}`;

    return style;
  };

  constructor() {
    super();
  }

  static get styles() {
    return [
      ...globalStyles,
      oakButtonBaseStyles,
      oakButtonSizeStyles,
      oakButtonShapeStyles,
      oakButtonVariantAppearStyles,
      oakButtonVariantRegularStyles,
      oakButtonVariantDisappearStyles,
      oakButtonVariantBlockStyles,
      oakButtonVariantDramaStyles,
      oakButtonVariantOutlineStyles,
      oakButtonVariantDisabledStyles,
    ];
  }

  private handleClick = (event: any) => {
    switch (this.type) {
      case 'submit':
        this.handleSubmit();
        break;

      case 'reset':
        this.handleReset();
        break;

      default:
        this.propagateEvent(BUTTON_CLICK_EVENT, event);
        break;
    }
  };

  private handleSubmit = () => {
    if (this.formGroupName) {
      formControlSubmitSubject.next({
        formGroupName: this.formGroupName,
      });
    }
  };

  private handleReset = () => {
    if (this.formGroupName) {
      formControlResetSubject.next({
        formGroupName: this.formGroupName,
      });
    }
  };

  private propagateEvent = (eventName: string, event: any) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: event.srcElement.id,
          formGroup: this.formGroupName,
        },
      })
    );
  };

  render() {
    return html`
      <button
        class=${`oak-button ${this.computeStyle()}`}
        @click=${this.handleClick}
        id=${this.elementId}
        type=${this.type}
      >
        <div class="button-label-container">
          <slot></slot>
        </div>
      </button>
    `;
  }
}

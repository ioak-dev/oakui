import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../../global-styles';
import {oakButtonStyles} from './index-styles';
import '../../private/oak-internal-label';
import {BUTTON_CLICK_EVENT} from '../../../types/ButtonEventTypes';
import {formControlSubmitSubject} from '../../../events/FormControlSubmitEvent';
import {formControlResetSubject} from '../../../events/FormControlResetEvent';
import {oakButtonSizeStyles} from './size-styles';
import {oakButtonShapeStyles} from './shape-styles';

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

  @property({type: String})
  visualmode: 'dark' | 'light' = 'dark';

  @property({type: String})
  type: 'button' | 'submit' | 'reset' = 'button';

  @property({type: String})
  formGroupName?: string;

  computeStyle = () => {
    let style = `${this.theme} ${this.variant}`;

    if (this.shape === 'icon') {
      style += ' icon';
    }

    style += ` ${this.visualmode}`;
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
      oakButtonStyles,
      oakButtonSizeStyles,
      oakButtonShapeStyles,
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

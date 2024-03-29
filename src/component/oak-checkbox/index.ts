import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {checkboxChangeSubject} from '../../_internal/events/CheckboxChangeEvent';
import {checkboxRegisterSubject} from '../../_internal/events/CheckboxRegisterEvent';
import {globalStyles} from '../../_internal/styles/global-styles';
import {INPUT_CHANGE_EVENT} from '../../event/OakInputEvent';

import {oakCheckboxStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Checkbox component.
 *
 */
const customElementName = 'oak-checkbox';
@customElement(customElementName)
export class OakCheckbox extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Boolean})
  value = false;

  @property({type: String})
  name = '';

  @property({type: String})
  color?:
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

  /**
   * 	If true, the element will have a bottom margin.
   */
  @property({type: Boolean})
  gutterBottom?: boolean = false;

  @property({type: String})
  checkboxGroupName?: string | null | undefined = null;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  private init() {
    if (this.checkboxGroupName) {
      checkboxRegisterSubject.next({
        name: this.name,
        checkboxGroupName: this.checkboxGroupName,
        value: this.value,
      });
    }
  }

  private _handleChange = () => {
    this.propagateEvent(INPUT_CHANGE_EVENT);
  };

  private propagateEvent = (eventName: string) => {
    const _value = !this.value;
    if (this.checkboxGroupName) {
      checkboxChangeSubject.next({
        name: this.name,
        value: _value,
        checkboxGroupName: this.checkboxGroupName,
      });
    }
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: this.name,
          value: _value,
        },
      })
    );
  };

  private getClassMap(
    baseClass:
      | 'base'
      | 'input-container'
      | 'input'
      | 'checkbox-svg'
      | 'label-container'
      | 'label'
  ): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          'oak-gutter-bottom': this.gutterBottom,
        };
      case 'input-container':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'checkbox-svg':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--color-${this.color}`]: true,
          [`${customElementName}__${baseClass}--checked`]: this.value,
          [`${customElementName}__${baseClass}--notchecked`]: !this.value,
          [`${customElementName}__${baseClass}--size-${this.size}`]: true,
        };
      case 'input':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--hidden`]: true,
        };
      case 'label-container':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'label':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakCheckboxStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))}>
        <span class=${classMap(this.getClassMap('input-container'))}>
          <input
            class=${classMap(this.getClassMap('input'))}
            type="checkbox"
            name=${this.name}
            ?checked=${this.value}
            id=${this.elementId}
            @change=${this._handleChange}
          />
          ${this.value
            ? html`<svg
                class=${classMap(this.getClassMap('checkbox-svg'))}
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                ></path>
              </svg>`
            : html` <svg
                class=${classMap(this.getClassMap('checkbox-svg'))}
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                ></path>
              </svg>`}
        </span>
        <span class=${classMap(this.getClassMap('label-container'))}>
          <slot></slot>
        </span>
      </div>
    `;
  }
}

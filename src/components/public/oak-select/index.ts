import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../../global-styles';
import '../../private/oak-internal-select-native';
import '../../private/oak-internal-select-modern';
import {oakSelectStyles} from './index-styles';

let elementIdCounter = 0;
const customElementName = 'oak-select';

/**
 * Select drop down (native) form element.
 *
 */
@customElement(customElementName)
export class OakSelect extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String, reflect: true})
  id = `${customElementName}-${elementIdCounter++}-id`;

  @property({type: String})
  formGroupName?: string;

  @property({type: String})
  label?: string | null = null;

  @property()
  value?: string | number | null;

  @property({type: String})
  placeholder?: string = '';

  @property({type: Boolean})
  multiple?: boolean = false;

  @property({type: String})
  tooltip?: string = '';

  @property({type: String})
  name: string = this.elementId;

  @property({type: Boolean})
  disabled = false;

  @property({type: Array})
  options?: any[] | null;

  @property({type: Array})
  optionsAsKeyValue?: {key: string | number; value: string | number}[] | null;

  @property({type: Boolean})
  native? = false;

  @property({type: String})
  size?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  shape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' = 'rectangle';

  constructor() {
    super();
  }

  static get styles() {
    return [...globalStyles, oakSelectStyles];
  }

  // private handleInput = (event: any) => {
  //   console.log('input', event);
  //   this.propagateEvent(INPUT_INPUT_EVENT, event);
  // };

  // private handleChange = (event: any) => {
  //   console.log('change', event);
  //   this.propagateEvent(INPUT_CHANGE_EVENT, event);
  // };

  // private propagateEvent = (eventName: string, event: any, value?: any) => {
  //   this.value = event.srcElement.value;
  //   this.dispatchEvent(
  //     new CustomEvent(eventName, {
  //       bubbles: true,
  //       composed: true,
  //       detail: {
  //         id: event.srcElement.id,
  //         name: event.srcElement.name,
  //         value: value || event.srcElement.value,
  //       },
  //     })
  //   );
  // };

  render() {
    return html`
      ${this.native
        ? html`<oak-internal-select-native
            .formGroupName=${this.formGroupName}
            .label=${this.label}
            .name=${this.name}
            .value=${this.value}
            .placeholder=${this.placeholder}
            .tooltip=${this.tooltip}
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            .options=${this.options}
            .optionsAsKeyValue=${this.optionsAsKeyValue}
            .size=${this.size}
            .shape=${this.shape}
          ></oak-internal-select-native>`
        : html`<oak-internal-select-modern
            .formGroupName=${this.formGroupName}
            .label=${this.label}
            .name=${this.name}
            .value=${this.value}
            .placeholder=${this.placeholder}
            .tooltip=${this.tooltip}
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            .options=${this.options}
            .optionsAsKeyValue=${this.optionsAsKeyValue}
            .size=${this.size}
            .shape=${this.shape}
          ></oak-internal-select-modern>`}
    `;
  }
}

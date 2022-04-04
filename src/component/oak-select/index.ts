import {LitElement, html, customElement, property} from 'lit-element';
import {globalStyles} from '../../_internal/styles/global-styles';
import '../../_internal/component/oak-internal-select-native';
import '../../_internal/component/oak-internal-select-modern';
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
  label?: string | null | undefined = null;

  @property()
  value?: string | number | null;

  @property()
  values?: any[] | null;

  @property({type: Boolean})
  required?: boolean = false;

  @property({type: Array})
  actionItems?: string[];

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
  optionsAsKeyValue?: {id: string | number; value: string | number}[] | null;

  @property({type: Boolean})
  native? = false;

  @property({type: Boolean})
  fill? = false;

  @property({type: String})
  size?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String}) shape?:
    | 'sharp'
    | 'rectangle'
    | 'rounded'
    | 'leaf'
    | 'underline' = 'rectangle';

  @property({type: String})
  color?:
    | 'global'
    | 'container'
    | 'surface'
    | 'float'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'info'
    | 'invert'
    | 'danger'
    | 'warning'
    | 'success'
    | 'none' = 'container';

  @property({type: String})
  popupColor?:
    | 'global'
    | 'container'
    | 'surface'
    | 'float'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'info'
    | 'invert'
    | 'danger'
    | 'warning'
    | 'success'
    | 'auto' = 'auto';

  @property({type: Boolean})
  autocomplete? = false;

  @property({type: String})
  positioningStrategy?: 'absolute' | 'fixed' = 'absolute';

  /**
   * 	If true, the text will have a bottom margin.
   */
  @property({type: Boolean})
  gutterBottom?: boolean = false;

  constructor() {
    super();
  }

  static get styles() {
    return [...globalStyles, oakSelectStyles];
  }

  render() {
    return html`
      ${this.native
        ? html`<oak-internal-select-native
            .formGroupName=${this.formGroupName}
            .label=${this.label}
            .name=${this.name}
            .value=${this.value}
            .values=${this.values}
            .placeholder=${this.placeholder}
            .tooltip=${this.tooltip}
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            ?fill=${this.fill}
            .options=${this.options}
            .optionsAsKeyValue=${this.optionsAsKeyValue}
            .size=${this.size}
            .shape=${this.shape}
            .color=${this.color}
            .popupColor=${this.popupColor}
            ?gutterBottom=${this.gutterBottom}
            .actionItems=${this.actionItems}
            ?required=${this.required}
          ></oak-internal-select-native>`
        : html`<oak-internal-select-modern
            .formGroupName=${this.formGroupName}
            .label=${this.label}
            .name=${this.name}
            .value=${this.value}
            .values=${this.values}
            .placeholder=${this.placeholder}
            .tooltip=${this.tooltip}
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            ?fill=${this.fill}
            .options=${this.options}
            .optionsAsKeyValue=${this.optionsAsKeyValue}
            .size=${this.size}
            .shape=${this.shape}
            .color=${this.color}
            .popupColor=${this.popupColor}
            .autocomplete=${this.autocomplete}
            .positioningStrategy=${this.positioningStrategy}
            ?gutterBottom=${this.gutterBottom}
            .actionItems=${this.actionItems}
            ?required=${this.required}
          ></oak-internal-select-modern>`}
    `;
  }
}

import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {TableHeaderType} from '../../../types/TableHeaderType';
import {formatDate} from '../../../utils/DateUtils';
import {oakInternalTableCellStyles} from './index-styles';

import '../../public/oak-input';
import '../../public/oak-select';

import {TABLE_DATA_CHANGE_EVENT} from '../../../types/TableEventTypes';

let elementIdCounter = 0;

/**
 * oak-internal-table-cell.
 *
 */
const customElementName = 'oak-internal-table-cell';
@customElement(customElementName)
export class OakInternalTableCell extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Object})
  header: TableHeaderType = {
    label: '',
    name: '',
    dtype: 'text',
  };

  @property({type: Object})
  row: any;

  @property({type: String})
  fill?: 'container' | 'surface' | 'float' | 'none' = 'surface';

  @property({type: String})
  formElementSize?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  formElementShape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' = 'rectangle';

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  private _handleCellDataChange(event: any) {
    this._propagateEvent(TABLE_DATA_CHANGE_EVENT, event);
  }

  private _propagateEvent = (eventName: string, event: any, value?: any) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: event.srcElement.id,
          data: {
            row: this.row,
            name: this.header.name,
            value: value || event.srcElement.value,
          },
        },
      })
    );
  };

  private _getCellValue() {
    const dtype = this.header.dtype || 'text';
    if (this.header.dtype === 'date') {
      return html`${formatDate(this.row[this.header.name])}`;
    } else if (['input', 'input_text'].includes(dtype)) {
      return html`<oak-input
        .value=${this.row[this.header.name]}
        .name=${this.header.name}
        .fill=${this.fill}
        .size=${this.formElementSize}
        .shape=${this.formElementShape}
        @input-input=${this._handleCellDataChange}
      ></oak-input>`;
    } else if (['input_number'].includes(dtype)) {
      return html`<oak-input
        .value=${this.row[this.header.name]}
        .name=${this.header.name}
        .fill=${this.fill}
        .size=${this.formElementSize}
        .shape=${this.formElementShape}
        type="number"
        @input-input=${this._handleCellDataChange}
      ></oak-input>`;
    } else if (['input_select'].includes(dtype)) {
      return html`<oak-select
        .value=${this.row[this.header.name]}
        .name=${this.header.name}
        .fill=${this.fill}
        .size=${this.formElementSize}
        .shape=${this.formElementShape}
        @input-input=${this._handleCellDataChange}
        .options=${['fr', 'gr', 'lorem ipsum dolor sit', 'dolor']}
      ></oak-select>`;
    } else {
      return html`${this.row[this.header.name]}`;
    }
  }

  private getClassMap(baseClass: 'base'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakInternalTableCellStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        ${this._getCellValue()}
      </div>
    `;
  }
}

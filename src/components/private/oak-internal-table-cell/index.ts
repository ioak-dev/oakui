import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {TableHeaderType} from '../../../types/TableHeaderType';
import {oakInternalTableCellStyles} from './index-styles';

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
  header?: TableHeaderType;

  @property({type: Object})
  row: any;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
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
    return html` ${this.header && this.row
      ? html`
          <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
            ${this.row[this.header?.name]}abcd
          </div>
        `
      : html``}`;
  }
}

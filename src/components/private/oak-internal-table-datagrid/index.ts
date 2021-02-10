import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {TableHeaderType} from '../../../types/TableHeaderType';
import {oakInternalTableDatagridBaseStyles} from './base-styles';

import {TABLE_SORT_EVENT} from '../../../types/TableEventTypes';

import '../oak-internal-table-cell';

let elementIdCounter = 0;

/**
 * oak-internal-table-datagrid.
 *
 */
const customElementName = 'oak-internal-table-datagrid';
@customElement(customElementName)
export class OakInternalTableDatagrid extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Array})
  header: TableHeaderType[] = [];

  @property({type: Array})
  data: any[] = [];

  @property({type: String})
  sortBy: string | null = null;

  @property({type: Boolean})
  sortAsc = true;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  private _sort = (name: string) => {
    this._propagateEvent(TABLE_SORT_EVENT, {name});
  };

  private _propagateEvent = (eventName: string, detail?: any) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail,
      })
    );
  };

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
    return [...globalStyles, oakInternalTableDatagridBaseStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <table>
          <thead>
            <tr>
              ${this.header?.map(
                (header) =>
                  html` <th @click=${() => this._sort(header.name)}>
                    <span>
                      ${header.label}
                      ${this.sortBy === header.name && this.sortAsc
                        ? html`<`
                        : html``}
                      ${this.sortBy === header.name && !this.sortAsc
                        ? html`>`
                        : html``}
                    </span>
                  </th>`
              )}
            </tr>
          </thead>
          <tbody>
            ${this.data?.map(
              (row) => html`<tr>
                ${this.header.map(
                  (header) =>
                    html`<td>
                      <oak-internal-table-cell .header=${header} .row=${row} />
                    </td>`
                )}
              </tr>`
            )}
          </tbody>
        </table>
      </div>
    `;
  }
}

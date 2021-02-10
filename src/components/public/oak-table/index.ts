import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {TableHeaderType} from '../../../types/TableHeaderType';

import {oakTableStyles} from './index-styles';

import '../../private/oak-internal-table-datagrid';
import '../../private/oak-internal-table-paginate';

let elementIdCounter = 0;

/**
 * Table component.
 *
 */
const customElementName = 'oak-table';
@customElement(customElementName)
export class OakCard extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Array})
  header: TableHeaderType[] = [];

  @property({type: Array})
  data: any[] = [];

  @property({type: Object})
  paginationPref = {
    pageNo: 1,
    rowsPerPage: 6,
    sortBy: '',
    sortAsc: true,
  };

  constructor() {
    super();
  }

  private _onChangePage = (event: any) => {
    console.log(event.detail);
  };

  private _onSortChange = (event: any) => {
    console.log('***sort', event);
    const fieldName = event.detail.name;
    let _sortBy = '';
    let _sortAsc = true;
    if (this.paginationPref.sortBy === fieldName) {
      if (this.paginationPref.sortAsc) {
        _sortBy = this.paginationPref.sortBy;
        _sortAsc = false;
      }
    } else {
      _sortBy = fieldName;
      _sortAsc = true;
    }
    console.log('**', _sortAsc, _sortBy);
    this.paginationPref = {
      ...this.paginationPref,
      sortBy: _sortBy,
      sortAsc: _sortAsc,
    };
  };

  private getClassMap(baseClass: 'base'): any {
    switch (baseClass) {
      case 'base':
        const data = {
          [customElementName]: true,
        };
        return data;
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakTableStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <oak-internal-table-paginate
          @table-page-change=${this._onChangePage}
          .header=${this.header}
          .itemCount=${this.data.length}
        >
        </oak-internal-table-paginate>
        <oak-internal-table-datagrid
          .header=${this.header}
          .data=${this.data}
          .sortAsc=${this.paginationPref.sortAsc}
          .sortBy=${this.paginationPref.sortBy}
          @table-sort=${this._onSortChange}
        >
        </oak-internal-table-datagrid>
      </div>
    `;
  }
}

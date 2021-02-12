import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {TableHeaderType} from '../../../types/TableHeaderType';
import {TABLE_PAGINATE_EVENT} from '../../../types/TableEventTypes';

import {oakTableStyles} from './index-styles';

import '../../private/oak-internal-table-datagrid';
import '../../private/oak-internal-table-paginate';
import {paginate} from './service';

let elementIdCounter = 0;

/**
 * Table component.
 *
 */
const customElementName = 'oak-table';
@customElement(customElementName)
export class OakTable extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String, reflect: true})
  id = `${this.elementId}-id`;

  @property({type: Array})
  header: TableHeaderType[] = [];

  @property({type: Array})
  data: any[] = [];

  /**
   * Applicable when serverSidePagination = true
   */
  @property({type: Number})
  totalRows?: number = 0;

  @property({type: Boolean})
  serverSidePagination? = false;
  @property({type: Number})
  elevation?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24 = 1;

  @property({type: Boolean})
  rounded?: boolean = false;

  @property({type: String})
  variant?: 'outlined' | null = null;

  @property({type: String})
  fill?: 'container' | 'surface' | 'float' | 'none' = 'surface';

  @property({type: String})
  navPlacement?: 'top' | 'bottom' | 'none' = 'top';

  @property({type: String})
  formElementSize?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  formElementShape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' = 'rectangle';

  @property({type: Boolean})
  dense = false;

  @property({type: Object})
  private _paginationPref = {
    pageNo: 1,
    rowsPerPage: 6,
    sortBy: '',
    sortAsc: true,
    searchText: '',
  };

  @property({type: Array})
  private _view = this.data;

  constructor() {
    super();
  }

  private _onPageChange = (event: any) => {
    this._paginationPref = {
      ...this._paginationPref,
      rowsPerPage: event.detail.rowsPerPage,
      pageNo: event.detail.pageNo,
    };
    this._paginate();
  };

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    _changedProperties.forEach((_, propName) => {
      if (propName === 'data') {
        this._paginate();
      }
    });
    return true;
  }

  private _onSearchChange = (event: any) => {
    this._paginationPref = {
      ...this._paginationPref,
      searchText: event.detail.searchText,
    };
    this._paginate();
  };

  private _onSortChange = (event: any) => {
    const fieldName = event.detail.name;
    let _sortBy = '';
    let _sortAsc = true;
    if (this._paginationPref.sortBy === fieldName) {
      if (this._paginationPref.sortAsc) {
        _sortBy = this._paginationPref.sortBy;
        _sortAsc = false;
      }
    } else {
      _sortBy = fieldName;
      _sortAsc = true;
    }
    this._paginationPref = {
      ...this._paginationPref,
      sortBy: _sortBy,
      sortAsc: _sortAsc,
    };
    this._paginate();
  };

  private _paginate = () => {
    if (this.serverSidePagination) {
      this._propagateEvent(TABLE_PAGINATE_EVENT, this._paginationPref);
    } else {
      this._view = paginate(this.data, this.header, this._paginationPref);
    }
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

  private _getDataGrid() {
    return this.serverSidePagination ? this.data : this._view;
  }

  private _getTotalRows() {
    return this.serverSidePagination ? this.totalRows : this.data.length;
  }

  private getClassMap(baseClass: 'base' | 'datagrid'): any {
    switch (baseClass) {
      case 'base':
        const data = {
          [customElementName]: true,
          [`oak-bs-elevation${this.elevation}`]: true,
          'oak-rounded': this.rounded,
          [`oak-fill-${this.fill}`]: true,
        };
        if (this.variant) {
          data[`oak-${this.variant}`] = true;
        }
        return data;
      case 'datagrid':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--nav-${this.navPlacement}`]: true,
          [`${customElementName}__${baseClass}--fill-${this.fill}`]: true,
        };
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
        ${this.navPlacement === 'top'
          ? html`<oak-internal-table-paginate
              @table-change-page=${this._onPageChange}
              @table-search=${this._onSearchChange}
              .header=${this.header}
              .itemCount=${this._getTotalRows()}
              .fill=${this.fill}
              .formElementSize=${this.formElementSize}
              .formElementShape=${this.formElementShape}
            >
            </oak-internal-table-paginate>`
          : html``}
        <div class=${classMap(this.getClassMap('datagrid'))}>
          <oak-internal-table-datagrid
            .header=${this.header}
            .data=${this._getDataGrid()}
            ?sortAsc=${this._paginationPref.sortAsc}
            .sortBy=${this._paginationPref.sortBy}
            ?dense=${this.dense}
            .fill=${this.fill}
            .formElementSize=${this.formElementSize}
            .formElementShape=${this.formElementShape}
            @table-sort=${this._onSortChange}
          >
          </oak-internal-table-datagrid>
        </div>
        ${this.navPlacement === 'bottom'
          ? html`<oak-internal-table-paginate
              @table-change-page=${this._onPageChange}
              @table-search=${this._onSearchChange}
              .header=${this.header}
              .itemCount=${this._getTotalRows()}
              .fill=${this.fill}
              .formElementSize=${this.formElementSize}
              .formElementShape=${this.formElementShape}
            >
            </oak-internal-table-paginate>`
          : html``}
      </div>
    `;
  }
}

import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';
import {PAGINATE_CHANGE_EVENT} from '../../event/OakPaginateEvent';

import {oakPaginateStyles} from './index-styles';

import '../oak-select';
import '../../_internal/component/oak-internal-paginate-filter';
import {PaginatePref} from '../../types/PaginatePrefType';

let elementIdCounter = 0;

/**
 * Table component.
 *
 */
const customElementName = 'oak-paginate';
@customElement(customElementName)
export class OakPaginate extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Number})
  totalRows = 0;

  @property({type: String})
  label = 'Rows per page';

  @property({type: String})
  formElementSize?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  formElementShape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' = 'rectangle';

  @property({type: String})
  formElementFill?: 'container' | 'surface' | 'float' | 'none' = 'surface';

  @property({type: Array})
  private _rowsPerPageVariants = ['5', '10', '20', '50'];

  @property({type: Object})
  paginatePref: PaginatePref = {
    pageNo: 1,
    rowsPerPage: 5,
    searchText: '',
  };

  constructor() {
    super();
  }

  private _previousPage = () => {
    if (this.paginatePref.pageNo !== 1) {
      this._pageChanged({
        ...this.paginatePref,
        pageNo: this.paginatePref.pageNo - 1,
      });
    }
  };

  private _pageChanged = (_paginatePref: PaginatePref) => {
    this._propagateEvent(PAGINATE_CHANGE_EVENT, _paginatePref);
  };

  private _nextPage = () => {
    if (
      Math.ceil(this.totalRows / this.paginatePref.rowsPerPage) !==
      this.paginatePref.pageNo
    ) {
      this._pageChanged({
        ...this.paginatePref,
        pageNo: this.paginatePref.pageNo + 1,
      });
    }
  };

  private _onRowsPerPageChange = (event: any) => {
    const firstItemNoInCurrentView =
      (this.paginatePref.pageNo - 1) * this.paginatePref.rowsPerPage + 1;
    this._pageChanged({
      ...this.paginatePref,
      rowsPerPage: event.detail.value,
      pageNo: Math.ceil(firstItemNoInCurrentView / event.detail.value),
    });
  };

  private _onSearchChange = (event: any) => {
    this._pageChanged({
      ...this.paginatePref,
      pageNo: 1,
      searchText: event.detail.searchText,
    });
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

  private _currentPageStart = () => {
    return (this.paginatePref.pageNo - 1) * this.paginatePref.rowsPerPage + 1;
  };

  private _currentPageEnd = () => {
    return this.paginatePref.pageNo * this.paginatePref.rowsPerPage <
      this.totalRows
      ? this.paginatePref.pageNo * this.paginatePref.rowsPerPage
      : this.totalRows;
  };

  private getClassMap(
    baseClass: 'base' | 'left' | 'right' | 'page-number' | 'page-nav'
  ): any {
    switch (baseClass) {
      case 'base':
        const data = {
          [customElementName]: true,
        };
        return data;
      case 'left':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'right':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'page-number':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'page-nav':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakPaginateStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <div class=${classMap(this.getClassMap('left'))}>
          <oak-internal-paginate-filter
            .formElementFill=${this.formElementFill}
            .formElementSize=${this.formElementSize}
            .formElementShape=${this.formElementShape}
            @paginate-search=${this._onSearchChange}
          ></oak-internal-paginate-filter>
        </div>
        <div class=${classMap(this.getClassMap('right'))}>
          <div>${this.label}</div>
          <div>
            <oak-select
              .value=${this.paginatePref.rowsPerPage}
              name="rowsPerPage"
              @input-change=${this._onRowsPerPageChange}
              .options=${this._rowsPerPageVariants}
              .fill=${this.formElementFill}
              .size=${this.formElementSize}
              .shape=${this.formElementShape}
            ></oak-select>
          </div>
          <div class=${classMap(this.getClassMap('page-number'))}>
            <div>
              ${`${this._currentPageStart()}-${this._currentPageEnd()} of ${
                this.totalRows
              }`}
            </div>
          </div>
          <div class=${classMap(this.getClassMap('page-nav'))}>
            <div>
              <oak-button
                @button-click=${this._previousPage}
                theme="info"
                variant="block"
                shape="icon"
                .size=${this.formElementSize}
                semitransparent
              >
                ${'<'}
              </oak-button>
            </div>
            <div>
              <oak-button
                @button-click=${this._nextPage}
                theme="info"
                variant="block"
                shape="icon"
                .size=${this.formElementSize}
                semitransparent
              >
                ${'>'}
              </oak-button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

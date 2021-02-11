import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {PAGINATE_CHANGE_PAGE_EVENT} from '../../../types/PaginateEventTypes';

import {oakPaginateStyles} from './index-styles';

import '../oak-select';

let elementIdCounter = 0;

/**
 * Table component.
 *
 */
const customElementName = 'oak-paginate';
@customElement(customElementName)
export class OakCard extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Number})
  itemCount = 0;

  @property({type: String})
  label = 'Rows per page';

  @property({type: Number})
  private _rowsPerPage = 5;

  @property({type: Number})
  private _pageNo = 1;

  @property({type: Array})
  private _rowsPerPageVariants = ['5', '10', '20', '50'];

  constructor() {
    super();
  }

  private _previousPage = () => {
    if (this._pageNo !== 1) {
      this._pageNo = this._pageNo - 1;
      this._pageChanged();
    }
  };

  private _pageChanged = () => {
    this._propagateEvent(PAGINATE_CHANGE_PAGE_EVENT, {
      pageNo: this._pageNo,
      rowsPerPage: this._rowsPerPage,
    });
  };

  private _nextPage = () => {
    if (Math.ceil(this.itemCount / this._rowsPerPage) !== this._pageNo) {
      this._pageNo = this._pageNo + 1;
      this._pageChanged();
    }
  };

  private _onRowsPerPageChange = (event: any) => {
    this._rowsPerPage = event.detail.value;
    this._pageChanged();
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
    return (this._pageNo - 1) * this._rowsPerPage + 1;
  };

  private _currentPageEnd = () => {
    return this._pageNo * this._rowsPerPage < this.itemCount
      ? this._pageNo * this._rowsPerPage
      : this.itemCount;
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
          <slot></slot>
        </div>
        <div class=${classMap(this.getClassMap('right'))}>
          <div>${this.label}</div>
          <div>
            <oak-select
              value=${this._rowsPerPage}
              name="rowsPerPage"
              @input-change=${this._onRowsPerPageChange}
              .options=${this._rowsPerPageVariants}
              size="xsmall"
            ></oak-select>
          </div>
          <div class=${classMap(this.getClassMap('page-number'))}>
            <div>
              ${`${this._currentPageStart()}-${this._currentPageEnd()} of ${
                this.itemCount
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
                size="xsmall"
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
                size="xsmall"
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

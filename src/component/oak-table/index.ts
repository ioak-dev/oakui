import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';
import {TABLE_PAGINATE_EVENT} from '../../types/TableEventTypes';

import {oakTableStyles} from './index-styles';

import '../oak-paginate';
import {PaginatePref} from '../../types/PaginatePrefType';

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

  /**
   * Applicable when serverSidePagination = true
   */
  @property({type: Number})
  totalRows = 0;

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
  fill?: 'global' | 'container' | 'surface' | 'float' | 'none' = 'surface';

  @property({type: String})
  navPlacement?: 'top' | 'bottom' | 'none' = 'top';

  @property({type: String})
  formElementSize?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  formElementShape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' = 'rectangle';

  @property({type: Boolean})
  dense = false;

  @property({type: Object})
  paginatePref: PaginatePref = {
    pageNo: 1,
    rowsPerPage: 5,
    searchText: '',
  };

  constructor() {
    super();
  }

  private _onPageChange = (event: any) => {
    this._propagateEvent(TABLE_PAGINATE_EVENT, event.detail);
  };

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    // _changedProperties.forEach((_, propName) => {
    //   if (propName === 'data') {
    //     this._paginate();
    //   }
    // });
    return true;
  }

  private _propagateEvent = (eventName: string, detail?: any) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail,
      })
    );
  };

  private _renderPaginateSection() {
    return html`<div class=${classMap(this.getClassMap('paginate'))}>
      <oak-paginate
        @paginate-change=${this._onPageChange}
        .totalRows=${this.totalRows}
        .formElementSize=${this.formElementSize}
        .formElementShape=${this.formElementShape}
        .paginatePref=${this.paginatePref}
      >
      </oak-paginate>
    </div>`;
  }

  private getClassMap(baseClass: 'base' | 'datagrid' | 'paginate'): any {
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
      case 'paginate':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--dense`]: this.dense,
        };
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
        ${this.navPlacement === 'top' ? this._renderPaginateSection() : html``}
        <div class=${classMap(this.getClassMap('datagrid'))}>
          <slot></slot>
        </div>
        ${this.navPlacement === 'bottom'
          ? this._renderPaginateSection()
          : html``}
      </div>
    `;
  }
}

import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {TableHeaderType} from '../../../types/TableHeaderType';
import {oakInternalTablePaginateStyles} from './index-styles';

import '../../public/oak-paginate';
import {TABLE_CHANGE_PAGE_EVENT} from '../../../types/TableEventTypes';

let elementIdCounter = 0;

/**
 * oak-internal-table-paginate.
 *
 */
const customElementName = 'oak-internal-table-paginate';
@customElement(customElementName)
export class OakInternalTablePaginate extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Number})
  itemCount = 0;

  @property({type: Array})
  header: TableHeaderType[] = [];

  @property({type: Object})
  columnGrid: any;

  @property({type: Object})
  row: any;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  private _onChangePage = (event: any) => {
    this._propagateEvent(TABLE_CHANGE_PAGE_EVENT, event.detail);
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
    return [...globalStyles, oakInternalTablePaginateStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <oak-paginate
          @paginate-change-page=${this._onChangePage}
          .itemCount=${this.itemCount}
        ></oak-paginate>
      </div>
    `;
  }
}

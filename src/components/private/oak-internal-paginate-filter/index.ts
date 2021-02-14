import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import {oakInternalPaginateFilterStyles} from './index-styles';

import '../../public/oak-paginate';
import '../../public/oak-form';
import '../../public/oak-input';
import '../../public/oak-button';
import {TableHeader} from '../../../types/TableHeaderType';
import {PAGINATE_SEARCH_EVENT} from '../../../types/PaginateEventTypes';

let elementIdCounter = 0;

/**
 * oak-internal-table-paginate.
 *
 */
const customElementName = 'oak-internal-paginate-filter';
@customElement(customElementName)
export class OakInternalPaginateFilter extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: Array})
  header: TableHeader[] = [];

  @property({type: Object})
  columnGrid: any;

  @property({type: String})
  formElementFill?: 'container' | 'surface' | 'float' | 'none' = 'surface';

  @property({type: String})
  formElementSize?: 'xsmall' | 'small' | 'medium' | 'large' = 'small';

  @property({type: String})
  formElementShape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' = 'rectangle';

  @property({type: String})
  private _showColumnList = false;

  @property({type: String})
  private _searchText = '';

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  private _setShowColumnList(val: boolean) {
    this._showColumnList = val;
  }

  private _handleSearchTextChange(event: any) {
    this._searchText = event.detail.value;
  }

  private _handleSearchTextReset() {
    this._searchText = '';
    this._onSearch();
  }

  private _onSearch = () => {
    this._propagateEvent(PAGINATE_SEARCH_EVENT, {
      searchText: this._searchText,
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

  private getClassMap(
    baseClass: 'base' | 'filter-container' | 'search-form'
  ): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
        };
      case 'filter-container':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'search-form':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakInternalPaginateFilterStyles];
  }

  render() {
    return html`
      <oak-modal
        .showModal=${this._showColumnList}
        @close-modal=${() => this._setShowColumnList(false)}
        heading="Choose columns"
      >
        <div slot="body">body</div>
        <div slot="footer">
          footer
        </div>
      </oak-modal>
      <div class=${classMap(this.getClassMap('filter-container'))}>
        <oak-button
          @button-click=${() => this._setShowColumnList(true)}
          theme="default"
          variant="appear"
          shape="icon"
          .size=${this.formElementSize}
        >
          filter
        </oak-button>
        <oak-form
          formGroupName=${`${this.elementId}-search-form`}
          @form-submit=${this._onSearch}
        >
          <div class=${classMap(this.getClassMap('search-form'))}>
            <oak-input
              .value=${this._searchText}
              name="_searchText"
              @input-input=${this._handleSearchTextChange}
              placeholder="Search"
              .size=${this.formElementSize}
              .shape=${this.formElementShape}
              .fill=${this.formElementFill}
              formGroupName=${`${this.elementId}-search-form`}
            ></oak-input>
            <oak-button
              theme=${this._searchText ? 'primary' : 'default'}
              variant="appear"
              shape="icon"
              .size=${this.formElementSize}
              type="submit"
              formGroupName=${`${this.elementId}-search-form`}
            >
              search
            </oak-button>
            <oak-button
              theme="default"
              variant=${this._searchText ? 'appear' : 'disabled'}
              @button-click=${this._handleSearchTextReset}
              shape="icon"
              .size=${this.formElementSize}
            >
              close
            </oak-button>
          </div>
        </oak-form>
      </div>
    `;
  }
}

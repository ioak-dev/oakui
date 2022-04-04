import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../styles/global-styles';
import {oakInternalPaginateFilterStyles} from './index-styles';

import '../../../component/oak-paginate';
import '../../../component/oak-form';
import '../../../component/oak-input';
import '../../../component/oak-button';
import '../../../component/oak-click-area';
import {TableHeader} from '../../../types/TableHeaderType';
import {PAGINATE_SEARCH_EVENT} from '../../../event/OakPaginateEvent';

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
  color?: 'global' | 'container' | 'surface' | 'float' | 'none' = 'container';

  @property({type: Boolean})
  fill? = false;

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
        .isOpen=${this._showColumnList}
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
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="20"
          >
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
          </svg>
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
              .color=${this.color}
              ?fill=${this.fill}
              formGroupName=${`${this.elementId}-search-form`}
            ></oak-input>
            <oak-click-area @click-area-click=${this._onSearch}>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="20"
              >
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                ></path>
              </svg>
            </oak-click-area>
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

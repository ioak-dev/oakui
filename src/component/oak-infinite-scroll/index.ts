import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';

import {oakInfiniteScrollStyles} from './index-styles';

import {PaginatePref} from '../../types/PaginatePrefType';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {INFINITE_SCROLL_CHANGE_EVENT} from '../../event/OakInfiniteScrollEvent';

let elementIdCounter = 0;

/**
 * Infinite scroll component.
 *
 */
const customElementName = 'oak-infinite-scroll';
@customElement(customElementName)
export class OakInfiniteScroll extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  customSelector?: string | null = null;

  @property({type: String})
  variant: 'auto-selector' | 'custom-selector' | 'body-selector' =
    'auto-selector';

  @property({type: Object})
  paginatePref: PaginatePref = {
    pageNo: 1,
    rowsPerPage: 5,
    searchText: '',
  };

  @property({type: Boolean})
  private _isFetching = false;

  constructor() {
    super();
  }

  firstUpdated(changedProperties: any) {
    super.firstUpdated(changedProperties);
    setTimeout(() => this.init());
  }

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    _changedProperties.forEach((_, propName) => {
      if (propName === 'customSelector') {
        this.init();
      }
    });
    return true;
  }

  private init = () => {
    switch (this._findSelectorType()) {
      case 'auto':
        this.shadowRoot
          ?.querySelector(`#${this.elementId}`)
          ?.addEventListener('scroll', () => this._handleScroll('auto'));
        break;

      case 'custom':
        document
          ?.querySelector(this.customSelector || '')
          ?.addEventListener('scroll', () => this._handleScroll('custom'));
        break;

      case 'body':
        fromEvent(window, 'scroll')
          .pipe(map((event) => event))
          .subscribe(() => this._handleScroll('body'));
        break;
      default:
        break;
    }
  };

  private _findSelectorType = (): 'auto' | 'custom' | 'body' => {
    if (
      this.variant === 'auto-selector' ||
      (this.variant == 'custom-selector' && !this.customSelector)
    ) {
      return 'auto';
    } else if (this.variant === 'custom-selector' && this.customSelector) {
      return 'custom';
    } else {
      return 'body';
    }
  };

  private _handleScroll = (selectorType: 'auto' | 'custom' | 'body') => {
    let selectorEl: any = null;

    switch (selectorType) {
      case 'auto':
        selectorEl = this.shadowRoot?.querySelector(`#${this.elementId}`);
        break;
      case 'custom':
        selectorEl = document?.querySelector(this.customSelector || '');
        break;
      case 'body':
      default:
        selectorEl = window.document.documentElement;
    }
    if (!selectorEl) {
      return;
    }

    const outcome =
      (selectorEl.clientHeight || 0) + (selectorEl.scrollTop || 0) >=
      (selectorEl.scrollHeight || 0) - 2;

    if (outcome) {
      if (!this._isFetching) {
        this._isFetching = true;
        this._propagateEvent(INFINITE_SCROLL_CHANGE_EVENT, {
          id: this.elementId,
        });
        setTimeout(() => {
          this._isFetching = false;
        }, 1000);
      }
    }
  };

  // private _pageChanged = (_paginatePref: PaginatePref) => {
  //   this._propagateEvent(INFINITE_SCROLL_CHANGE_EVENT, _paginatePref);
  // };

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
        const data = {
          [customElementName]: true,
          [`${customElementName}--native-scroll`]:
            this._findSelectorType() === 'auto',
        };
        return data;
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakInfiniteScrollStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <slot></slot>
      </div>
    `;
  }
}

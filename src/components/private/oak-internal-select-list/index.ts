import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {formSelectActivatedSubject} from '../../../events/FormSelectActivatedEvent';
import {globalStyles} from '../../../global-styles';

import {oakInternalSelectListStyles} from './index-styles';

let elementIdCounter = 0;
const customElementName = 'oak-internal-select-list';

/**
 * Form element error.
 *
 */
@customElement(customElementName)
export class OakInternalSelectList extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;
  private liElementId = `${this.elementId}-li`;

  @property({type: Number})
  containerHeight = 0;

  @property({type: Number})
  containerTop = 0;

  @property({type: String})
  elementFor = '';

  @property({type: Boolean})
  private _isActivated = false;

  @property({type: Number})
  private _currentIndex = 0;

  @property({type: Array})
  options: any[] = [];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  private init = () => {
    // formSelectKeyboardSubject.asObservable().subscribe((message) => {
    //   console.log(message);
    //   this._handleKeyboardEvent(message.event);
    // });
    formSelectActivatedSubject.asObservable().subscribe((message) => {
      console.log(
        message,
        this.shadowRoot?.getElementById(this.elementId),
        message.controlDom
      );
      this.shadowRoot
        ?.getElementById(this.elementId)
        ?.addEventListener('keydown', (event) => {
          console.log('****this.shadowRoot', event);
          this._handleKeyboardEvent(event);
        });
      message.controlDom?.addEventListener('keydown', (event: any) => {
        console.log('****message.controlDom', event);
        this._handleKeyboardEvent(event);
      });
    });
  };

  private _searchResults = () => {
    // if (isEmptyOrSpaces(this._searchCriteria)) {
    return this.options;
    // } else {
    //   return this.options.filter((option: any) =>
    //     toString(option).includes(this._searchCriteria)
    //   );
    // }
  };

  private _handleKeyboardEvent = (event: any) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        // this.activate();
        this.navigateDown();
        break;
      case 'ArrowUp':
        event.preventDefault();
        // this.activate();
        this.navigateUp();
        break;
      case 'Home':
        event.preventDefault();
        // this.activate();
        this.navigateHome();
        break;
      case 'End':
        event.preventDefault();
        // this.activate();
        this.navigateEnd();
        break;
      case 'Enter':
        event.preventDefault();
        // this.isActivated ? this.handleChange() : this.activate();
        break;
      default:
        break;
    }
  };

  private navigateDown() {
    console.log(
      this._currentIndex,
      this._searchResults().length,
      this.shadowRoot?.getElementById(
        `${this.liElementId}-${this._currentIndex + 1}`
      )
    );
    if (this._currentIndex < this._searchResults().length - 1) {
      const elRef = this.shadowRoot?.getElementById(
        `${this.liElementId}-${this._currentIndex + 1}`
      );
      if (elRef && !this.isScrolledIntoView(elRef, true)) {
        elRef.scrollIntoView({
          behavior: 'smooth',
        });
      }
      this._currentIndex = this._currentIndex + 1;
    } else {
      this._currentIndex = 0;
    }
  }

  private navigateUp = () => {
    if (this._currentIndex > 0) {
      const elRef = this.shadowRoot?.getElementById(
        `${this.liElementId}-${this._currentIndex - 1}`
      );
      if (elRef && !this.isScrolledIntoView(elRef)) {
        elRef.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
      this._currentIndex = this._currentIndex - 1;
    } else {
      this._currentIndex = 0;
    }
  };

  private navigateHome = () => {
    const elRef = this.shadowRoot?.getElementById(`${this.liElementId}-0`);
    if (elRef) {
      elRef.scrollIntoView();
    }
    this._currentIndex = 0;
  };

  private navigateEnd = () => {
    const elRef = this.shadowRoot?.getElementById(
      `${this.liElementId}-${this._searchResults().length - 1}`
    );
    if (elRef) {
      elRef.scrollIntoView();
    }
    this._currentIndex = this._searchResults().length - 1;
  };

  private isScrolledIntoView = (el: any, invertDirection = false) => {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    if (this.containerHeight === 0 && this.containerTop === 0) {
      return true;
    }

    // Only completely visible elements return true:
    let isVisible = true;
    if (invertDirection) {
      isVisible =
        elemTop >= 0 && elemBottom <= this.containerHeight + this.containerTop;
    } else {
      isVisible =
        elemTop >= 0 && elemTop >= this.containerHeight + this.containerTop;
    }

    // Partially visible elements return true:
    //isVisible = elemTop < containerEl.getBoundingClientRect().height && elemBottom >= 0;
    return isVisible;
  };

  private handleChange = (index?: number) => {
    if (this._isActivated) {
      this.propagateToParentEvent(
        'change',
        this._searchResults()[index || this._currentIndex]
      );
    }
  };

  private propagateToParentEvent = (eventName: string, value?: any) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: this.elementFor,
          value: value,
        },
      })
    );
  };

  private getClassMap = (baseClass: 'base'): any => {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
        };
      default:
        return {};
    }
  };

  static get styles() {
    return [...globalStyles, oakInternalSelectListStyles];
  }

  render() {
    return html` <ul
      role="listbox"
      class=${classMap(this.getClassMap('base'))}
      id=${this.elementId}
    >
      <li>${this._currentIndex}</li>
      ${this._searchResults().map(
        (item, index) =>
          html` <li
            id=${`${this.liElementId}-${index}`}
            role="option"
            class=${this._currentIndex === index ? 'option-active' : ''}
            @click=${() => this.handleChange(index)}
          >
            ${item}
          </li>`
      )}
      ${this._searchResults().length === 0
        ? html` <li>No results found</li>`
        : html``}
    </ul>`;
  }
}

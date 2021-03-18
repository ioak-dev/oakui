import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {
  PANEL_COLLAPSED_EVENT,
  PANEL_EXPANDED_EVENT,
} from '../../event/OakExpansionPanelEvent';
import {expansionPanelExpandedSubject} from '../../_internal/events/ExpansionPanelExpandedEvent';
import {globalStyles} from '../../_internal/styles/global-styles';
import {isEmptyOrSpaces} from '../../_internal/utils/StringUtils';
import {oakExpansionPanelStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Expansion panel component.
 *
 */
const customElementName = 'oak-expansion-panel';
@customElement(customElementName)
export class OakExpansionPanel extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;
  private mainElementId = `${customElementName}-${elementIdCounter++}--main`;

  @property({type: String})
  name?: string = this.elementId;

  @property({type: String})
  groupName = this.elementId;

  @property({type: String})
  defaultState: 'expanded' | 'collapsed' = 'collapsed';

  @property({type: Boolean})
  rounded?: false;

  @property({type: Boolean})
  outlined?: false;

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
  private _isExpanded = false;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  firstUpdated(_changedProperties: any) {
    super.firstUpdated(_changedProperties);
    if (this.defaultState === 'expanded') {
      this._toggle();
    }
  }

  private init() {
    if (!isEmptyOrSpaces(this.groupName)) {
      expansionPanelExpandedSubject.asObservable().subscribe((message) => {
        if (
          message.groupName === this.groupName &&
          message.elementId !== this.elementId &&
          this._isExpanded
        ) {
          this._toggle();
        }
      });
    }
  }

  // private _handleChange = () => {
  //   this.propagateEvent(INPUT_CHANGE_EVENT);
  // };

  private _toggle() {
    const _isExpanded = this._isExpanded;
    if (!_isExpanded && !isEmptyOrSpaces(this.groupName)) {
      expansionPanelExpandedSubject.next({
        elementId: this.elementId,
        groupName: this.groupName,
      });
    }
    if (_isExpanded) {
      this._propagateEvent(PANEL_COLLAPSED_EVENT, false);
    } else {
      this._propagateEvent(PANEL_EXPANDED_EVENT, true);
    }
    this._isExpanded = !_isExpanded;
    this._updateScrollHeight();
  }

  private _updateScrollHeight() {
    const mainElRef = this.shadowRoot?.getElementById(this.mainElementId);
    setTimeout(() => {
      if (this._isExpanded && mainElRef) {
        mainElRef.style.maxHeight = mainElRef.scrollHeight + 'px';
        mainElRef.style.overflowY = 'hidden';
        setTimeout(() => {
          mainElRef.style.overflowY = 'auto';
        }, 300);
      } else if (mainElRef) {
        mainElRef.style.maxHeight = '0px';
        mainElRef.style.overflowY = 'hidden';
      }
    }, 0);
  }

  private _propagateEvent = (eventName: string, value: boolean) => {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: this.name,
          groupName: this.groupName,
          value,
        },
      })
    );
  };

  private getClassMap(baseClass: 'base' | 'header' | 'main'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          [`oak-bs-elevation${this.elevation}`]: true,
          'oak-rounded': this.rounded,
          'oak-outlined': this.outlined,
        };
      case 'header':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      case 'main':
        return {
          [`${customElementName}__${baseClass}`]: true,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakExpansionPanelStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <div class=${classMap(this.getClassMap('header'))}>
          <button @click=${this._toggle}>
            <slot name="header"></slot>
          </button>
        </div>
        <div
          class=${classMap(this.getClassMap('main'))}
          id=${this.mainElementId}
        >
          <slot name="main"></slot>
        </div>
      </div>
    `;
  }
}

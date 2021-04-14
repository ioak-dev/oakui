import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../_internal/styles/global-styles';
import {oakNavGroupStyles} from './index-styles';
import '../oak-click-area';
import '../oak-expanse';
import {expanseRecomputeSubject} from '../../_internal/events/ExpanseRecomputeEvent';

let elementIdCounter = 0;

/**
 * Navgroup component.
 *
 */
const customElementName = 'oak-nav-group';
@customElement(customElementName)
export class OakNavGroup extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  name: string = this.elementId;

  @property({type: String})
  groupName?: string | null = null;

  @property({type: String})
  parentName?: string | null = null;

  @property({type: String})
  parentGroupName?: string | null = null;

  @property({type: Number})
  level: 1 | 2 | 3 = 1;

  @property({type: String})
  defaultState: 'expanded' | 'collapsed' = 'collapsed';

  @property({type: Boolean})
  private _isExpanded = false;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  private _expand(event: any) {
    if (
      event.detail.name === this.name &&
      event.detail.groupName === this.groupName
    ) {
      this._isExpanded = true;
      expanseRecomputeSubject.next({
        name: this.parentName,
        groupName: this.parentGroupName,
      });
    }
  }

  private _collapse(event: any) {
    if (
      event.detail.name === this.name &&
      event.detail.groupName === this.groupName
    ) {
      this._isExpanded = false;
    }
  }

  // private _handleChange = () => {
  //   this.propagateEvent(INPUT_CHANGE_EVENT);
  // };

  // private _propagateEvent = (eventName: string, value: boolean) => {
  //   this.dispatchEvent(
  //     new CustomEvent(eventName, {
  //       bubbles: true,
  //       composed: true,
  //       detail: {
  //         id: this.elementId,
  //         name: this.name,
  //         groupName: this.groupName,
  //         value,
  //       },
  //     })
  //   );
  // };

  private getClassMap(baseClass: 'base' | 'header' | 'main'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
        };
      case 'header':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--active`]: this._isExpanded,
          [`${customElementName}__${baseClass}--level-${this.level}`]: true,
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
    return [...globalStyles, oakNavGroupStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <oak-expanse
          elevation="0"
          @expanse-expanded=${this._expand}
          @expanse-collapsed=${this._collapse}
          .groupName=${this.groupName}
          .name=${this.name}
        >
          <div slot="header">
            <div class=${classMap(this.getClassMap('header'))}>
              <div>
                <slot name="header"></slot>
              </div>
              <svg
                class="svg-inline--fa fa-chevron-right fa-w-10"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  class=""
                  fill="currentColor"
                  d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                ></path>
              </svg>
            </div>
          </div>
          <div slot="main">
            <slot name="main"></slot>
          </div>
        </oak-expanse>
      </div>
    `;
  }
}

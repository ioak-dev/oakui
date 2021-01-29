import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';

import {oakPopoverStyles} from './index-styles';

import '../oak-button/index';

let elementIdCounter = 0;

/**
 * Popover component.
 *
 */
@customElement('oak-popover')
export class OakPopover extends LitElement {
  private elementId = `oak-popover-${elementIdCounter++}`;

  @property({type: Boolean})
  private _showPopover = false;

  constructor() {
    super();
  }

  private openPopover() {
    console.log('test');
    this._showPopover = !this._showPopover;
  }

  private getClassMap(baseClass: 'base'): any {
    switch (baseClass) {
      case 'base':
        const data = {
          'oak-popover': true,
        };
        return data;
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakPopoverStyles];
  }

  render() {
    return html`
      <div class=${classMap(this.getClassMap('base'))} id=${this.elementId}>
        <div class="oak-popover--container">
          <oak-button
            theme="primary"
            variant="appear"
            @button-click=${this.openPopover}
            >open menu</oak-button
          >
          ${
            this._showPopover
              ? html` <div class="content">
                  <slot></slot>
                </div>`
              : html``
          }
        </div>
      </div>
      </div>
    `;
  }
}

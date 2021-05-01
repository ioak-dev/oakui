import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import OakSheetEvent from '../../event/OakSheetEvent';
import {globalStyles} from '../../_internal/styles/global-styles';
import {oakSheetBackdropStyles} from './backdrop-styles';

import {oakSheetStyles} from './index-styles';
import {oakSheetPositionBottomStyles} from './position-bottom-styles';
import {oakSheetPositionLeftStyles} from './position-left-styles';
import {oakSheetPositionRightStyles} from './position-right-styles';
import {oakSheetPositionTopStyles} from './position-top-styles';

let elementIdCounter = 0;

/**
 * Sheet component.
 *
 */
const customElementName = 'oak-sheet';
@customElement(customElementName)
export class OakSheet extends LitElement {
  private elementId = `${customElementName}-${elementIdCounter++}`;

  @property({type: String})
  position?: 'left' | 'right' | 'middle' | 'top' | 'bottom' = 'bottom';

  @property({type: Boolean})
  isOpen = false;

  @property({type: Boolean})
  outlined?: boolean = false;

  @property({type: String})
  fillColor?:
    | 'global'
    | 'container'
    | 'surface'
    | 'float'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'invert' = 'surface';

  @property({type: String})
  sizeHorizontal?: 'one-third' | 'two-third' | 'half' | 'full' | 'auto' =
    'half';

  @property({type: String})
  sizeVertical?: 'one-third' | 'two-third' | 'half' | 'full' | 'auto' = 'half';

  @property({type: Number})
  paddingHorizontal?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 4;

  @property({type: Number})
  paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = 4;

  @property({type: Number})
  backdropIntensity?: 0 | 1 | 2 | 3 | 4 | 5 = 2;

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
    | 24 = 10;

  @property({type: Boolean})
  private _isOpen = false;

  constructor() {
    super();
  }

  firstUpdated(_changedProperties: any) {
    super.firstUpdated(_changedProperties);
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  private init() {
    fromEvent(window, 'keydown')
      .pipe(map((event) => event))
      .subscribe((event: any) => {
        if (['Escape'].includes(event.key)) {
          this._handleClose();
        }
      });
  }

  shouldUpdate(_changedProperties: Map<string | number | symbol, unknown>) {
    _changedProperties.forEach((_, propName) => {
      if (propName === 'isOpen' && this.isOpen) {
        this._isOpen = true;
      }
      if (propName === 'isOpen' && !this.isOpen) {
        setTimeout(() => {
          this._isOpen = false;
        }, 250);
      }
    });
    return true;
  }

  private _handleClose() {
    this.propagateEvent(OakSheetEvent.SHEET_CLOSE);
  }

  private propagateEvent = (eventType: OakSheetEvent) => {
    this.dispatchEvent(
      new CustomEvent(eventType, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          value: true,
        },
      })
    );
  };

  private getClassMap(baseClass: 'base' | 'backdrop' | 'sheet'): any {
    switch (baseClass) {
      case 'base':
        return {
          [customElementName]: true,
          [`${customElementName}--show`]: this.isOpen,
          [`${customElementName}--hide`]: !this.isOpen,
          [`${customElementName}--position-${this.position}`]: true,
        };
      case 'backdrop':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`oak-backdrop-${this.backdropIntensity}`]: true,
        };
      case 'sheet':
        return {
          [`${customElementName}__${baseClass}`]: true,
          [`${customElementName}__${baseClass}--position-${this.position}`]: true,
          [`${customElementName}__${baseClass}--size-horizontal-${this.sizeHorizontal}`]: true,
          [`${customElementName}__${baseClass}--size-vertical-${this.sizeVertical}`]: true,
          [`oak-color-bg-${this.fillColor}`]: true,
          [`oak-color-${this.fillColor}-i`]: true,
          [`oak-padding-horizontal${this.paddingHorizontal}`]: true,
          [`oak-padding-vertical${this.paddingVertical}`]: true,
          [`oak-bs-elevation${this.elevation}`]: true,
          'oak-outlined': this.outlined,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [
      ...globalStyles,
      oakSheetStyles,
      oakSheetBackdropStyles,
      oakSheetPositionTopStyles,
      oakSheetPositionBottomStyles,
      oakSheetPositionLeftStyles,
      oakSheetPositionRightStyles,
    ];
  }

  render() {
    return html`${this._isOpen
      ? html`<div
          class=${classMap(this.getClassMap('base'))}
          id=${this.elementId}
        >
          <div
            class=${classMap(this.getClassMap('backdrop'))}
            @click=${this._handleClose}
          ></div>
          <div class=${classMap(this.getClassMap('sheet'))}>
            <slot></slot>
          </div>
        </div>`
      : html``}`;
  }
}

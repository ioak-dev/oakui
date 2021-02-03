import {LitElement, html, customElement, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import {globalStyles} from '../../../global-styles';
import ModalEvent from '../../../types/ModalEventTypes';
import {oakModalStyles} from './index-styles';
import '../../private/oak-internal-modal-header';
import '../../private/oak-internal-modal-body';
import '../../private/oak-internal-modal-footer';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';

let elementIdCounter = 0;

/**
 * Text box form element.
 *
 */
@customElement('oak-modal')
export class OakModal extends LitElement {
  private elementId = `oak-modal-${elementIdCounter++}`;

  @property({type: Boolean})
  showModal = false;

  @property({type: String})
  heading?: string | null;

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  private init() {
    fromEvent(window, 'keydown')
      .pipe(map((event) => event))
      .subscribe((event: any) => {
        if (['Escape'].includes(event.key)) {
          this.closeModal();
        }
      });
  }

  private closeModal = () => {
    this.propagateEvent(ModalEvent.CLOSE_MODAL, {value: true});
  };

  private propagateEvent = (eventType: ModalEvent, event: any) => {
    this.dispatchEvent(
      new CustomEvent(eventType, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.elementId,
          name: eventType,
          value: event.value,
        },
      })
    );
  };

  private getClassMap(baseClass: 'oak-modal-root' | 'container'): any {
    switch (baseClass) {
      case 'oak-modal-root':
        return {
          'oak-modal-root': true,
          show: this.showModal,
          hide: !this.showModal,
        };
      case 'container':
        return {
          container: true,
          hidetext: !this.showModal,
        };
      default:
        return {};
    }
  }

  static get styles() {
    return [...globalStyles, oakModalStyles];
  }

  render() {
    return html` ${this.showModal
      ? html`
          <div
            id=${this.elementId}
            class=${classMap(this.getClassMap('oak-modal-root'))}
          >
            <div class="oak-modal">
              <div class="backdrop-fade" @click=${this.closeModal}></div>
              <div class="modal">
                <div class=${classMap(this.getClassMap('container'))}>
                  <oak-internal-modal-header
                    heading=${this.heading}
                  ></oak-internal-modal-header>
                  <oak-internal-modal-body
                    ><slot name="body"></slot
                  ></oak-internal-modal-body>
                  <oak-internal-modal-footer
                    ><slot name="footer"></slot
                  ></oak-internal-modal-footer>
                </div>
              </div>
            </div>
          </div>
        `
      : html``}`;
  }
}

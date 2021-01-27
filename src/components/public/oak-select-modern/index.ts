import {LitElement, html, customElement, property} from 'lit-element';
import {formControlRegisterSubject} from '../../../events/FormControlRegisterEvent';
import {formControlValidatedSubject} from '../../../events/FormControlValidatedEvent';
import {formControlValidateSubject} from '../../../events/FormControlValidateEvent';
import {globalStyles} from '../../../global-styles';
import {ValidationErrorType} from '../../../validation/types/ValidationResultType';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../public/oak-button';
import {oakSelectModernStyles} from './index-styles';

let elementIdCounter = 0;

/**
 * Select drop down (native) form element.
 *
 */
@customElement('oak-select-modern')
export class OakSelect extends LitElement {
  private elementId = `oak-select-modern-${elementIdCounter++}`;

  list: any;
  listContainer: any;
  dropdownArrow: any;
  listItems: any;
  dropdownSelectedNode: any;
  listItemIds: any;
  SPACEBAR_KEY_CODE = [0, 32];
  ENTER_KEY_CODE = 13;
  DOWN_ARROW_KEY_CODE = 40;
  UP_ARROW_KEY_CODE = 38;
  ESCAPE_KEY_CODE = 27;

  @property({type: String})
  formGroupName?: string;

  @property({type: String})
  label?: string | null;

  @property()
  value?: string | number | null;

  @property({type: String})
  placeholder?: string = '';

  @property({type: Boolean})
  multiple?: boolean = false;

  @property({type: String})
  tooltip?: string = '';

  @property({type: String})
  name: string = this.elementId;

  @property({type: Boolean})
  disabled: boolean = false;

  @property({type: Array})
  options?: any[] | null;

  @property({type: Array})
  optionsAsKeyValue?: {key: string | number; value: string | number}[] | null;

  /**
   * Validators
   *
   */

  /**
   * @private
   */
  @property({type: Array})
  private _errors: ValidationErrorType[] = [];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  private init() {
    if (this.formGroupName) {
      formControlRegisterSubject.next({
        formControlName: this.name,
        formGroupName: this.formGroupName,
      });

      formControlValidateSubject
        .asObservable()
        .subscribe((message: {formGroupName: string | undefined}) => {
          if (message.formGroupName === this.formGroupName) {
            this.validate();
          }
        });
    }

    this.list = document.querySelector('.dropdown__list');
    this.listContainer = document.querySelector('.dropdown__list-container');
    this.dropdownArrow = document.querySelector('.dropdown__arrow');
    this.listItems = document.querySelectorAll('.dropdown__list-item');
    // this.dropdownSelectedNode = document.querySelector('#dropdown__selected');
    // this.listItemIds = [];
    // this.dropdownSelectedNode?.addEventListener('click', (e: any) =>
    //   this.toggleListVisibility(e)
    // );
    // this.dropdownSelectedNode?.addEventListener('keydown', (e: any) =>
    //   this.toggleListVisibility(e)
    // );

    // Add each list item's id to the listItems array
    this.listItems.forEach((item: any) => this.listItemIds.push(item.id));

    this.listItems.forEach((item: any) => {
      item.addEventListener('click', (e: any) => {
        this.setSelectedListItem(e);
        this.closeList();
      });

      item.addEventListener('keydown', (e: any) => {
        switch (e.keyCode) {
          case this.ENTER_KEY_CODE:
            this.setSelectedListItem(e);
            this.closeList();
            return;

          case this.DOWN_ARROW_KEY_CODE:
            this.focusNextListItem(this.DOWN_ARROW_KEY_CODE);
            return;

          case this.UP_ARROW_KEY_CODE:
            this.focusNextListItem(this.UP_ARROW_KEY_CODE);
            return;

          case this.ESCAPE_KEY_CODE:
            this.closeList();
            return;

          default:
            return;
        }
      });
    });
  }

  private setSelectedListItem(e: any) {
    let selectedTextToAppend = document.createTextNode(e.target.innerText);
    this.dropdownSelectedNode.innerHTML = null;
    this.dropdownSelectedNode.appendChild(selectedTextToAppend);
  }

  private closeList() {
    this.list.classList.remove('open');
    this.dropdownArrow.classList.remove('expanded');
    this.listContainer.setAttribute('aria-expanded', false);
  }

  private toggleListVisibility(e: any) {
    let openDropDown =
      this.SPACEBAR_KEY_CODE.includes(e.keyCode) ||
      e.keyCode === this.ENTER_KEY_CODE;

    if (e.keyCode === this.ESCAPE_KEY_CODE) {
      this.closeList();
    }

    if (e.type === 'click' || openDropDown) {
      this.list = document.querySelector('.dropdown__list');
      this.list?.classList.toggle('open');
      this.dropdownArrow?.classList.toggle('expanded');
      this.listContainer?.setAttribute(
        'aria-expanded',
        this.list?.classList.contains('open')
      );
    }

    if (e.keyCode === this.DOWN_ARROW_KEY_CODE) {
      this.focusNextListItem(this.DOWN_ARROW_KEY_CODE);
    }

    if (e.keyCode === this.UP_ARROW_KEY_CODE) {
      this.focusNextListItem(this.UP_ARROW_KEY_CODE);
    }
  }

  private focusNextListItem(direction: any) {
    const activeElementId = (document.activeElement as any).id;
    if (activeElementId === 'dropdown__selected') {
      (document.querySelector(`#${this.listItemIds[0]}`) as any).focus();
    } else {
      const currentActiveElementIndex = this.listItemIds.indexOf(
        activeElementId
      );
      if (direction === this.DOWN_ARROW_KEY_CODE) {
        const currentActiveElementIsNotLastItem =
          currentActiveElementIndex < this.listItemIds.length - 1;
        if (currentActiveElementIsNotLastItem) {
          const nextListItemId = this.listItemIds[
            currentActiveElementIndex + 1
          ];
          (document.querySelector(`#${nextListItemId}`) as any).focus();
        }
      } else if (direction === this.UP_ARROW_KEY_CODE) {
        const currentActiveElementIsNotFirstItem =
          currentActiveElementIndex > 0;
        if (currentActiveElementIsNotFirstItem) {
          const nextListItemId = this.listItemIds[
            currentActiveElementIndex - 1
          ];
          (document.querySelector(`#${nextListItemId}`) as any).focus();
        }
      }
    }
  }

  private validate() {
    this._errors = [];

    formControlValidatedSubject.next({
      formGroupName: this.formGroupName || '',
      formControlName: this.name,
      isValid: this._errors.length === 0,
      formControlValue: this.value,
      errors: this._errors,
    });
  }

  static get styles() {
    return [...globalStyles, oakSelectModernStyles];
  }

  // private handleInput = (event: any) => {
  //   console.log('input', event);
  //   this.propagateEvent(INPUT_INPUT_EVENT, event);
  // };

  // private handleChange = (event: any) => {
  //   console.log('change', event);
  //   this.propagateEvent(INPUT_CHANGE_EVENT, event);
  //   // (this.closest('FORM') as any)?.dispatchEvent(new Event('submit'));
  // };

  // private propagateEvent = (eventName: string, event: any, value?: any) => {
  //   this.value = event.srcElement.value;
  //   this.dispatchEvent(
  //     new CustomEvent(eventName, {
  //       bubbles: true,
  //       composed: true,
  //       detail: {
  //         id: event.srcElement.id,
  //         name: event.srcElement.name,
  //         value: value || event.srcElement.value,
  //       },
  //     })
  //   );
  // };

  render() {
    const labelId = `${this.elementId}-label`;

    return html`
      <div class="oak-select-modern">
        <oak-internal-label
          label=${this.label}
          elementId=${labelId}
          elementFor=${this.elementId}
        ></oak-internal-label>
        <ul class="dropdown">
          <li id="dropdown-label" class="dropdown__label">
            Label
          </li>

          <oak-button
            aria-labelledby="dropdown-label"
            id="dropdown__selected"
            @click=${this.toggleListVisibility}
          >
            Option 1
          </oak-button>

          <svg
            class="dropdown__arrow"
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill-rule="evenodd"
          >
            <title>Open drop down</title>
            <path d="M10 0L5 5 0 0z"></path>
          </svg>
          <li
            aria-expanded="false"
            role="list"
            class="dropdown__list-container"
          >
            <ul class="dropdown__list">
              <li class="dropdown__list-item" tabindex="0" id="option-1">
                Option 1
              </li>
              <li class="dropdown__list-item" tabindex="0" id="option-2">
                Option 2
              </li>
            </ul>
          </li>
        </ul>
        <oak-internal-form-tooltip
          .tooltip=${this.tooltip}
        ></oak-internal-form-tooltip>
        <oak-internal-form-error
          .errors=${this._errors}
        ></oak-internal-form-error>
      </div>
    `;
  }
}

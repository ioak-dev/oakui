import { LitElement } from 'lit-element';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../public/oak-button';
/**
 * Select drop down (native) form element.
 *
 */
export declare class OakSelect extends LitElement {
    private elementId;
    list: any;
    listContainer: any;
    dropdownArrow: any;
    listItems: any;
    dropdownSelectedNode: any;
    listItemIds: any;
    SPACEBAR_KEY_CODE: number[];
    ENTER_KEY_CODE: number;
    DOWN_ARROW_KEY_CODE: number;
    UP_ARROW_KEY_CODE: number;
    ESCAPE_KEY_CODE: number;
    formGroupName?: string;
    label?: string | null;
    value?: string | number | null;
    placeholder?: string;
    multiple?: boolean;
    tooltip?: string;
    name: string;
    disabled: boolean;
    options?: any[] | null;
    optionsAsKeyValue?: {
        key: string | number;
        value: string | number;
    }[] | null;
    /**
     * Validators
     *
     */
    /**
     * @private
     */
    private _errors;
    constructor();
    connectedCallback(): void;
    private init;
    private setSelectedListItem;
    private closeList;
    private toggleListVisibility;
    private focusNextListItem;
    private validate;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
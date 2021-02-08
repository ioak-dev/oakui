import { LitElement } from 'lit-element';
import '../oak-internal-popup';
import '../../public/oak-button';
import '../../public/oak-input';
/**
 * Select drop down (native) form element.
 *
 */
export declare class OakInternalSelectModern extends LitElement {
    private elementId;
    private inputElementId;
    private liElementId;
    private ulElementId;
    elementFor: string;
    private _isActivated;
    private _currentIndex;
    private _searchCriteria;
    formGroupName?: string;
    label?: string | null;
    value?: string | number | null;
    placeholder?: string;
    multiple?: boolean;
    tooltip?: string;
    name: string;
    disabled: boolean;
    options: any[];
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
    disconnectedCallback(): void;
    private _registerEvents;
    private _unregisterEvents;
    private handleChange;
    private search;
    private keydownEventHandler;
    private navigateDown;
    private navigateUp;
    private isScrolledIntoView;
    private handleActivated;
    private handleDeactivated;
    private handleKeydown;
    private _searchResults;
    private handleSearchCriteriaChange;
    private validate;
    private getClassMap;
    static get styles(): import("lit-element").CSSResult[];
    private propagateCustomEvent;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
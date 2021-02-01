import { LitElement } from 'lit-element';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../public/oak-button';
import '../../public/oak-input';
/**
 * Select drop down (native) form element.
 *
 */
export declare class OakSelect extends LitElement {
    private elementId;
    private valueContainerElementId;
    private popupContainerElementId;
    private _isActivated;
    elementFor: string;
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
    scrollableContainers: string[];
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
    private clickEventHandler;
    private keydownEventHandler;
    private activate;
    private deactivate;
    private adjustPositioning;
    private validate;
    private getClassMap;
    private handleInputFocused;
    static get styles(): import("lit-element").CSSResult[];
    private propagateCustomEvent;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
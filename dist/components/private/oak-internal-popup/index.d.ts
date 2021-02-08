import { LitElement } from 'lit-element';
import { ValidationErrorType } from '../../../validation/types/ValidationResultType';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../private/oak-internal-popup-input-action';
import '../../public/oak-button';
import '../../public/oak-input';
/**
 * Select drop down (native) form element.
 *
 */
export declare class OakSelect extends LitElement {
    private elementId;
    private actionElementId;
    private popupContainerElementId;
    isActivated: boolean;
    elementFor: string;
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
    errors: ValidationErrorType[];
    scrollableContainers: string[];
    /**
     * Validators
     *
     */
    /**
     * @private
     */
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
    private getClassMap;
    private handleInputFocused;
    static get styles(): import("lit-element").CSSResult[];
    private propagateCustomEvent;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
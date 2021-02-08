import { LitElement } from 'lit-element';
import { ValidationErrorType } from '../../../validation/types/ValidationResultType';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
import '../../public/oak-button';
import '../../public/oak-input';
/**
 * Select drop down (native) form element.
 *
 */
export declare class OakInternalPopupInputAction extends LitElement {
    private elementId;
    elementFor: string;
    value?: string | number | null;
    placeholder?: string;
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
    private getClassMap;
    private handleInputFocused;
    static get styles(): import("lit-element").CSSResult[];
    private propagateCustomEvent;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
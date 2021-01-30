import { LitElement } from 'lit-element';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
/**
 * Select drop down (native) form element.
 *
 */
export declare class OakSelect extends LitElement {
    private elementId;
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
    private validate;
    static get styles(): import("lit-element").CSSResult[];
    private handleInput;
    private handleChange;
    private propagateEvent;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
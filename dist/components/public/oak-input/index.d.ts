import { LitElement } from 'lit-element';
import '../../private/oak-internal-label';
import '../../private/oak-internal-form-tooltip';
import '../../private/oak-internal-form-error';
/**
 * Text box form element.
 *
 */
export declare class OakInput extends LitElement {
    private elementId;
    formGroupName?: string;
    label?: string | null;
    value?: string | number | null;
    type?: 'text' | 'number' | 'password' | 'date' | 'file';
    placeholder?: string;
    multiple?: boolean;
    tooltip?: string;
    name: string;
    disabled: boolean;
    /**
     * Validators
     *
     */
    validatorFunction?: Function;
    /**
     * minLength: Validates that the length of a string is at least as long as the given limit.
     */
    minLength?: number | null;
    /**
     * maxLength: Validates that the length of a string is not longer than the given limit.
     */
    maxLength?: number | null;
    /**
     * min: Validates that a given input (number or date) or date is greater than or equal to some minimum (number or date.)
     */
    min?: number | null;
    /**
     * max: Validates that the given input (number or date) is less than or equal to some maximum value (number or date).
     */
    max?: number | null;
    /**
     * regexp: Validates that a value matches a specific regular expression (regex).
     */
    regexp?: object;
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
    private processFiles;
    private handleKeydown;
    private handleFocus;
    private handleSubmit;
    private propagateEvent;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
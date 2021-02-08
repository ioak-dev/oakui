import { LitElement } from 'lit-element';
import '../../private/oak-internal-select-native';
import '../../private/oak-internal-select-modern';
/**
 * Select drop down (native) form element.
 *
 */
export declare class OakSelect extends LitElement {
    private elementId;
    id: string;
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
    native?: boolean | undefined;
    constructor();
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
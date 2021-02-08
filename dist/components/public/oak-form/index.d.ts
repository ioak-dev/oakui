import { LitElement } from 'lit-element';
import '../../private/oak-internal-label';
/**
 * Text box form element.
 *
 */
export declare class OakForm extends LitElement {
    private elementId;
    formGroupName: string;
    private formControlNameList;
    private validationResults;
    constructor();
    connectedCallback(): void;
    private init;
    static get styles(): import("lit-element").CSSResult[];
    private handleSubmit;
    private handleReset;
    private propagateEvent;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
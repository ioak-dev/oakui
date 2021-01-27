import { LitElement } from 'lit-element';
import '../../private/oak-internal-modal-header';
import '../../private/oak-internal-modal-body';
import '../../private/oak-internal-modal-footer';
/**
 * Text box form element.
 *
 */
export declare class OakModal extends LitElement {
    private elementId;
    showModal: boolean;
    heading?: string | null;
    connectedCallback(): void;
    private init;
    private closeModal;
    private propagateEvent;
    private getClassMap;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
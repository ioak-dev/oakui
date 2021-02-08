import { LitElement } from 'lit-element';
import '../oak-typography';
export declare class OakLink extends LitElement {
    private elementId;
    href?: string | null;
    underline: 'none' | 'hover' | 'always';
    block: boolean;
    blockSize?: 'xsmall' | 'small' | 'medium' | 'large';
    blockShape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' | 'icon';
    color?: 'inherit' | 'primary' | 'secondary' | 'tertiary' | 'primary-text' | 'secondary-text' | 'tertiary-text' | 'default' | 'danger' | 'warning' | 'success' | 'danger-text' | 'warning-text' | 'success-text' | 'info';
    /**
     * Set the text-align on the component. Applicable only when block = false
     */
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    /**
     * Controls the display type. Applicable only when block = false
     */
    display?: 'initial' | 'block' | 'inline';
    /**
     * Variant type for the typography settings. Applicable only when block = false
     */
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline' | 'inherit';
    constructor();
    private handleClick;
    private propagateEvent;
    private getClassMap;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
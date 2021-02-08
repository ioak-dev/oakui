import { LitElement } from 'lit-element';
export declare class OakTypography extends LitElement {
    private elementId;
    color?: 'inherit' | 'primary' | 'secondary' | 'tertiary' | 'primary-text' | 'secondary-text' | 'tertiary-text' | 'default' | 'danger' | 'warning' | 'success' | 'danger-text' | 'warning-text' | 'success-text' | 'info';
    /**
     * Set the text-align on the component.
     */
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    /**
     * Controls the display type
     */
    display?: 'initial' | 'block' | 'inline';
    /**
     * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
     * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
     */
    noWrap?: boolean;
    /**
     * If true, the text will have a bottom margin.
     */
    paragraph?: boolean;
    /**
     * 	If true, the text will have a bottom margin.
     */
    gutterBottom?: boolean;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline' | 'inherit';
    constructor();
    private getClassMap;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
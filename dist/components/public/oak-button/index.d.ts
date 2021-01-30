import { LitElement } from 'lit-element';
import '../../private/oak-internal-label';
/**
 * Button element.
 *
 */
export declare class OakButton extends LitElement {
    private elementId;
    variant?: 'block' | 'outline' | 'appear' | 'disappear' | 'regular' | 'disabled' | 'drama';
    theme?: 'primary' | 'secondary' | 'tertiary' | 'default' | 'danger' | 'warning' | 'success' | 'info';
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    shape?: 'sharp' | 'rectangle' | 'rounded' | 'leaf' | 'icon';
    visualmode: 'dark' | 'light';
    type: 'button' | 'submit' | 'reset';
    formGroupName?: string;
    computeStyle: () => string;
    constructor();
    static get styles(): import("lit-element").CSSResult[];
    private handleClick;
    private handleSubmit;
    private propagateEvent;
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
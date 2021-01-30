import { LitElement } from 'lit-element';
/**
 * Form element error.
 *
 */
export declare class OakInternalSelectList extends LitElement {
    private elementId;
    private liElementId;
    containerHeight: number;
    containerTop: number;
    elementFor: string;
    private _isActivated;
    private _currentIndex;
    options: any[];
    constructor();
    connectedCallback(): void;
    private init;
    private _searchResults;
    private _handleKeyboardEvent;
    private navigateDown;
    private navigateUp;
    private navigateHome;
    private navigateEnd;
    private isScrolledIntoView;
    private handleChange;
    private propagateToParentEvent;
    private getClassMap;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
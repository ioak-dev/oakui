import { LitElement } from 'lit-element';
import '../../private/oak-internal-notification-message';
export declare class OakNotification extends LitElement {
    private elementId;
    indicator?: 'circle' | 'circle-dotted' | 'circle-outline' | 'ellipse' | 'ellipse-dotted' | 'ellipse-outline' | 'fill' | 'none';
    elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
    rounded?: boolean;
    outlined?: boolean;
    paddingVertical?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    private notificationQueue;
    constructor();
    connectedCallback(): void;
    private init;
    private getClassMap;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
//# sourceMappingURL=index.d.ts.map
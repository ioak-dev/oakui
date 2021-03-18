import {Subject} from 'rxjs';

export const expansionPanelExpandedSubject = new Subject<
  ExpansionPanelExpandedType
>();

interface ExpansionPanelExpandedType {
  elementId: string;
  groupName: string;
}

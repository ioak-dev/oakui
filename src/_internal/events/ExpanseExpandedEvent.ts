import {Subject} from 'rxjs';

export const expanseExpandedSubject = new Subject<ExpanseExpandedType>();

interface ExpanseExpandedType {
  elementId: string;
  groupName?: string | null;
}

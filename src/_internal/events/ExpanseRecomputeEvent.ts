import {Subject} from 'rxjs';

export const expanseRecomputeSubject = new Subject<ExpanseRecomputeType>();

interface ExpanseRecomputeType {
  name?: string | null;
  groupName?: string | null;
}

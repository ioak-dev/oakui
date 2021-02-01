import {Subject} from 'rxjs';

export const userClickedSubject = new Subject<UserClickedType>();

interface UserClickedType {
  event: any;
}

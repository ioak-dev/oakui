import { Subject } from 'rxjs';

export const formControlSubmitSubject = new Subject<FormControlSubmitType>();

interface FormControlSubmitType {
  formGroupName: string;
}

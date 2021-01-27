import { Subject } from 'rxjs';

export const formControlValidateSubject = new Subject<FormControlValidateType>();

interface FormControlValidateType {
  formGroupName: string;
}

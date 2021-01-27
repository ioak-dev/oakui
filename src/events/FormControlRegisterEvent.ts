import { Subject } from 'rxjs';

export const formControlRegisterSubject = new Subject<FormControlRegisterType>();

interface FormControlRegisterType {
  formControlName: string;
  formGroupName: string;
}

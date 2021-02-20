import {Subject} from 'rxjs';

export const formControlResetSubject = new Subject<FormControlResetType>();

interface FormControlResetType {
  formGroupName: string;
}

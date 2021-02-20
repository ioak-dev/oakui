import {Subject} from 'rxjs';

export const checkboxRegisterSubject = new Subject<CheckboxRegisterType>();

interface CheckboxRegisterType {
  name: string;
  value: boolean;
  checkboxGroupName: string;
}

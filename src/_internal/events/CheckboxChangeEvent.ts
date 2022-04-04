import {Subject} from 'rxjs';

export const checkboxChangeSubject = new Subject<CheckboxChangeType>();

interface CheckboxChangeType {
  name: string;
  value: boolean;
  checkboxGroupName: string;
}

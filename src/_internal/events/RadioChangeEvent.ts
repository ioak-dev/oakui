import {Subject} from 'rxjs';

export const radioChangeSubject = new Subject<RadioChangeType>();

interface RadioChangeType {
  name: string;
  radioGroupName: string;
}

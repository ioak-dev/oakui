import {Subject} from 'rxjs';

export const radioRegisterSubject = new Subject<RadioRegisterType>();

interface RadioRegisterType {
  name: string;
  radioGroupName: string;
}

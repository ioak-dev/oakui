import {Subject} from 'rxjs';

export const formSelectKeyboardSubject = new Subject<FormSelectKeyboardType>();

interface FormSelectKeyboardType {
  id: string;
  event: any;
}

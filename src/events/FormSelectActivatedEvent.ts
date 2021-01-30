import {Subject} from 'rxjs';

export const formSelectActivatedSubject = new Subject<
  FormSelectActivatedType
>();

interface FormSelectActivatedType {
  id: string;
  controlDom?: any;
}

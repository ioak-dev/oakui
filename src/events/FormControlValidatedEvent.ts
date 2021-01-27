import { Subject } from 'rxjs';
import { ValidationResultType } from '../validation/types/ValidationResultType';

export const formControlValidatedSubject = new Subject<ValidationResultType>();

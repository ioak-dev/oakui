import {Subject} from 'rxjs';
import {ValidationResultType} from '../../types/ValidationResultType';

export const formControlValidatedSubject = new Subject<ValidationResultType>();

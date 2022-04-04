import {ValidatorType} from '../_internal/validator/ValidatorType';

export interface ValidationResultType {
  formGroupName: string;
  formControlName: string;
  formControlValue: any;
  isValid: boolean;
  errors: ValidationErrorType[];
}

export interface ValidationErrorType {
  type: ValidatorType;
  expected?: string | number;
  actual?: string | number;
}

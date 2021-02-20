import {isEmptyOrSpaces, toString} from '../../_internal/utils/StringUtils';
import {ValidationErrorType} from '../../types/ValidationResultType';
import {ValidatorType} from './ValidatorType';

export const RequiredValidator = (value: any): ValidationErrorType[] => {
  const outcome: ValidationErrorType[] = [];

  console.log('****', value, isEmptyOrSpaces(toString(value)));

  if (isEmptyOrSpaces(toString(value))) {
    outcome.push({
      type: ValidatorType.REQUIRED,
      expected: 'required',
      actual: 'empty',
    });
  }
  return outcome;
};

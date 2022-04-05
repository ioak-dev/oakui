import {isEmptyOrSpaces, toString} from '../../_internal/utils/StringUtils';
import {ValidationErrorType} from '../../types/ValidationResultType';
import {ValidatorType} from './ValidatorType';

export const RequiredValidator = (
  value: any,
  datatype?: 'text' | 'string' | 'number' | 'date'
): ValidationErrorType[] => {
  const outcome: ValidationErrorType[] = [];

  switch (datatype) {
    case 'number':
      if (isEmptyOrSpaces(toString(value))) {
        outcome.push({
          type: ValidatorType.REQUIRED,
          expected: 'required',
          actual: 'empty',
        });
      }
      break;

    case 'date':
    case 'string':
    case 'text':
    default:
      if (isEmptyOrSpaces(toString(value))) {
        outcome.push({
          type: ValidatorType.REQUIRED,
          expected: 'required',
          actual: 'empty',
        });
      }
      break;
  }

  return outcome;
};

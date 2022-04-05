import {isEmptyOrSpaces, toString} from '../../_internal/utils/StringUtils';
import {ValidationErrorType} from '../../types/ValidationResultType';
import {ValidatorType} from './ValidatorType';

export const NonZeroValidator = (value: any): ValidationErrorType[] => {
  const outcome: ValidationErrorType[] = [];

  if (isEmptyOrSpaces(toString(value)) || value === 0) {
    outcome.push({
      type: ValidatorType.NON_ZERO_NUMBER,
      expected: 'Non-zero',
      actual: '0',
    });
  }

  return outcome;
};

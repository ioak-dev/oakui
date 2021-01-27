import {toString} from '../utils/StringUtils';
import {ValidationErrorType} from './types/ValidationResultType';
import {ValidatorType} from './types/ValidatorType';

export const RegexValidator = (
  value: string | any,
  pattern: any
): ValidationErrorType[] => {
  const outcome = [];
  const valueAsString = toString(value);
  if (!pattern.test(valueAsString)) {
    outcome.push({
      type: ValidatorType.TEXT_PATTERN,
      expected: pattern,
      actual: valueAsString,
    });
  }
  return outcome;
};

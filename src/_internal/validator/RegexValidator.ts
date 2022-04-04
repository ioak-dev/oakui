import {toString} from '../../_internal/utils/StringUtils';
import {ValidationErrorType} from '../../types/ValidationResultType';
import {ValidatorType} from './ValidatorType';

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

import { ValidationErrorType } from './types/ValidationResultType';
import { ValidatorType } from './types/ValidatorType';

export const NumberBoundaryValidator = (
  value: number | any,
  min: number | null | undefined,
  max: number | null | undefined
): ValidationErrorType[] => {

  const outcome: ValidationErrorType[] = [];
  
  if (min && max && (value < min || value > max)) {
    outcome.push({
      type: ValidatorType.NUMBER_RANGE,
      expected: `${min}-${max}`,
      actual: value
    });
  } else if (min && value < min) {
    outcome.push({
      type: ValidatorType.MIN_TEXT_LENGTH,
      expected: min - 1,
      actual: value
    });
  } else if (max && value > max) {
    outcome.push({
      type: ValidatorType.MAX_TEXT_LENGTH,
      expected: max + 1,
      actual: value,
    });
  }
  return outcome;
};

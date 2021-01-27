import {ValidationErrorType} from './types/ValidationResultType';
import {ValidatorType} from './types/ValidatorType';

export const UserDefinedValidator = (
  validatorFunction: Function,
  value: string | any,
  formControlName: string,
  formGroupName?: string,
): ValidationErrorType[] => {
  let outcome: ValidationErrorType[] = [];
  const customValidationOutcome: string[] = validatorFunction(
    formGroupName,
    formControlName,
    value
  );
  if (customValidationOutcome) {
    outcome = customValidationOutcome.map((errorMessage) => {
      return {
        type: ValidatorType.USER_DEFINED,
        expected: undefined,
        actual: errorMessage,
      };
    });
  }
  console.log("!!!!!!!!!!", outcome);
  return outcome;
};

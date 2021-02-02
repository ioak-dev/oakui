import { ValidatorType } from './types/ValidatorType';
export const UserDefinedValidator = (validatorFunction, value, formControlName, formGroupName) => {
    let outcome = [];
    const customValidationOutcome = validatorFunction(formGroupName, formControlName, value);
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
//# sourceMappingURL=UserDefinedValidator.js.map
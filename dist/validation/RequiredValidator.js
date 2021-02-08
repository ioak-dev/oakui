import { isEmptyOrSpaces, toString } from '../utils/StringUtils';
import { ValidatorType } from './types/ValidatorType';
export const RequiredValidator = (value) => {
    const outcome = [];
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
//# sourceMappingURL=RequiredValidator.js.map
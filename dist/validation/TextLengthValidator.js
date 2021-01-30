import { toString } from '../utils/StringUtils';
import { ValidatorType } from './types/ValidatorType';
export const TextLengthValidator = (value, minLength, maxLength) => {
    const outcome = [];
    const valueAsString = toString(value);
    if (minLength &&
        maxLength &&
        (valueAsString.length < minLength || valueAsString.length > maxLength)) {
        outcome.push({
            type: ValidatorType.TEXT_LENGTH,
            expected: `${minLength}-${maxLength}`,
            actual: valueAsString.length,
        });
    }
    else if (minLength && valueAsString.length < minLength) {
        outcome.push({
            type: ValidatorType.MIN_TEXT_LENGTH,
            expected: minLength,
            actual: valueAsString.length,
        });
    }
    else if (maxLength && valueAsString.length > maxLength) {
        outcome.push({
            type: ValidatorType.MAX_TEXT_LENGTH,
            expected: maxLength,
            actual: valueAsString.length,
        });
    }
    return outcome;
};
//# sourceMappingURL=TextLengthValidator.js.map
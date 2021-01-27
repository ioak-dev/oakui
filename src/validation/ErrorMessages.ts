import {ValidatorType} from './types/ValidatorType';
import {ValidationErrorType} from '../validation/types/ValidationResultType';
import {parseTemplate} from '../utils/StringUtils';

const errorMessageTemplates = {
  [ValidatorType.USER_DEFINED]: `{{actual}}`,
  [ValidatorType.MIN_TEXT_LENGTH]: `Should be minimum {{expected}} characters long`,
  [ValidatorType.MAX_TEXT_LENGTH]: `Should be less than {{expected}} characters long`,
  [ValidatorType.TEXT_LENGTH]: `Should be between {{expected}} characters`,
  [ValidatorType.TEXT_PATTERN]: `Does not match {{expected}}`,
  [ValidatorType.MIN_NUMBER]: `Should be greater than {{expected}}`,
  [ValidatorType.MAX_NUMBER]: `Should be less than {{expected}}`,
  [ValidatorType.NUMBER_RANGE]: `Should be between {{expected}}`,
};

export const getError = (validationError: ValidationErrorType): string => {
  const replacementMap = new Map<string, string>();
  if (validationError.expected) {
    replacementMap.set('expected', validationError.expected.toString());
  }
  if (validationError.actual) {
    replacementMap.set('actual', validationError.actual.toString());
  }
  return parseTemplate(
    errorMessageTemplates[validationError.type],
    replacementMap
  );
};

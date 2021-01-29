export const toString = (value: any): string =>
  value ? (typeof value === 'string' ? value : value.toString()) : '';

export const isEmptyOrSpaces = (value: string): boolean =>
  value.match(/^ *$/) !== null;

export const parseTemplate = (
  text: string,
  replacementMap: Map<string, string>
): string => {
  let output = text;
  for (const entry of replacementMap.entries()) {
    output = output.replace(new RegExp(`{{${entry[0]}}}`, 'gi'), entry[1]);
  }
  return output;
};

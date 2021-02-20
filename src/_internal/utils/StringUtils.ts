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

export function match(text: string, words: string) {
  let found = false;
  if (words) {
    words.split(' ').forEach((word) => {
      if (text.toString().match(new RegExp(`(\\w*${word}\\w*)`, 'gi'))) {
        found = true;
      }
    });
  }
  return found;
}

export function sort(array: any[], property: string, isReverseOrder: boolean) {
  const result = array.sort(function (o1, o2) {
    if (isReverseOrder) {
      return o1[property] > o2[property]
        ? -1
        : o1[property] < o2[property]
        ? 1
        : 0;
    }
    return o1[property] < o2[property]
      ? -1
      : o1[property] > o2[property]
      ? 1
      : 0;
  });

  return result;
}

export function htmlToText(str?: string | null) {
  if (!str) return false;
  str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, '');
}

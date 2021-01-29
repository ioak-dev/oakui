export const toString = (value) => value ? (typeof value === 'string' ? value : value.toString()) : '';
export const isEmptyOrSpaces = (value) => value.match(/^ *$/) !== null;
export const parseTemplate = (text, replacementMap) => {
    let output = text;
    for (const entry of replacementMap.entries()) {
        output = output.replace(new RegExp(`{{${entry[0]}}}`, 'gi'), entry[1]);
    }
    return output;
};
//# sourceMappingURL=StringUtils.js.map
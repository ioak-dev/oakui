export const toString = (value) => value ? (typeof value === 'string' ? value : value.toString()) : '';
export const parseTemplate = (text, replacementMap) => {
    let output = text;
    for (let entry of replacementMap.entries()) {
        output = output.replace(new RegExp(`{{${entry[0]}}}`, 'gi'), entry[1]);
    }
    return output;
};
//# sourceMappingURL=StringUtils.js.map
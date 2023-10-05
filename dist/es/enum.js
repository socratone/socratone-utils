export const isStringInEnum = (string, enumObject) => {
    return Object.values(enumObject).includes(string);
};

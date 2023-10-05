"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStringInEnum = void 0;
const isStringInEnum = (string, enumObject) => {
    return Object.values(enumObject).includes(string);
};
exports.isStringInEnum = isStringInEnum;

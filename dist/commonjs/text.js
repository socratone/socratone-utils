"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
const capitalize = (text) => {
    if (text.length === 0)
        return '';
    return text[0].toUpperCase() + text.substring(1);
};
exports.capitalize = capitalize;

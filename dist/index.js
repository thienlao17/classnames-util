"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNames = classNames;
function classNames(cls, mods = {}, additional = []) {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}

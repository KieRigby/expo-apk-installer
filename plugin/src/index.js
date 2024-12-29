"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var withFileProvider = function (config) {
    console.log("my custom plugin");
    return config;
};
exports.default = withFileProvider;

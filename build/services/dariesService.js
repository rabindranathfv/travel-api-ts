"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntries = void 0;
const daries_json_1 = __importDefault(require("./daries.json"));
const DariesEntries = daries_json_1.default;
const getEntries = () => DariesEntries;
exports.getEntries = getEntries;
const addEntry = () => undefined;
exports.addEntry = addEntry;

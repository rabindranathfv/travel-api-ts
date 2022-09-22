"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEntriesCtrl = void 0;
const dariesService_1 = require("../services/dariesService");
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getAllEntriesCtrl = (_req, res) => {
    console.log('getAllEntries Controller');
    res.send((0, dariesService_1.getEntries)());
};
exports.getAllEntriesCtrl = getAllEntriesCtrl;

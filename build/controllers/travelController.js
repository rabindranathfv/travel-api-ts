"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntryCtrl = exports.getEntryByIdCtrl = exports.getEntriesWithNoSenstiveInfoCtrl = exports.getAllEntriesCtrl = void 0;
const travelService_1 = require("../services/travelService");
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getAllEntriesCtrl = (_req, res) => {
    res.send((0, travelService_1.getTravels)());
};
exports.getAllEntriesCtrl = getAllEntriesCtrl;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getEntriesWithNoSenstiveInfoCtrl = (_req, res) => {
    res.send((0, travelService_1.getTravelsWithNoSenstiveInfo)());
};
exports.getEntriesWithNoSenstiveInfoCtrl = getEntriesWithNoSenstiveInfoCtrl;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getEntryByIdCtrl = (req, res) => {
    const { id } = req.params;
    if (id !== undefined && id !== null && id !== '')
        res.send((0, travelService_1.getTravelById)(req, res, Number(id)));
    return res.status(404).json({
        ok: true,
        msg: 'does not exist this id'
    });
};
exports.getEntryByIdCtrl = getEntryByIdCtrl;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const addEntryCtrl = (req, res) => {
    (0, travelService_1.addTravel)(req, res, { ...req.body });
};
exports.addEntryCtrl = addEntryCtrl;

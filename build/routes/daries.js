"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dariesController_1 = require("./../controllers/dariesController");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    console.log('get all diaries');
    res.send((0, dariesController_1.getAllEntriesCtrl)(_req, res));
});
router.post('/', (_req, res) => {
    res.send('create an entry for diary');
});
exports.default = router;

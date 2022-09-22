"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const travelController_1 = require("../controllers/travelController");
const validateBody_1 = require("./../middlewares/validateBody");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    (0, travelController_1.getAllEntriesCtrl)(_req, res);
});
router.get('/non-sensitive', (_req, res) => {
    (0, travelController_1.getEntriesWithNoSenstiveInfoCtrl)(_req, res);
});
router.get('/:id', (req, res) => {
    (0, travelController_1.getEntryByIdCtrl)(req, res);
});
router.post('/', [(0, validateBody_1.validateBody)(validateBody_1.schemaTravel)], async (_req, res) => {
    (0, travelController_1.addEntryCtrl)(_req, res);
});
exports.default = router;

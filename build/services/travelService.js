"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTravel = exports.getTravelById = exports.getTravelsWithNoSenstiveInfo = exports.getTravels = void 0;
const travels_json_1 = __importDefault(require("./travels.json"));
const travelEntries = travels_json_1.default;
const getTravels = () => travelEntries;
exports.getTravels = getTravels;
const getTravelsWithNoSenstiveInfo = () => {
    return travelEntries.map(({ id, weather, season, date }) => {
        return {
            id,
            date,
            weather,
            season
        };
    });
};
exports.getTravelsWithNoSenstiveInfo = getTravelsWithNoSenstiveInfo;
const getTravelById = (_req, res, id) => {
    const dairyById = travelEntries.find(d => d.id === id);
    if (dairyById !== undefined) {
        return res.json({
            ok: true,
            msg: 'success response',
            dairy: dairyById
        });
    }
    return res.status(404).json({
        ok: false,
        msg: 'some troubles at backend'
    });
};
exports.getTravelById = getTravelById;
const addTravel = (_req, res, { comment, date, weather, season, amountPeople }) => {
    const newTravelEntry = {
        id: travelEntries.length + 1,
        date,
        weather,
        season,
        amountPeople,
        comment
    };
    travelEntries.push(newTravelEntry);
    return res.json({
        ok: true,
        msg: 'new travel register succesfully created sucessfully',
        travel: { ...newTravelEntry }
    });
};
exports.addTravel = addTravel;

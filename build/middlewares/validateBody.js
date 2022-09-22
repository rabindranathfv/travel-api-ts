"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = exports.schemaTravel = void 0;
const yup_1 = require("yup");
const types_1 = require("../types");
exports.schemaTravel = (0, yup_1.object)({
    body: (0, yup_1.object)({
        date: (0, yup_1.date)().required('the date is required'),
        season: (0, yup_1.mixed)().oneOf(Object.values(types_1.Weather)).required('the weader is required'),
        weather: (0, yup_1.mixed)().oneOf(Object.values(types_1.Season)).required('the weather is required'),
        amountPeople: (0, yup_1.string)().required('the amount of people is required'),
        comment: (0, yup_1.string)().min(5).max(255)
    })
});
const validateBody = (schema) => async (req, res, next) => {
    try {
        console.log('BODY***', req.body);
        await schema.validate({
            body: req.body
        });
        next();
    }
    catch (error) {
        res.status(404).json({
            ok: true,
            msg: error.errors.join(', ')
        });
    }
};
exports.validateBody = validateBody;
exports.default = exports.validateBody;

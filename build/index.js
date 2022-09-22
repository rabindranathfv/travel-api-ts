"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const daries_1 = __importDefault(require("./routes/daries"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/api/v1/dairies', daries_1.default);
app.get('/alive', (_req, res) => {
    console.log('API ALIVE YESS****');
    res.send('up and running');
});
app.listen(PORT, () => {
    console.log(`Running services in ${PORT}, Welcome`);
});

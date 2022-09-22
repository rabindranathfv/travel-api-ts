"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_status_monitor_1 = __importDefault(require("express-status-monitor"));
const express_routemap_1 = __importDefault(require("express-routemap"));
const travel_1 = __importDefault(require("./routes/travel"));
const configStatusMonitor_1 = require("./monitor/configStatusMonitor");
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, express_status_monitor_1.default)(configStatusMonitor_1.configStatusMonitor));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use('/api/v1/travel', travel_1.default);
app.get('/alive', (_req, res) => {
    console.log('API ALIVE YESS****');
    res.send('up and running');
});
app.listen(PORT, () => {
    (0, express_routemap_1.default)(app);
    console.log(`Running services in ${PORT}, Welcome`);
});

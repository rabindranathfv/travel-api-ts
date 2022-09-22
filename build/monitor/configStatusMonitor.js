"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configStatusMonitor = void 0;
exports.configStatusMonitor = {
    title: 'Express with typescript',
    theme: 'default.css',
    path: '/status',
    spans: [{
            interval: 1,
            retention: 60 // Keep 60 datapoints in memory
        }, {
            interval: 5,
            retention: 60
        }, {
            interval: 15,
            retention: 60
        }],
    chartVisibility: {
        cpu: true,
        mem: true,
        load: true,
        eventLoop: true,
        heap: true,
        responseTime: true,
        rps: true,
        statusCodes: true
    },
    healthChecks: [],
    ignoreStartsWith: '/admin'
};

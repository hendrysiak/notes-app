"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowCrossDomain = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};
//# sourceMappingURL=cors.js.map
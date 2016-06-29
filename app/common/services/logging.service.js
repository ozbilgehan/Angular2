"use strict";
var LoggingService = (function () {
    function LoggingService() {
    }
    LoggingService.prototype.log = function (msg) { console.log(msg); };
    LoggingService.prototype.error = function (msg) { console.error(msg); };
    LoggingService.prototype.warn = function (msg) { console.warn(msg); };
    return LoggingService;
}());
exports.LoggingService = LoggingService;
//# sourceMappingURL=logging.service.js.map
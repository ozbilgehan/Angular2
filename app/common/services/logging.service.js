"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//external modules
var core_1 = require('@angular/core');
var LoggingService = (function () {
    function LoggingService() {
    }
    LoggingService.prototype.log = function (msg) { console.log(msg); };
    LoggingService.prototype.error = function (msg) { console.error(msg); };
    LoggingService.prototype.warn = function (msg) { console.warn(msg); };
    LoggingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoggingService);
    return LoggingService;
}());
exports.LoggingService = LoggingService;
//# sourceMappingURL=logging.service.js.map
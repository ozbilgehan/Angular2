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
var http_1 = require('@angular/http');
var core_2 = require('angular2-logger/core');
var mock_modules_1 = require('./mock-modules');
var AuthorizationService = (function () {
    function AuthorizationService(_http, _logger) {
        this._http = _http;
        this._logger = _logger;
        this._productUrl = 'api/products.json';
    }
    ;
    AuthorizationService.prototype.getModules = function () {
        return Promise.resolve(mock_modules_1.MODULES);
        // return null;
        // return this._http.get(this._productUrl)
        //     .map((response: Response) => <IModule[]>response.json())
        //     .do(data => console.debug(JSON.stringify(data)))
        //     .catch(this.handleError);
    };
    AuthorizationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, core_2.Logger])
    ], AuthorizationService);
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;
//# sourceMappingURL=authorization.service.js.map
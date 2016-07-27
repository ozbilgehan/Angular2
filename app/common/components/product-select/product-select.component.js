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
var router_1 = require('@angular/router');
var authorization_service_1 = require('../../services/authorization.service');
var ProductSelectComponent = (function () {
    function ProductSelectComponent(_authorizationService) {
        this._authorizationService = _authorizationService;
    }
    ProductSelectComponent.prototype.ngOnInit = function () {
        this.getModules();
        // this._productService.getProducts()
        //     .subscribe(products => this.productList = products
        //     , err => this.errorMessage = <any>err);
    };
    ProductSelectComponent.prototype.getModules = function () {
        var _this = this;
        this._authorizationService.getModules().then(function (modules) { return _this.modules = modules; });
    };
    ProductSelectComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/common/components/product-select/product-select.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [authorization_service_1.AuthorizationService])
    ], ProductSelectComponent);
    return ProductSelectComponent;
}());
exports.ProductSelectComponent = ProductSelectComponent;
//# sourceMappingURL=product-select.component.js.map
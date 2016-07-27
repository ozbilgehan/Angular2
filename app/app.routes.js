"use strict";
//external modules
var router_1 = require('@angular/router');
//internal modules
var app_component_1 = require('./app.component');
var login_component_1 = require('./common/components/login/login.component');
var product_select_component_1 = require('./common/components/product-select/product-select.component');
exports.routes = [
    {
        path: '',
        //redirectTo: '/login',
        //terminal: true,
        component: app_component_1.AppComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'product-select',
        component: product_select_component_1.ProductSelectComponent
    },
    {
        path: 'modules',
        component: product_select_component_1.ProductSelectComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map
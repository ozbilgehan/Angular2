"use strict";
//external modules
var router_1 = require('@angular/router');
//internal modules
var login_component_1 = require('./common/components/login/login.component');
exports.routes = [
    {
        path: '',
        redirectTo: '/login',
        terminal: true,
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map
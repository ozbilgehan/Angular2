"use strict";
//external modules
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var core_1 = require('angular2-logger/core');
//internal modules
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    core_1.Logger,
    app_routes_1.APP_ROUTER_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms() //yeni form provider
])
    .then(function (msg) { return console.debug('Application Loaded'); })
    .catch(function (err) { return console.error('[Application Load Error] ' + err); });
//# sourceMappingURL=main.js.map
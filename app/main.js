"use strict";
//external modules
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
//internal modules
var app_component_1 = require('./app.component');
var logging_service_1 = require('./common/services/logging.service');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    logging_service_1.LoggingService,
    app_routes_1.APP_ROUTER_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms() //yeni form provider
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map
//external modules
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { Logger } from 'angular2-logger/core';

//internal modules
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    Logger, //logging service
    APP_ROUTER_PROVIDERS,   //tanımlanmış route'ları register ediyoruz
    disableDeprecatedForms(),   //eski form handler, yeni versiyon geçildiğinde kaldırılabilir
    provideForms()  //yeni form provider
])
    .then((msg: any) => console.debug('Application Loaded'))
    .catch((err: any) => console.error('[Application Load Error] ' + err));

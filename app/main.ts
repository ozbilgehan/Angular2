//external modules
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

//internal modules
import { AppComponent } from './app.component';
import { LoggingService } from './common/services/logging.service';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    LoggingService, //logging service
    APP_ROUTER_PROVIDERS,   //tanımlanmış route'ları register ediyoruz
    disableDeprecatedForms(),   //eski form handler, yeni versiyon geçildiğinde kaldırılabilir
    provideForms()  //yeni form provider
]).catch((err: any) => console.error(err));

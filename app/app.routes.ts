//external modules
import { provideRouter, RouterConfig }  from '@angular/router';
//internal modules
import { AppComponent } from './app.component';
import { LoginComponent } from './common/components/login/login.component';

export const routes: RouterConfig = [
    {
        path: '',
        //redirectTo: '/login',
        //terminal: true,
        component: AppComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
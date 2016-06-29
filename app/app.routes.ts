//external modules
import { provideRouter, RouterConfig }  from '@angular/router';
//internal modules
import { LoginComponent } from './common/components/login/login.component';

export const routes: RouterConfig = [
    {
        path: '',   //domain, subdomain, session bilgilerinin kontrol edildiği ilk path
        redirectTo: '/login',
        terminal: true,
    },
    {
        path: 'login',
        component: LoginComponent
    },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
//external modules
import { Component, OnInit } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

//internal modules
import { AuthorizationService } from './common/services/authorization.service';

@Component({
    selector: 'main-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthorizationService,
        HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
    constructor(private _router: Router) {
    }

    ngOnInit(): void {
        //TODO: session kontrolleri
        this._router.navigate(['/login']);
    }
}

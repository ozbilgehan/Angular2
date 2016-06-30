//external modules
import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'main-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit {
    constructor(private _router: Router) {
    }

    ngOnInit(): void {
        //TODO: session kontrolleri
        this._router.navigate(['/login']);
    }
}

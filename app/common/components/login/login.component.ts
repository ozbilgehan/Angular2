//external modules
import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { Logger } from 'angular2-logger/core';
import { Router } from '@angular/router';

export interface IUser {
    userName: string;
    password: string;
}

@Component({
    templateUrl: 'app/common/components/login/login.component.html'
})

export class LoginComponent {
    active: boolean = true;
    user: IUser = <IUser>{};

    constructor(private _router: Router) {
    }

    onLogin(): void {
        this._router.navigate(['/product-select']);
    }

    resetForm(): void {
        this.user = <IUser>{};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
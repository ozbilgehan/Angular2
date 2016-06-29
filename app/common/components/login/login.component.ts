//external component
import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { Logger } from 'angular2-logger/core';

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

    onLogin(): void {

    }
    
    resetForm(): void {
        this.user = <IUser>{};
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
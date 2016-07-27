//external modules
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

//internal modules
import { IModule } from '../../services/module.model';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
    templateUrl: 'app/common/components/product-select/product-select.component.html',
    directives: [ROUTER_DIRECTIVES],
})

export class ProductSelectComponent {
    modules: IModule[];

    constructor(private _authorizationService: AuthorizationService) {
    }

    ngOnInit(): void {
        this.getModules();

        // this._productService.getProducts()
        //     .subscribe(products => this.productList = products
        //     , err => this.errorMessage = <any>err);
    }

    getModules(): void {
        this._authorizationService.getModules().then(modules => this.modules = modules);
    }
}
//external modules
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Logger } from 'angular2-logger/core';

//internal modules
import { IModule } from './module.model';
import { MODULES } from './mock-modules';

@Injectable()
export class AuthorizationService {
    private _productUrl = 'api/products.json';
    
    constructor(private _http: Http, private _logger: Logger) {
    };

    getModules(): Promise<IModule[]> {
        return Promise.resolve(MODULES);
        // return null;
        // return this._http.get(this._productUrl)
        //     .map((response: Response) => <IModule[]>response.json())
        //     .do(data => console.debug(JSON.stringify(data)))
        //     .catch(this.handleError);
    }

    // private handleError(error: Response): Observable<string> {
    //     this._logger.error(error.json().error);
    //     return Observable.throw(error.json().error || 'Server error');
    // }
}
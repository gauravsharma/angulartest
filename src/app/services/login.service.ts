import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../../app.settings';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  private loginApi = AppSettings.API_ENDPOINT + 'api/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  private authenticationData: any;

  constructor(private http: Http) { }

  login(username: string, password: string) {

    //{"where":{"name":"test","email":"test@string.com"}}

    // var params = new URLSearchParams();
    // params.set('email', username);
    // params.set('password', password);

    var filter = '{"where":{"email":"' + username + '","password":"' + password + '"}}';

    return this.http.get(this.loginApi + 'users?filter=' + encodeURIComponent(filter))
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}

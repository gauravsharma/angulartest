import { Injectable } from '@angular/core';
import {  Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../../app.settings';

@Injectable()
export class SearchService {
  private searchApi = AppSettings.API_ENDPOINT + '/search';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  search(q: string) {
    var params = new URLSearchParams();
    params.set('search', q);
    return this.http.get(this.searchApi, {search:params}).map((res:Response) => res.json());
  }

}

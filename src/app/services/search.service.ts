import { Injectable } from '@angular/core';
import {  Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  private searchApi = 'http://localhost:3000/search';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  search(q: string) {
    var params = new URLSearchParams();
    params.set('search', q);
    return this.http.get(this.searchApi, {search:params}).map((res:Response) => res.json());
  }

}

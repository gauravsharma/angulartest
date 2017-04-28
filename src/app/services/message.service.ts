import { Injectable } from '@angular/core';
import {  Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {
  private messagesApi = 'http://localhost:3000/api/messages';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  create(message) {
    console.log(message);
    let body = JSON.stringify(message);
    return this.http.post(this.messagesApi, body, this.options)
      .map((res: Response) => res.json());
  }

  update(message) {
    let body = JSON.stringify(message);
    return this.http.put(this.messagesApi + '/' + message.id, body, this.options)
    .map((res: Response) => res.json());
  }

  delete(id) {
    return this.http.delete(this.messagesApi + '/' + id);
  }

  get() {
    return this.http.get(this.messagesApi).map((res:Response) => res.json());
  }

}

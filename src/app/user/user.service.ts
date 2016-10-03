import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // TODO: look further into this import

import { API_URL } from '../shared/index';
import { User } from './user';

const LOGIN_URL = `${API_URL}/me`;

@Injectable()
export class UserService {

  options: RequestOptions;

  constructor(private http: Http) {}

  private extractData(response: Response) {
    return response.json();
  }

  login(username, password): Observable<User> {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    this.options = new RequestOptions({ headers: headers });
    return this.http.get(LOGIN_URL, this.options)
      .map(this.extractData);
  }

}

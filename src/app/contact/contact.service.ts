import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // TODO: look further into this import

import { Contact } from './contact';

const API_URL = 'http://localhost:8000/contact';

@Injectable()
export class ContactService {

  options: RequestOptions;

  constructor(private http: Http) {
    let username = 'aaccurso';
    let password = 'secret';
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    this.options = new RequestOptions({ headers: headers });
  }

  private extractData(response: Response) {
    return response.json();
  }

  findAll(): Observable<Contact[]> {
    return this.http.get(API_URL, this.options)
      .map(this.extractData);
  }

  findOne(id: string): Observable<Contact> {
    return this.http.get(`${API_URL}/${id}`, this.options)
      .map(this.extractData);
  }

  upsert(upsertContact: Contact): Observable<Contact> {
    if (upsertContact._id) { // Update contact
      return this.http.put(`${API_URL}/${upsertContact._id}`, upsertContact, this.options)
        .map(this.extractData);
    } else { // Insert contact
      delete upsertContact._id;
      return this.http.post(API_URL, upsertContact, this.options)
        .map(this.extractData);
    }
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`, this.options);
  }

}

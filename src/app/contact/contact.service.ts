import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // TODO: look further into this import

import { API_URL } from '../shared/index';
import { Contact } from './contact';
import { UserService } from '../user/user.service';

const CONTACT_URL = `${API_URL}/contact`;

@Injectable()
export class ContactService {

  options: RequestOptions;

  constructor(
    private http: Http, 
    private userService: UserService
  ) {}

  private extractData(response: Response) {
    return response.json();
  }

  findAll(): Observable<Contact[]> {
    return this.http.get(CONTACT_URL, this.userService.options)
      .map(this.extractData);
  }

  findOne(id: string): Observable<Contact> {
    return this.http.get(`${CONTACT_URL}/${id}`, this.userService.options)
      .map(this.extractData);
  }

  upsert(upsertContact: Contact): Observable<Contact> {
    let contactId = upsertContact._id;
    delete upsertContact._id;
    delete upsertContact.user;
    if (contactId) { // Update contact
      return this.http.put(`${CONTACT_URL}/${contactId}`, upsertContact, this.userService.options)
        .map(this.extractData);
    } else { // Insert contact
      return this.http.post(CONTACT_URL, upsertContact, this.userService.options)
        .map(this.extractData);
    }
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${CONTACT_URL}/${id}`, this.options);
  }

}

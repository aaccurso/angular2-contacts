import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contact';
import { contactsMock } from './contacts-mock';

@Injectable()
export class ContactService {

  findAll(): Observable<Contact[]> {
    return Observable.create(observer => {
      observer.next(contactsMock);
      observer.complete();
    });
  }

  findOne(id: number): Observable<Contact> {
    let contacts = contactsMock.filter(contact => contact.id === id);
    return Observable.create(observer => {
      observer.next(contacts[0]);
      observer.complete();
    });
  }

}

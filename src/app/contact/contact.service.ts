import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contact';
import { contactsMock } from './contacts-mock';

@Injectable()
export class ContactService {

  contacts: Contact[] = contactsMock;

  findAll(): Observable<Contact[]> {
    return Observable.create(observer => {
      observer.next(this.contacts);
      observer.complete();
    });
  }

  findOne(id: number): Observable<Contact> {
    let filteredContacts = this.contacts.filter(contact => contact.id === id);
    return Observable.create(observer => {
      observer.next(filteredContacts[0]);
      observer.complete();
    });
  }

  upsert(contact: Contact): Observable<Contact> {
    contact.id = this.contacts.length + 1;
    return Observable.create(observer => {
      let contacts = this.contacts.slice(0);
      contacts.push(contact);
      this.contacts = contacts;
      observer.next(contact);
      observer.complete();
    });
  }

}

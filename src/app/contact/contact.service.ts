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

  upsert(upsertContact: Contact): Observable<Contact> {
    return Observable.create(observer => {
      let contacts: Contact[];
      if (upsertContact.id) { // Update contact
        contacts = this.contacts.filter(contact => contact.id !== upsertContact.id);
      } else { // Insert contact
        upsertContact.id = this.contacts.length + 1;
        contacts = this.contacts.slice(0);
      }
      contacts.push(upsertContact);
      this.contacts = contacts;
      observer.next(upsertContact);
      observer.complete();
    });
  }

}

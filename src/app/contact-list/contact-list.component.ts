import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../contact/contact';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(
    private router: Router,
    private contactService: ContactService
  ) {}

  onSelect(contact: Contact) {
    this.router.navigate(['/contact', contact._id]);
  }

  getContacts() {
    this.contactService.findAll().subscribe(contacts => this.contacts = contacts);
  }

  createContact() {
    this.router.navigate(['/form/contact']);
  }

  deleteContact(contactToDelete: Contact) {
    this.contactService.delete(contactToDelete._id).subscribe(() => {
      this.contacts = this.contacts.filter(contact => contact._id !== contactToDelete._id);
    });
  }

  ngOnInit() {
    this.getContacts();
  }

}

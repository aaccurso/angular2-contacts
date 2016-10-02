import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../contact/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    {
      id: 1,
      name: 'Alan Accurso',
      email: 'a@a.com',
      phoneNumber: '1234-5678',
      cellPhoneNumber: '11-2345-1234'
    }
  ];

  constructor(private router: Router) {}

  onSelect(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

  ngOnInit() {}

}

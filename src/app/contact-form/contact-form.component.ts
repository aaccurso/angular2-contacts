import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../contact/contact';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact: Contact;

  constructor(
    private router: Router,
    private contactService: ContactService
  ) {}

  newContact(): Contact {
    return {id: 0, email: '', name: '', phoneNumber: '', cellPhoneNumber: ''};
  }

  onSubmit() {
    this.contactService.upsert(this.contact)
      .subscribe(() => this.router.navigate(['']));
  }

  ngOnInit() {
    this.contact = this.newContact();
  }

}

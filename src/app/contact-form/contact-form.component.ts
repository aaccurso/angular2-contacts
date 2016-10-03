import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  onSubmit() {
    this.contactService.upsert(this.contact)
      .subscribe(() => this.router.navigate(['']));
  }

  ngOnInit() {
    let contactId = this.route.snapshot.params['id'];
    this.contact = new Contact();
    if (contactId) {
      this.contactService.findOne(contactId)
        .subscribe(contact => this.contact = contact);
    }
  }

}

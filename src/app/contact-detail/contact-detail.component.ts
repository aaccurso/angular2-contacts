import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Contact } from '../contact/contact';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  getContact() {
    let id = +this.route.snapshot.params['id']; // (+) converts string 'id' to a number
    this.contactService.findOne(id).subscribe(contact => this.contact = contact);
  }

  ngOnInit() {
    this.getContact();
  }

}

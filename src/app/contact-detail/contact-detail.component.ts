import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    let id = this.route.snapshot.params['id'];
    this.contactService.findOne(id).subscribe(contact => this.contact = contact);
  }

  editContact() {
    this.router.navigate(['/form/contact/', this.contact._id]);
  }

  ngOnInit() {
    this.getContact();
  }

}

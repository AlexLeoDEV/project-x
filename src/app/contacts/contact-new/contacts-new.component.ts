import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactsService } from '../contacts.service';
import { Contact, Contacts } from '../contact.model';

@Component({
  templateUrl: './contacts-new.component.html',
  styleUrls: ['./contacts-new.component.css']
})
export class ContactsNewComponent implements OnInit {
  contacts: Contacts = [];
  contact: Contact = {
    contactId: '',
    contactName: '',
    contactNumber: '',
    imageUrl: ''
  };

  constructor(private contactsService: ContactsService,
              private router: Router) { }

  ngOnInit() {
  }

  onBack(): void {
    this.router.navigate(['/contacts']);
  }

  onCreateContact(contact: Contact) {
    return this.contactsService.createContact(contact)
      .subscribe((newContact: Contact) => {
        this.onBack();
      });
  }
}






import { Component, OnInit } from '@angular/core';

import { ContactsService } from './contacts.service';

@Component({
  template: `<router-outlet></router-outlet>`
})
export class ContactsPageComponent implements OnInit {

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contactsService.getContacts().subscribe();
  }

}

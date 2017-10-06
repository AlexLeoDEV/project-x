import {Component, OnInit} from '@angular/core';

import { ContactsService } from '../contacts.service';
import { Contact, Contacts } from '../contact.model';

@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  errorMessage: string;
  filteredContacts: Contacts;
  contacts: Contacts;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter =  value;
    this.filteredContacts = this.listFilter ? this.performFilter(this.listFilter) : this.contacts;
  }

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.contacts.subscribe((contacts: Contacts) => {
        this.contacts = contacts;
        this.filteredContacts = this.contacts;
    }, error => this.errorMessage = <any>error);
    this.filteredContacts = this.contacts;
  }

  performFilter(filterBy: string): Contacts {
    filterBy = filterBy.toLocaleLowerCase();
    return this.contacts.filter((contact: Contact) =>
    contact.contactName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}


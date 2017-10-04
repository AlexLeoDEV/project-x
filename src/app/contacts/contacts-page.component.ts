import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contactsService.getContacts().subscribe();
  }

}

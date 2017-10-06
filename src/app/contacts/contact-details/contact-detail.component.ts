import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ContactsService } from '../contacts.service';
import { Contact } from '../contact.model';

@Component({
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  errorMessage: string;
  contact: Contact;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contactsService: ContactsService,
              private http: HttpClient) {
  }

  ngOnInit() {
    const id  = +this.route.snapshot.paramMap.get('id');
    this.getContact(id.toString());
  }

  getContact(id: string) {
    this.contactsService.getContact(id).subscribe(
      contact => this.contact = contact,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/contacts']);
  }

  onUpdateClientInfo(contact: Contact) {
    return this.http.put<Contact>('//localhost:62395/JsonTest/UpdateClientInfo/', contact)
      .subscribe((newContact: Contact) => {
      alert(newContact.contactName);
    });
  }
}



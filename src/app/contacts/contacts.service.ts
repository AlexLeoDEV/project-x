import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Contact, Contacts } from './contact.model';

@Injectable()
export class ContactsService {
  contacts: BehaviorSubject<Contacts> = new BehaviorSubject([]);

  private contactUrl = './api/contacts/contacts.json';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contacts> {
    return this.http.get<Contacts>(this.contactUrl)
      .do(data => this.contacts.next(data))
      .catch(this.handleError);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('//localhost:62395/JsonTest/NewClient/', contact)
      .do((newContact: Contact) => {
        const previousListOfContact = this.contacts.getValue();
        previousListOfContact.push(newContact);
        this.contacts.next(previousListOfContact);
    });
  }

  getContact(id: string): Observable<Contact> {
    return this.getContacts()
      .map((contacts: Contacts) => contacts.find(p => p.contactId === id));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}




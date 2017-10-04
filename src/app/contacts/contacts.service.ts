import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Contact, Contacts } from './contact.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactsService {
  private _contactUrl = './api/contacts/contacts.json';

  contacts: BehaviorSubject<Contacts> = new BehaviorSubject([]);
  constructor(private http: HttpClient) { }


  getContacts(): Observable<Contacts> {
    return this.http.get<Contacts>(this._contactUrl)
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




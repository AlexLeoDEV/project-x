import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Message, Messages } from './message.model';

@Injectable()
export class MessagesService {
  private messageUrl = './api/contacts/messages.json';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Messages> {
    return this.http.get<Messages>(this.messageUrl)
      .catch(this.handleError);
  }

  getMessage(id: number): Observable<Message> {
    return this.getMessages()
      .map((messages: Messages) => messages.find(p => p.contactId === id));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}





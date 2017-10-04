import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { MessagesService } from '../messages.service';
import { Message } from '../message.model';

@Component({
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  errorMessage: string;
  message: Message;

  constructor(private route: ActivatedRoute,
              private messagesService: MessagesService,
              private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getMessage(parseInt(params.id, 10));
    });
  }

  getMessage(id: number) {
    this.messagesService.getMessage(id).subscribe(
      message => this.message = message,
      error => this.errorMessage = <any>error);
  }

  onSendMessage(message: Message) {
    return this.http.post<Message>('//localhost:62395/JsonTest/SendMessage/', message)
      .subscribe((newMessage: Message) => {
        alert(newMessage.messageNew);
      });
  }
}

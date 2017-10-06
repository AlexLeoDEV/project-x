import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessagesService } from './messages.service';
import { Messages } from './message.model';

@Component({
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  errorMessage: string;
  messages: Messages;

  constructor(private messagesService: MessagesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.messagesService.getMessages()
      .subscribe(message => {
          this.messages = message;
      },
      error => this.errorMessage = <any>error);
  }

  hasActiveSubRoute(): boolean {
    return !!this.activatedRoute.children.length;
  }

  removeSubRoute() {
    this.router.navigate(['messages']);
  }
}

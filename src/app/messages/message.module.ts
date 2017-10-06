import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MdIconModule, MdButtonModule, MatInputModule, MdListModule, MdSidenavModule,
  MdToolbarModule, MdTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { MessageDetailComponent } from './message-details/message-detail.component';
import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages.component';

const messageRoutes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    children: [
      {path: ':id', component: MessageDetailComponent}
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MdButtonModule,
    MdIconModule,
    MdTabsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(messageRoutes)
  ],
  declarations: [
    MessageDetailComponent,
    MessagesComponent
  ],
  providers: [
    MessagesService
  ]
})
export class MessageModule { }


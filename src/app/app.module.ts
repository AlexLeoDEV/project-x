import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdIconModule, MdListModule, MdSidenavModule,
MdTabsModule, MdToolbarModule, MatInputModule, MatMenuModule, MatRadioModule } from '@angular/material';

import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MdButtonModule,
    MdIconModule,
    MdTabsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {
        path: 'contacts',
        loadChildren: './contacts/contact.module#ContactModule'
      },
      {
        path: 'messages',
        loadChildren: './messages/message.module#MessageModule'
      }
      // { path: '',   redirectTo: '/contacts', pathMatch: 'full' },
      // { path: '**', component: PageNotFoundComponent }
    ]),
    SharedModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MdButtonModule, MdIconModule, MatInputModule, MdListModule,
  MdSidenavModule, MdToolbarModule, MdTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ContactDetailComponent } from './contact-details/contact-detail.component';
import { ContactsService } from './contacts.service';
import { ContactsNewComponent } from './contact-new/contacts-new.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsPageComponent } from './contacts-page.component';
import { ContactFrequentPipe } from './contact-frequent.pipe';

const contactRoutes: Routes = [
  {
    path: '',
    component: ContactsPageComponent,
    children: [
      { path: '', component: ContactListComponent },
      { path: 'view/:id', component: ContactDetailComponent },
      { path: 'new', component: ContactsNewComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MdTabsModule,
    MdToolbarModule,
    MdSidenavModule,
    RouterModule.forChild(contactRoutes)
  ],
  declarations: [
    ContactListComponent,
    ContactsPageComponent,
    ContactDetailComponent,
    ContactsNewComponent,
    ContactFrequentPipe
  ],
  providers: [ContactsService]
})
export class ContactModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactService } from './contact/contact.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactFormComponent,
    LoginFormComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    appRoutingProviders,
    ContactService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

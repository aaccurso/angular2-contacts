import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const appRoutes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactDetailComponent },
  { path: 'form/contact', component: ContactFormComponent },
  { path: 'form/contact/:id', component: ContactFormComponent },
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

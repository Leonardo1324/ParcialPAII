import { Routes } from '@angular/router';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';

export const routes: Routes = [

 { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: AppointmentListComponent },
  { path: 'create', component: AppointmentFormComponent },
  { path: 'edit/:id', component: AppointmentFormComponent },
  { path: 'datos', component: DatosPersonalesComponent  }
];

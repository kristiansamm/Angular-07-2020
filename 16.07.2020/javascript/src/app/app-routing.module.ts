import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { FormComponent } from './form/form.component';
import { ReviewComponent } from './review/review.component';
import { RegistrationsComponent } from './registrations/registrations.component';


const routes: Routes = [
  { path: 'clock', component: ClockComponent },
  { path: 'form', component: FormComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'registrations', component: RegistrationsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

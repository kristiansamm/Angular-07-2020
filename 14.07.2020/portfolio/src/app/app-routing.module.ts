import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CoursesComponent } from './courses/courses.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'work', component: WorkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

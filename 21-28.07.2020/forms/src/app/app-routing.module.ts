import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemComponent } from './item/item.component';
import { NumberViewComponent } from './number-view/number-view.component';
import { MainComponent } from './main/main.component';
import { ComputerEditComponent } from './computer/computer-edit/computer-edit.component';
import { ComputerComponent } from './computer/computer.component';


const routes: Routes = [
  { path: '', component: MainComponent } ,
  { path: 'item', component: ItemComponent } ,
  { path: 'item/:breed/:name', component: ItemViewComponent },
  { path: 'number/:index/:generated', component: NumberViewComponent },
  { path: 'computer', component: ComputerComponent },
  { path: 'computer/:id', component: ComputerEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

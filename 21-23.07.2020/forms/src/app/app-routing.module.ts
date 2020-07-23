import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemComponent } from './item/item.component';
import { NumberViewComponent } from './number-view/number-view.component';


const routes: Routes = [
  { path: '', component: ItemComponent } ,
  { path: 'item/:breed/:name', component: ItemViewComponent },
  { path: 'number/:index/:generated', component: NumberViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

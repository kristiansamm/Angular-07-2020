import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemComponent } from './item/item.component';
import { ShortenPipe } from './item-view/shorten.pipe';
import { NumberViewComponent } from './number-view/number-view.component';
import { DoublePipe } from './number-view/double.pipe';
import { MainComponent } from './main/main.component';
import { ComputerComponent } from './computer/computer.component';
import { ComputerEditComponent } from './computer/computer-edit/computer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemViewComponent,
    ItemComponent,
    ShortenPipe,
    NumberViewComponent,
    DoublePipe,
    MainComponent,
    ComputerComponent,
    ComputerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

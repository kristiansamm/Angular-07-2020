import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PictureComponent } from './main/picture/picture.component';
import { TextComponent } from './main/text/text.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { WorkComponent } from './work/work.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { CoursesComponent } from './courses/courses.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PictureComponent,
    TextComponent,
    CategoriesComponent,
    WorkComponent,
    HobbiesComponent,
    CoursesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

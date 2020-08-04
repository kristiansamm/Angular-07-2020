  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './global/menu/menu.component';
import { FooterComponent } from './global/footer/footer.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemViewComponent } from './item/item-view/item-view.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { HeaderComponent } from './global/menu/header/header.component';
import { ItemNewComponent } from './item/item-new/item-new.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ItemComponent,
    ItemListComponent,
    ItemViewComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    HeaderComponent,
    ItemNewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { ToastService, AngularToastifyModule } from 'angular-toastify'; 

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
import { UniquePipe } from './item/item-list/unique.pipe';
import { CategoryFilterPipe } from './item/item-list/category-filter.pipe';
import { CartComponent } from './cart/cart.component';
import { ItemAllComponent } from './item/item-all/item-all.component';

export function createHttploader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    UniquePipe,
    CategoryFilterPipe,
    CartComponent,
    ItemAllComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    AngularToastifyModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: createHttploader, // exported factory function needed for AoT compilation
          deps: [HttpClient]
      }
    })
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
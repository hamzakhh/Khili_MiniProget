import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AcuuielComponent } from './acuuiel/acuuiel.component';

import { ErroreComponent } from './errore/errore.component';
import { ListvoyageComponent } from './listvoyage/listvoyage.component';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';


import {environment} from 'src/environments/environment';
import { AdmineComponent } from './Admine/admine/admine.component';
import { HttpClientModule } from '@angular/common/http';
import { ContacteComponent } from './contacte/contacte.component';
import { VoyDetaileComponent } from './voy-detaile/voy-detaile.component';
import { ModifierComponent } from './modifier/modifier.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AcuuielComponent,


    ErroreComponent,
    ListvoyageComponent,
    
    LoginComponent,
    AdmineComponent,
    ContacteComponent,
    VoyDetaileComponent,
    ModifierComponent,
 

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    ReactiveFormsModule,
  Ng2SearchPipeModule,
  Ng2OrderModule,
  NgxPaginationModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {
  PrincipalComponent,
  LoginComponent,
  StoreComponent,
  GalleryComponent,
  ContactComponent,
  MaintopbarComponent
} from './pages/index';

import {
  AuthService
} from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    StoreComponent,
    GalleryComponent,
    ContactComponent,
    MaintopbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MaintopbarComponent, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

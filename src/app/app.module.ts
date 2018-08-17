import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import { AppComponent } from './app.component';

import {
  PrincipalComponent,
  LoginComponent,
  StoreComponent,
  GalleryComponent,
  ContactComponent,
  MaintopbarComponent
} from './pages/index';

var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);

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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MaintopbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

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


const config = {
  apiKey: "AIzaSyC2GOASv4l06TQxfDxpoR031KxR9wruBUQ",
  authDomain: "proyecto-web1-4a024.firebaseapp.com",
  databaseURL: "https://proyecto-web1-4a024.firebaseio.com",
  projectId: "proyecto-web1-4a024",
  storageBucket: "proyecto-web1-4a024.appspot.com",
  messagingSenderId: "1021512951387"
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {
  PrincipalComponent,
  LoginComponent,
  StoreComponent,
  GalleryComponent,
  ContactComponent,
  MaintopbarComponent
} from './pages/index';

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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {
  AuthGuard
} from './guards/index';
import {
  LoginComponent,
  StoreComponent,
  GalleryComponent,
  ContactComponent,
  MaintopbarComponent,
  HomeComponent,
  NotFoundPageComponentComponent,
  PrivateZoneComponent,
  ImgGalleryComponent

} from './pages/index';

import {
  AuthService
} from './services/index';

import {
  StoreItemsComponent,
  CartItemsComponent,

} from './components/index';

import { ImageService } from './services/image.service';
import { FilterPipeService } from './services/filter-pipe.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoreComponent,
    GalleryComponent,
    ContactComponent,
    MaintopbarComponent,
    HomeComponent,
    NotFoundPageComponentComponent,
    PrivateZoneComponent,
    StoreItemsComponent,
    CartItemsComponent,
    ImgGalleryComponent,
    FilterPipeService
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MaintopbarComponent, AuthService, AuthGuard, ImageService, FilterPipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

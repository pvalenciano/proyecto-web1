import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/main/principal/principal.component';
import { LoginComponent } from './pages/main/login/login.component';
import { StoreComponent } from './pages/detail/store/store.component';
import { GalleryComponent } from './pages/detail/gallery/gallery.component';
import { ContactComponent } from './pages/detail/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    StoreComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

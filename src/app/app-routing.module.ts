import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  LoginComponent,
  // PrincipalComponent,
  GalleryComponent,
  ContactComponent,
  StoreComponent,
  MaintopbarComponent,
  HomeComponent,
  NotFoundPageComponentComponent,
  PrivateZoneComponent,
  
  ImgGalleryComponent
} from './pages/index';

import { componentFactoryName } from '../../node_modules/@angular/compiler';
import {
  AuthGuard
} from './guards/index';
const routes: Routes = [

  // { path: '', redirectTo: 'nav/login', pathMatch: 'full'  },
  // {
  //   path: 'nav',
  //   component: MaintopbarComponent,
  //   children: [
  //     { path: 'login', component: LoginComponent },
  //     {path:'principal', component:PrincipalComponent}


  //   ]
  // },
  // { path: '', redirectTo: 'nav', pathMatch: 'full'  },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  { path: 'image/:id', component: ImgGalleryComponent, canActivate:[AuthGuard] },
  { path: 'nav', component: MaintopbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PrivateZoneComponent, canActivate: [AuthGuard] },
  { path: 'store', component: StoreComponent, canActivate: [AuthGuard] },

  { path: '**', component: NotFoundPageComponentComponent },
  // { path: 'private-zone', component: NotFoundPageComponentComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

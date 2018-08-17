import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  LoginComponent,
  PrincipalComponent,
  GalleryComponent,
  ContactComponent,
  StoreComponent,
  MaintopbarComponent,
  HomeComponent
} from './pages/index';
import { componentFactoryName } from '../../node_modules/@angular/compiler';

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
  { path: '', component: HomeComponent},
  { path: 'nav', component: MaintopbarComponent},
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent }
  // { path: '**', component: NotFounComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

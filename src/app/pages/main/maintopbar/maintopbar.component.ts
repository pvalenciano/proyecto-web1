import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../../services/index';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-maintopbar',
  templateUrl: './maintopbar.component.html',
  styleUrls: ['./maintopbar.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class MaintopbarComponent implements OnInit {

  public userData ={
    isLogin:false,
    userName:'',
    userEmail: '',
    userPhoto:''
  }
  
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        console.log('auth: ',auth);
        this.userData.isLogin = true;
        this.userData.userName = auth.displayName;
        this.userData.userEmail = auth.email;
        this.userData.userPhoto = auth.photoURL;

      } else {
        this.userData.isLogin = false;
      }
    })
  }

  public onClickLogout() {
    this.authService.logout();
  }

}

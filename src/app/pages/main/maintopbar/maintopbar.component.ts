import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../../services/index';

@Component({
  selector: 'app-maintopbar',
  templateUrl: './maintopbar.component.html',
  styleUrls: ['./maintopbar.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class MaintopbarComponent implements OnInit {

  public isLogin:boolean;
  public userName:string;
  public userEmail:string;
  
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.userName = auth.displayName;
        this.userEmail = auth.email;


      } else {
        this.isLogin = false;
      }
    })
  }

  public onClickLogout() {
    this.authService.logout();
  }

}

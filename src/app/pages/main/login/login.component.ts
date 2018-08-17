import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public screen = 0;
  public iEmail: string;
  public iPass: string;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

  public onNtwClick(option): void {
    switch (option) {
      case 0:
        //facebook
        console.log('facebook');
        break;
      case 1:
        //google
        console.log('google');
        this.authService.loginGoogle()
          .then((res) => {
            this.router.navigate(['principal']);

          }).catch(err => console.log(err.message));

        break;
      case 2:
        //twitter
        console.log('twitter');

        break;


    }
  }

  public onSubmitAddUser(): void {
    this.authService.registerUser(this.iEmail, this.iPass)
      .then((res) => {
        this.screen = this.screen - 1;
        console.log('Registrado!');
        console.log(res);
      }).catch((err) => {
        console.error(err);
      });
  }

  public onSubmitLoginUser(): void {
    this.authService.loginUser(this.iEmail, this.iPass)
      .then((res) => {
        this.router.navigate(['/principal']);
        console.log('Registrado!');
        console.log(res);
      }).catch((err) => {
        console.error(err);
      });
  }


  public changeScreen(): void {
    if (this.screen == 0) {
      this.screen = this.screen + 1;
    } else {
      this.screen = this.screen - 1;
    }
  }
}

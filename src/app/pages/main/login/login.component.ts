import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public screen = 0;
  constructor(
    public router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
  }

  public changeScreen():void{
    if(this.screen == 0){
      this.screen = this.screen +1;
    }else{
      this.screen = this.screen -1;
    }
  }
}

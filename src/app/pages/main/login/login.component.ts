import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/index';
import { User } from '../../../services/User.model';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  public screen = 0;
  public myForm: FormGroup;
  public userList: User[];
  public valid: boolean = false;
  public error = {
    errorBoolean: false,
    validBoolean: false,
    errorLbl: '',
    styleInput: {
    }
  }

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public authService: AuthService,
    public fb: FormBuilder

  ) {
    this.createForm();
  }


  ngOnInit() {
    var x = this.authService.getData();
    // x.snapshotChanges().subscribe(user => {
    //   this.userList = [];
    //   user.forEach(element => {
    //     var y = element.payload.toJSON();
    //     y['id'] = element.key;
    //     this.userList.push(y as User)
    //   })
    // })
    console.log('x: ', x);

    this.myForm.patchValue({
      'iName': this.authService.name,
      'iPass': this.authService.pass,
      'iEmail': this.authService.email
    });



  }


  public createForm(): void {
    this.myForm = this.fb.group({
      'iName': '',
      'iPass': '',
      'iEmail': '',
      'iPassRep': ''
    })
  }



  public onSubmitAddUser(): void { 
    if(this.myForm.get('iPassRep').value === this.myForm.get('iPass').value){
      console.log("SI");
      this.error = {
        errorBoolean: false,
        validBoolean: true,
        errorLbl:'BIEEEN',
        styleInput: {
          'border-color': 'green'
        }
      }
      this.authService.registerUser(this.myForm.get('iEmail').value, this.myForm.get('iPass').value)
      .then((res) => {
        this.screen = this.screen - 1;
        console.log('Registrado!');
        console.log(res);
      }).catch((err) => {
        console.error(err);
        this.error = {
          errorBoolean: true,
          validBoolean: false,
          errorLbl: err.message,
          styleInput: {
            'border-color': 'red'
          }
        }
      });
     
    }else{
      console.log("NO");
      this.error = {
        errorBoolean: true,
        validBoolean: false,
        errorLbl:'error',
        styleInput: {
          'border-color': 'red'
        }
      }
    }
   
    // this.authService.insertUser(myForm.value);
    // console.log("myForm2: ", this.myForm);
    // console.log('AuthService', this.authService.insertUser(myForm.value));
  }


  public onNtwClick(option): void {
    switch (option) {
      case 0:
        console.log('facebook');
        this.authService.loginFacebook()
          .then((res) => {
            this.router.navigate(['private']);

          }).catch(err => console.log(err.message));
        break;
      case 1:
        console.log('google');
        this.authService.loginGoogle()
          .then((res) => {
            this.router.navigate(['private']);
          }).catch(err => console.log(err.message));

        break;
      case 2:
        console.log('twitter');
        this.authService.loginTwitter()
          .then((res) => {
            this.router.navigate(['private']);
          }).catch(err => console.log(err.message));

        break;


    }
  }


 
  public onSubmitLoginUser(): void {
    this.authService.loginUser(this.myForm.get('iEmail').value, this.myForm.get('iPass').value)
      .then((res) => {

        this.router.navigate(['private']);
        console.log('login correcto!');
        console.log(res);
      }).catch((err) => {
        console.log(err);
        this.error = {
          errorBoolean: true,
          validBoolean: false,
          errorLbl: err.message,
          styleInput: {
            'border-color': 'red'
          }
        }
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

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../../services/index';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-private',
  templateUrl: './private-zone.component.html',
  styleUrls: ['./private-zone.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class PrivateZoneComponent implements OnInit {
  public userData = {
    isLogin: false,
    userName: '',
    userEmail: '',
    userPhoto: ''
  };
  public edit: boolean = false;
  public myForm: FormGroup;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public authService: AuthService,
    public fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

    this.initForm();

  }
  public createForm() {
    this.myForm = this.fb.group({
      'iName': '',
      'iSurname': '',
      'iEmail': '',
      'iAddress': '',
      'iCp': ''

    });
  }
  public initForm() {
    this.myForm.disable();
    this.authService.getAuth().subscribe(auth => {
      this.userData.isLogin = true;
      this.userData.userName = auth.displayName;
      this.userData.userEmail = auth.email;
      this.userData.userPhoto = auth.photoURL;
      this.myForm.patchValue({
        //from database

        'iName': this.userData.userName,
        'iEmail': this.userData.userEmail,
        'iSurname': 'surnames',
        'iAddress': 'address',
        'iCp': 'cp'

      });
    });

  }
  public editButton(): void {
    this.edit = true;
    this.myForm.enable();

  }
  public saveButton(): void {
    this.edit = false;
    this.myForm.disable();

  }
  public cancelButton(): void {
    this.edit = false;
    this.initForm();

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

import { CoreService } from '../../services/core.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin:boolean = true;
  loginErr:boolean = false;
  pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  loginData = {
    emailId: '',
    password: ''
  }
  signUpData = {
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    cnPassword: ''
  }
  constructor(private coreService: CoreService, private router: Router, public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  login() {
    this.coreService.getUsers().subscribe((users: User[]) => {
      let user = users.find((user: User) => (user.emailId == this.loginData.emailId && user.password == this.loginData.password));
      if(user) {
        this.loginErr = false;
        sessionStorage.setItem("userId", user.id.toString());
        sessionStorage.setItem("name", user.firstName);
        this.dialogRef.close();
        window.location.reload();
      } else {
        this.loginErr = true;
      }
    });
  }

  signUp() {
    delete this.signUpData.cnPassword;
    this.coreService.addUser(this.signUpData).subscribe((data: User)=> {
      sessionStorage.setItem("userId", data.id.toString());
      sessionStorage.setItem("name", data.firstName);
      this.dialogRef.close();
      window.location.reload();
    });
  }
}

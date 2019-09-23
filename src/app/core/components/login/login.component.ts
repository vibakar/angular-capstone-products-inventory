import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

import { CoreService } from '../../services/core.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin:boolean = true;
  userExists:boolean = false;
  allUsers: User[];
  loginErr;
  signupErr;
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
    this.getAllUsers();
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  getAllUsers() {
    this.coreService.getUsers().subscribe((users: User[]) => {
      this.allUsers = users;
    }, (err)=> {
      this.allUsers = [];
    });
  }

  login() {
    let user = this.allUsers.find((user: User) => ((user.emailId == this.loginData.emailId) && (user.password == this.loginData.password)));
    if(user) {
      sessionStorage.setItem("userId", user.id.toString());
      this.dialogRef.close();
      window.location.reload();
    } else {
      this.loginErr = "EmailId or Password incorrect";
    }
  }

  signUp() {
    var obj = Object.assign({}, this.signUpData);
    obj['location'] = '';
    obj['mobileNo'] = '';
    obj['views'] = {};
    delete obj['cnPassword'];
    this.coreService.addUser(obj).subscribe((data: User)=> {
      sessionStorage.setItem("userId", data.id.toString());
      this.dialogRef.close();
      window.location.reload();
    }, (err) => {
        this.signupErr = "Something went wrong, try again later";
    });
  }

  checkEmail(event) {
    let user = this.allUsers.find((user: User) => user.emailId === event.target.value);
    if(user) {
      this.userExists = true;
    } else {
      this.userExists = false;
    }
  }
}

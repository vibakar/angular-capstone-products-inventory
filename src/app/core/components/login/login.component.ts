import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin:boolean = true;
  loginData = {
    email: '',
    password: ''
  }
  signUpData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cnPassword: ''
  }
  constructor() { }

  ngOnInit() {
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  login() {
    console.log("-----------", this.loginData)
  }

  signUp() {
    console.log('================', this.signUpData)
  }
}

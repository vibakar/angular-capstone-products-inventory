import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    let email = localStorage.getItem("email");
    if(email)
    	return true;
    else
    	return false;
  }
}

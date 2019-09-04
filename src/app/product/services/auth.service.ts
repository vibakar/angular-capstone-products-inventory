import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    let email = sessionStorage.getItem("userId");
    if(email)
    	return true;
    else
    	return false;
  }
}

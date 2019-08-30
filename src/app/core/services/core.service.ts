import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoreService {
  configUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  isLoggedIn() {
    let email = localStorage.getItem("email");
    if(email)
    	return true;
    else
    	return false;
  }

  getUserById(id) {
  	return this.http.get(this.configUrl + "/users/" + id);
  }

}

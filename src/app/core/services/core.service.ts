import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoreService {
  configUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  isLoggedIn() {
    let email = sessionStorage.getItem("userId");
    if(email)
    	return true;
    else
    	return false;
  }

  getUserById(id) {
  	return this.http.get(this.configUrl + "/users/" + id);
  }

  getUsers() {
    return this.http.get(this.configUrl + "/users/");
  }

  addUser(payload) {
    return this.http.post(this.configUrl + "/users/", payload);
  }
  updateUser(payload) {
    return this.http.put(this.configUrl + "/users/" + payload.id,payload)
  }
}

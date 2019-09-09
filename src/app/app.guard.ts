import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
	
  constructor(private router: Router) {}
  canActivate() {
    let userId = sessionStorage.getItem('userId');
    if(userId) {
    	return true;
    } else {
      alert("Kindly login to add, edit, delete and view product details!");
      this.router.navigateByUrl('/');
    	return false;
    }
  }
}
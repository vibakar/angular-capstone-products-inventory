import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	
  constructor(private authService: AuthService, private router: Router) {}
  canActivate() {
    if(this.authService.isLoggedIn()) {
    	return true;
    } else {
      alert("Kindly login to add, edit, delete and view product details!");
      this.router.navigateByUrl('/');
    	return false;
    }
  }
}

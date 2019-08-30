import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoreService } from '../../services/core.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean = false;
  constructor(private router: Router, private coreService: CoreService) { }

  ngOnInit() {
  	this.isLoggedIn = this.coreService.isLoggedIn();
  }

  goToProfile() {
    console.log("hello")
  	this.router.navigate(['/profile']);
  }
}

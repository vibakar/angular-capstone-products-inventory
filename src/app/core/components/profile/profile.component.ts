import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from '../../models/user'
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private coreService: CoreService) { }
  user:User  = {
    id:null,
   firstName:"",
   lastName:"",
   mobileNo:"",
   emailId:"",
   location:"",
   password:""    
  }
  pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  password = {
    currentPassword:"",
    newPassword:"",
    cnPassword:""
  }
  isEditProfile:boolean = true;
  isEditPassword:boolean = true;
  btnDisable:boolean = false;
  userId:string
  ngOnInit() {
    this.userId= sessionStorage.getItem('userId')
    if(this.userId){
      this.getUserDetail();
    }
  }

  getUserDetail = () => {
    this.coreService.getUserById(this.userId).subscribe((data: User) => {
        console.log(data,"--====---====--===>>>>")
        this.user = data;
    });
  }

  editProfile = () => {
    this.isEditProfile = !this.isEditProfile
    console.log(this.isEditProfile,"--------------------------->>>")
    this.btnDisable = true;
  }

  editProfileDone = () =>{
    this.coreService.updateUser(this.user).subscribe(()=>{
      console.log("sucesss",this.user)
    })
  }

  EditPassword = () =>{
    this.isEditPassword = !this.isEditPassword
    this.btnDisable = true;
  }

  updatePassword =() =>{
    this.user.password=this.password.cnPassword;
    this.coreService.updateUser(this.user).subscribe(()=>{
      console.log("sucesss password",this.user)
    })
  }
}

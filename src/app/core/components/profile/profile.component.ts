import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from '../../models/User';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private coreService: CoreService, private router: Router, private snackBar: MatSnackBar) { }
  user:User  = {
   firstName:"",
   lastName:"",
   mobileNo:"",
   emailId:"",
   location:"",
   password:"",
   views: {}    
  }
  pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  password = {
    currentPassword:"",
    newPassword:"",
    cnPassword:""
  }
  isEditProfile:boolean = true;
  isEditPassword:boolean = true;
  editBtn:boolean = false;
  changeBtn:boolean = false;
  userId:string;
  step = 0;
  ngOnInit() {
    this.userId= sessionStorage.getItem('userId')
    if(this.userId){
      this.getUserDetail();
    }
  }

  getUserDetail = () => {
    this.coreService.getUserById(this.userId).subscribe((data: User) => {
        this.user = data;
    });
  }

  editProfile = () => {
    this.isEditProfile = !this.isEditProfile;
    this.editBtn = true;
  }

  editProfileDone = () =>{
    if(this.editBtn){
      this.coreService.updateUser(this.user).subscribe(()=>{
        this.snackBar.open(`profile updated sucessfully!`, 'Ok',{duration: 3000});
        this.cancel();
        sessionStorage.removeItem('name');
        sessionStorage.setItem("name", this.user.firstName);
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/profile"])); 
      }, (err) => {
        this.snackBar.open(`Failed to update profile, try again later`, 'Ok',{duration: 3000});
      });
    }
    this.step++;
  }

  setStep(index: number) {
    this.step = index;
  }

  updatePassword =() =>{
    if(this.password.cnPassword.length>0){
      this.user.password=this.password.cnPassword;
      this.coreService.updateUser(this.user).subscribe(()=>{
        this.snackBar.open(`Password changed sucessfully!`, 'Ok',{duration: 3000});
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/profile"])); 
      }, (err) => {
        this.snackBar.open(`Failed to change password, try again later`, 'Ok',{duration: 3000});
      })
    }
    
  }

  cancel = () =>{
    this.isEditProfile = true;
    this.editBtn = false;
  }
}

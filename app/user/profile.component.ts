import { Component } from '@angular/core'
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: '/app/user/profile.component.html'
})
export class ProfileComponent implements OnInit{
  private profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router){ }

  ngOnInit(){
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel(){
    this.router.navigate(['events']);
  }

  saveProfile(formValues){
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }

}
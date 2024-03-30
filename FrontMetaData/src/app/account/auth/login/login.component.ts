import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginResponse } from '../../../services/auth.service';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  user = new User();
  err : number = 0;

  constructor(private authService : AuthService,
              private router: Router , private userService :UserService) { }

  ngOnInit(): void {
 
 
  }

  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data: LoginResponse) => {
        console.log(data);

        let jwToken = data.accessToken;
        this.authService.saveToken(jwToken);

        // Store user details in localStorage
        const userDetails = data.userDetails;
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        console.log("userDetails.id");
        console.log(userDetails.id);
        console.log(userDetails.roles);
       
       
        this.userService.setUserId(userDetails.id);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You are Connected',
          showConfirmButton: false,
          timer: 1500
        });

        // Log user details for debugging
        console.log('Retrieved User Details:', this.authService.getUserDetails());

        // Check if the user is an admin
        if (this.authService.isAdmin()) {
          // Redirect to the admin route
          this.router.navigate(['/admin']); // Change '/admin' to the actual admin route
        } else {
          // Redirect to the default route for non-admin users
          this.router.navigate(['/']); // Change '/' to the actual default route
        }
      },
      error: (err: any) => {
        this.err = 1;
      }
    });
  }

    

}
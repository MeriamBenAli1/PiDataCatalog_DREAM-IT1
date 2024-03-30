import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
=======
import { NgModule } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoginResponse } from '../../../services/auth.service';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
>>>>>>> 87a445450 (integration user cleaned)

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
<<<<<<< HEAD
=======
import { User } from '../../../model/user.model';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
>>>>>>> 87a445450 (integration user cleaned)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  loginForm: UntypedFormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder, private route: ActivatedRoute, private router: Router, public authenticationService: AuthenticationService, public authFackservice: AuthfakeauthenticationService) { }

  ngOnInit() {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');

    this.loginForm = this.formBuilder.group({
      email: ['admin@themesdesign.in', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      if (environment.defaultauth === 'firebase') {
        this.authenticationService.login(this.f.email.value, this.f.password.value).then((res: any) => {
          this.router.navigate(['/']);
        })
          .catch(error => {
            this.error = error ? error : '';
          });
      } else {
        this.authFackservice.login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
            data => {
              this.router.navigate(['/']);
            },
            error => {
              this.error = error ? error : '';
            });
      }
    }
  }

}
=======
  
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
>>>>>>> 87a445450 (integration user cleaned)

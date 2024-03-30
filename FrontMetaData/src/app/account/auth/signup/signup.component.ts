import { Component, OnInit, AfterViewInit } from '@angular/core';
<<<<<<< HEAD
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
=======
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
>>>>>>> 87a445450 (integration user cleaned)

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
<<<<<<< HEAD
=======
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../model/user.model';
>>>>>>> 87a445450 (integration user cleaned)

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
<<<<<<< HEAD
export class SignupComponent implements OnInit, AfterViewInit {

  signupForm: UntypedFormGroup;
=======
export class SignupComponent implements OnInit, AfterViewInit  , ReactiveFormsModule{
  signupForm: FormGroup;

>>>>>>> 87a445450 (integration user cleaned)
  submitted = false;
  error = '';
  successmsg = false;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
<<<<<<< HEAD
  constructor(private formBuilder: UntypedFormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
              private userService: UserProfileService) { }
=======
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,) {}

>>>>>>> 87a445450 (integration user cleaned)

  ngOnInit() {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');

    this.signupForm = this.formBuilder.group({
<<<<<<< HEAD
      username: ['', Validators.required],
=======
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
>>>>>>> 87a445450 (integration user cleaned)
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  /**
   * On submit form
   */
<<<<<<< HEAD
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else {
      if (environment.defaultauth === 'firebase') {
        this.authenticationService.register(this.f.email.value, this.f.password.value).then((res: any) => {
          this.successmsg = true;
          if (this.successmsg) {
            this.router.navigate(['/']);
          }
        })
          .catch(error => {
            this.error = error ? error : '';
          });
      } else {
        this.userService.register(this.signupForm.value)
          .pipe(first())
          .subscribe(
            data => {
              this.successmsg = true;
              if (this.successmsg) {
                this.router.navigate(['/account/login']);
              }
            },
            error => {
              this.error = error ? error : '';
            });
      }
    }
=======
   onSubmit() {
    this.submitted = true;

    // Check if the form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    // Call the registerUser method from the AuthService
    const user: User = this.signupForm.value;
    this.authService.registerUser(user).subscribe(
      (response) => {
        // Handle successful registration
        this.successmsg = true;
        Swal.fire({
          title: 'Success!',
          text: 'Account Creadted Succeffully!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#5438dc',
          cancelButtonColor: '#ff3d60'
        });
        this.router.navigate(['/account/login']);

      },
      (error) => {
        // Handle registration error
        this.successmsg = null;  // Change to successmsg
        this.error = 'Registration failed. Please try again.';
      }
    );
>>>>>>> 87a445450 (integration user cleaned)
  }
}

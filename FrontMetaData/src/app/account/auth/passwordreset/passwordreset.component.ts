import { Component, OnInit, AfterViewInit } from '@angular/core';
<<<<<<< HEAD
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
=======
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { ResetPasswordService } from '../../../services/reset-password.service';
import Swal from 'sweetalert2';
>>>>>>> 87a445450 (integration user cleaned)

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss']
})

/**
 * Reset-password component
 */
export class PasswordresetComponent implements OnInit, AfterViewInit {

  resetForm: UntypedFormGroup;
  submitted = false;
<<<<<<< HEAD
  error = '';
  success = '';
=======
  successMsg: string; // Correct case
  error: string;      // Correct case
>>>>>>> 87a445450 (integration user cleaned)
  loading = false;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
<<<<<<< HEAD
  constructor(private formBuilder: UntypedFormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');

    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
=======
  //constructor(private formBuilder: UntypedFormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) { }
  constructor(private formBuilder: FormBuilder, private resetPasswordService: ResetPasswordService ,private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
>>>>>>> 87a445450 (integration user cleaned)
    });
  }

  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
<<<<<<< HEAD
  get f() { return this.resetForm.controls; }
=======
  get f() {
    return this.resetForm.controls;
  }
>>>>>>> 87a445450 (integration user cleaned)

  /**
   * On submit form
   */
<<<<<<< HEAD
  onSubmit() {
    this.success = '';
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }
    if (environment.defaultauth === 'firebase') {
      this.authenticationService.resetPassword(this.f.email.value)
        .catch(error => {
          this.error = error ? error : '';
        });
    }
  }
=======
   onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }

    const email = this.f.email.value;

    this.resetPasswordService.resetPassword(email)
      .subscribe(
        response => {
          // Handle success (e.g., show a success message)
          console.log('Reset email sent successfully');
          Swal.fire({
            title: 'Success!',
            text: 'Email Sent!',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#5438dc',
            cancelButtonColor: '#ff3d60'
          });
        },
        error => {
          // Handle error (e.g., display an error message)
          this.error = 'Failed to send reset email. Please try again.';
          console.error('Reset email failed', error);
         
            Swal.fire({
              title: 'Failed?',
              text: 'User Not Found!',
              icon: 'question',
              confirmButtonColor: '#5438dc'
            });
        }
      );
  }

>>>>>>> 87a445450 (integration user cleaned)
}

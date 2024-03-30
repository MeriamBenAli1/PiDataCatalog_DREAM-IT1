import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit  , ReactiveFormsModule{
  signupForm: FormGroup;

  submitted = false;
  error = '';
  successmsg = false;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router,) {}


  ngOnInit() {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');

    this.signupForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
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
  }
}

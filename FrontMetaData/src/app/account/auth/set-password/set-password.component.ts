import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { ResetPasswordService } from '../../../services/reset-password.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.scss'
})
export class SetPasswordComponent implements OnInit , AfterViewInit  {

  passwordResetToken: string;
  newPassword: string;
  constructor( private route: ActivatedRoute,  private resetPasswordService: ResetPasswordService ) {
  }
  ngAfterViewInit() {
  }



  ngOnInit(): void {
    this.passwordResetToken = this.route.snapshot.paramMap.get('token');
    console.log('Password reset token:', this.passwordResetToken); // Log the token for debugging
  }
  resetPassword() {
    console.log('Resetting password with token:', this.passwordResetToken); // Log the token before calling resetPassword
    this.resetPasswordService.setPassword(this.passwordResetToken, this.newPassword)
      .subscribe(
        response => {
          console.log('Password reset successfully');
          console.log(this.newPassword);
          
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Password modified successfully',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            // Reload the page after the Swal is closed
            window.location.href = '/login';

          });     
        
        },
        error => {
          console.error('Failed to reset password', error);
          // Handle error, such as displaying an error message
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-stat',
  templateUrl: './ajouter-stat.component.html',
  styleUrls: ['./ajouter-stat.component.scss']
})
export class AjouterStatComponent implements OnInit {
  statForm: FormGroup;
  choixOptions = ['Policy', 'Rules', 'MetaData']; // Example options

  constructor(private fb: FormBuilder, private notificationService: NotificationService, private router: Router) { }

  ngOnInit() {
    // Form initialization
    this.statForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      choix: [null, Validators.required] // Ensure user selects a valid option
    });
  }

  onSubmit() {
    // Method for adding a new stat
    // Implementation code...
  }

  sendNotification() {
    // Method for sending an email notification
    this.notificationService.sendEmailNotification().subscribe(
      (response) => {
        console.log('Email notification sent successfully:', response);
        alert('Email notification sent successfully.'); // Alert message
      },
      (error) => {
        console.error('Error sending email notification:', error);
        alert('Failed to send email notification.'); // Alert message
      }
    );
  }
}

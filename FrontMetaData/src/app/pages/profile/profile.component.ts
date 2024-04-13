import { Component ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import { number } from 'echarts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit  {
  profileForm: FormGroup;

  profileImageUrl = 'http://localhost:8082/PIDataCatalog/users/profile/0718dada-dc83-419f-a9a6-143077dde438_photoprog.jpg';
  idUser: number; // Assign your user ID here
  fileToUpload: File = null;
  userProfile: any;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  retypePassword: string;
  user: User = new User(); // Initialize a new User object
  successMessage: string = '';
  successMessageProfile: string = '';
  constructor(private userService: UserService ,private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.loadUserProfile();
   this.firstName = ''; // Initialize with existing first name
    this.lastName = ''; // Initialize with existing last name
    this.email = ''; // Initialize with existing email
    this.password = '';
    this.retypePassword = '';
    console.log(this.userService.getUserId());
  }
  showEditIcon() {
    const editIcon = document.getElementById('editIcon');
    if (editIcon) {
      editIcon.style.display = 'block';
    }
  }

  loadUserProfile() {
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      this.userProfile = JSON.parse(userDetails);
    } else {
      console.error('User details not found in localStorage');
    }
  }


  hideEditIcon() {
    const editIcon = document.getElementById('editIcon');
    if (editIcon) {
      editIcon.style.display = 'none';
    }
  }
  updateUser() {

    this.userService.updateUser(this.user).subscribe(updatedUser => {
      console.log('User updated:', updatedUser);
      // Handle success or error response as needed
    });
  }
  chooseProfileImage() { }
  openImageEditor() { }
  editProfile() {
    this.user.id = this.userService.getUserId();    // For example:
    this.user.email = this.email; 
    this.user.nom=this.firstName;
    this.user.prenom=this.lastName;
    this.userService.updateUSER(this.user)
    .subscribe(
      response => {
        localStorage.setItem('userDetails', JSON.stringify(response));
   
        this.successMessageProfile = 'Profile updated successfully';
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      error => {
        this.successMessageProfile = 'Error  ';
        console.error('Error updating Profile:', error);
      }
    );
  }

  changePassword(): void {
    if (this.password === this.retypePassword) {
      this.user.id = this.userService.getUserId();
      this.user.password = this.password; // Set the password in the User object
      this.userService.updateUSER(this.user)
        .subscribe(
          response => {
            this.successMessage = 'Password updated successfully';
            console.log('Password updated successfully:', response);
          },
          error => {
            // Handle error
            console.error('Error updating password:', error);
          }
        );
    } else {
      console.error('Passwords do not match');
      // Handle password mismatch error
    }
  }





  ///IMAGE UPLOAD /////
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  updateImage(idUserr:number) {
    if (!this.fileToUpload) {
      console.log('No file selected');
      return;
    }

    this.userService.updateImage(idUserr, this.fileToUpload)
      .subscribe(
        (response) => {
          console.log('Image uploaded successfully:', response);
          localStorage.setItem('userDetails', JSON.stringify(response));
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
        (error) => {
          console.error('Error uploading image:', error);
          this.successMessage = 'Error ';         }
      );
  }

  // Function to handle image selection
  onImageSelected(event: any, userId: number) {
    this.handleFileInput(event.target.files);
    this.updateImage(userId); // Call the updateImage method after selecting the image
  }

}

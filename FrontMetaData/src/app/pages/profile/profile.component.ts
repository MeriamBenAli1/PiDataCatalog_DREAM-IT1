import { Component ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit  {
  profileImageUrl = 'http://localhost:8082/PIDataCatalog/users/profile/0718dada-dc83-419f-a9a6-143077dde438_photoprog.jpg';

  userProfile: any;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  retypePassword: string;
  user: User;
  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.loadUserProfile();
   this.firstName = ''; // Initialize with existing first name
    this.lastName = ''; // Initialize with existing last name
    this.email = ''; // Initialize with existing email
    this.password = '';
    this.retypePassword = '';
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
  onImageSelected(event: any) {
    const file = event.target.files[0];
    // Add logic to handle selected image, such as uploading it to the server and updating the profile image URL
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
    // Call API to update profile with this.firstName, this.lastName, this.email
    // For example:
    // this.userService.updateProfile(this.firstName, this.lastName, this.email).subscribe(response => {
    //   // Handle success
    // }, error => {
    //   // Handle error
    // });
  }

  changePassword() {
    if (this.password !== this.retypePassword) {
      alert('Passwords do not match');
      return;
    }

    // Call API to change password
    // For example:
    // this.userService.changePassword(this.password).subscribe(response => {
    //   // Handle success
    // }, error => {
    //   // Handle error
    // });
  }

}

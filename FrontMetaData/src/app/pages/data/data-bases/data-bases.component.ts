<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { UserService } from '../../../services/user.service';
import { RoleAcessService } from '../../../services/role-acess.service';
import Swal from 'sweetalert2';


>>>>>>> 87a445450 (integration user cleaned)

@Component({
  selector: 'app-data-bases',
  templateUrl: './data-bases.component.html',
  styleUrl: './data-bases.component.scss'
})
<<<<<<< HEAD
export class DataBasesComponent {

}
=======
export class DataBasesComponent implements OnInit {
  isAccessRequested = false;
  isAccessApproved = false;
  showPendingRequests = false;
  pendingRequests: any[];
  userId: number;  // Make sure userId is defined
  userDetails: any;

  constructor(private apiService: ApiService ,private authService: AuthService,private userService: UserService ,private roleService: RoleAcessService) {}
  ngOnInit(): void {
 
    if (this.authService.isANYALYSTE()) {
      this.isAccessApproved=true;    }
  }
  onRequestAccess(role: string): void {
    const userId = this.userService.getUserId();
   
   
      this.roleService.makeRoleDemand(userId,role,this.isAccessApproved).subscribe(
        response => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Request Sent',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            // Reload the page after the Swal is closed
            window.location.reload();
          });
        },
        error => {
          console.log('Error occurred', error);
          // Handle error here
        }
      );

  
  }
  onShowPendingRequests(): void {
    // this.userService.getPendingAccessRequests('analyzer').subscribe((requests) => {
    //   this.pendingRequests = requests;
    //   this.showPendingRequests = true;
    // });
  }

  // onShowPendingRequests(): void {
  //   this.userService.getPendingAccessRequests('analyzer').subscribe((requests) => {
  //     this.pendingRequests = requests;
  //     this.showPendingRequests = true;
  //   });
  // }
}

>>>>>>> 87a445450 (integration user cleaned)

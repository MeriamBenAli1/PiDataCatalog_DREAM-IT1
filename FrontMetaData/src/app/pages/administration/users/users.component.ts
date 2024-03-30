import { ERole } from '../../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: any[] = [];
  roles: ERole[] = [];
  loggedInUserRole: string = 'ADMIN';
  constructor(private userService: AuthService ,private apiuser: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(data);

      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
  isCurrentUserAdmin(userRole: string): boolean {
    return userRole === 'ADMIN' && this.loggedInUserRole === 'ADMIN';
  }
  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        // Remove the deleted user from the local array
        this.users = this.users.filter(user => user.id !== userId);
      },
      (error) => {
        console.error('Error deleting user', error);
      }
    );
  }
  confirm(userId: number) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#ff3d60',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.value) {
          this.deleteUser(userId);
          Swal.fire('Deleted!', 'has been deleted.', 'success');
        }
      });
  }
  toggleEditingRole(item: any): void {
    console.log('toggleEditingRole - selectedRole:', item.selectedRole);

    // Set editingRole to true
    item.editingRole = true;
  
    // Initialize selectedRole if it's not set
    if (!item.selectedRole) {
      item.selectedRole = item.role; // Set it to the current role as default
    }
  }

  
saveRole(item: any): void {
}
  cancelEditingRole(item: any): void {
    item.editingRole = false;
  }
  modifyRole(userId: number,oldRole: ERole, newRole: ERole): void {
    this.apiuser.modifyUserRole(userId, oldRole,newRole).subscribe(
      () => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Role modified successfully',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          // Reload the page after the Swal is closed
          window.location.reload();
        });
       
        console.log('Role modified successfully');
      },
      (error) => {
        console.error('Error modifying role:', error);

        // If there's an error, you might want to handle it, for example, set editingRole back to false
        // item.editingRole = false;
      }
    );
  }


    EditRole(userId: number, oldRole: ERole): void {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will modify this role ${newRole}',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#ff3d60',
      confirmButtonText: 'Yes, edit it!',
      input: 'select', // Use 'select' type for dropdown
      inputPlaceholder: 'Select a role', // Placeholder text for the dropdown
      inputOptions: {
        'UTLISATEUR_AFFAIRE': ' UTLISATEUR AFFAIRE', // 'value': 'display text'
        'ANYALYSTE': 'ANYALYSTE',
        'RESPONSABLE_DONEES': 'RESPONSABLE DONEES'  }
      
      
      }).then(result => {
        if (result.value) {
          const selectedRole = result.value;
          this.modifyRole(userId,oldRole,selectedRole)
        // this.deleteUser(userId, reason); // Pass the reason to your deleteUser function
          Swal.fire('Modified!', 'Role has been Modified.', 'success');
        }
      });

  }



}

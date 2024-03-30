import { Component ,OnInit} from '@angular/core';
import { RoleAcessService } from '../../../services/role-acess.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demanded-access',
  templateUrl: './demanded-access.component.html',
  styleUrl: './demanded-access.component.scss'
})
export class DemandedAccessComponent implements OnInit {
  userData: any[];
  constructor(private roleService: RoleAcessService) { }
 
  ngOnInit(): void {
    this.fetchDemandsData();
  }

  fetchDemandsData(): void {
    this.roleService.fetchAllDemands().subscribe(
      (data) => {
        this.userData = data;
       
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  approveRoleAndAccess(demandId: number): void {
    this.roleService.addRoleAndApproveAccess(demandId).subscribe(
      (response) => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Approved',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          // Reload the page after the Swal is closed
          window.location.reload();
        });
      },
      (error) => {
        console.error('Error:', error);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Approved',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          // Reload the page after the Swal is closed
          window.location.reload();
        });
      }
    );
  }



}

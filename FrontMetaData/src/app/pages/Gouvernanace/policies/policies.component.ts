import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/core/models/Policy'; // Assurez-vous que le chemin d'importation est correct
import { PolicyService } from 'src/app/core/services/policy.service'; // Assurez-vous que le chemin d'importation est correct

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

  listpolicy: Policy[] = [];

  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
    this.loadPolicies();
  }

  loadPolicies(): void {
    this.policyService.getPolicy().subscribe(
      (data: Policy[]) => {
        this.listpolicy = data;
      },
      (error) => {
        console.error('Error fetching policies:', error);
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    if(filterValue!=""){
      this.listpolicy = this.listpolicy.filter(item => item.nom
        .toLowerCase().startsWith(filterValue
        .toLowerCase()));
    }
    if(filterValue=="") {
      this.ngOnInit();
    }
  }
}

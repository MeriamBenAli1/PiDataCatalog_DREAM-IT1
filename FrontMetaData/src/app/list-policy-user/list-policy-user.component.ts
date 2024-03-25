import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, NgModel, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Policy } from '../core/models/Policy';
import { PolicyService } from '../core/services/policy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-policy-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './list-policy-user.component.html',
  styleUrl: './list-policy-user.component.scss'
})
export class ListPolicyUserComponent implements OnInit {
  listpolicy: Policy[] = [];
  policy:Policy[] = [];
  policyForm: FormGroup;
  selectedPolicy: Policy | null = null;

  constructor(private policyService: PolicyService ,private router: Router ) {
    // Initialisez votre formulaire ici
    this.policyForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      rules: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.loadPolicies();
  }

  

  loadPolicies(): void {
    this.policyService.getPolicy().subscribe((data: Policy[]) => {
      this.listpolicy = data;
    });
  }



  switchToAddMode(): void {
    console.log('Passer à l\'ajout appelé');
    this.router.navigate(['/Ajouter-policy']);
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


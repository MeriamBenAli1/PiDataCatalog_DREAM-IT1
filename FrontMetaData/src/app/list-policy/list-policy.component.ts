import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, NgModel, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Policy } from '../core/models/Policy';
import { PolicyService } from '../core/services/policy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-policy',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , FormsModule], // Utilisez ReactiveFormsModule ici
  templateUrl: './list-policy.component.html',
  styleUrls: ['./list-policy.component.scss']
})
export class ListPolicyComponent implements OnInit {
  listpolicy: Policy[] = [];
  policy:any[] = [];
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


  deletePolicy(id: number): void {
    if(confirm("Êtes-vous sûr de vouloir supprimer cette politique ?")) {
      this.policyService.deletePolicy(id).subscribe(() => {
        console.log('Politique supprimée avec succès');
        this.loadPolicies(); // Recharger la liste après la suppression
      }, error => {
        console.error('Erreur lors de la suppression de la politique', error);
      });
    }
  }
  switchToAddMode(): void {
    console.log('Passer à l\'ajout appelé');
    this.router.navigate(['/Ajouter-policy']);
  }
  
  editPolicy(policy: any): void {
    policy.editing = true; // Activate edit mode for the user
  }

  saveChanges(policy: any): void {
    policy.editing = false; // Deactivate edit mode for the user
    this.policyService.updatePolicy(policy).subscribe({
      next: (response) => {
        console.log('class modified successfully:', response);
        // Handle successful response, e.g., display confirmation message
      },
      error: (error) => {
        console.error('Error modifying class:', error);
        // Handle error, e.g., display error message to user
      }
    });
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
  downloadPdf(): void {
    this.policyService.downloadPolicyPdf().subscribe(data => {
      const blob = new Blob([data], { type: 'application/pdf' });

      // Créez un lien pour télécharger le blob
      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = "policies.pdf";
      link.click();
    });
  }
}

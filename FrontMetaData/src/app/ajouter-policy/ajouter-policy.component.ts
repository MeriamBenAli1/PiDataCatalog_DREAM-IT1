import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Assurez-vous d'importer ReactiveFormsModule ici
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { Policy } from '../core/models/Policy';
import { PolicyService } from '../core/services/policy.service';
import { Router } from '@angular/router'; // Importer Router
import { EmailService } from '../core/services/email.service';

@Component({
  selector: 'app-ajouter-policy',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Assurez-vous que CommonModule est correctement importé
  templateUrl: './ajouter-policy.component.html',
  styleUrls: ['./ajouter-policy.component.scss']
})
export class AjouterPolicyComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  policyForm: FormGroup;
  policy: Policy = new Policy();

  constructor(
    private policyService: PolicyService,
    private formBuilder: FormBuilder,
    private router: Router ,
    private emailService:EmailService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.breadCrumbItems = [{ label: 'Gouvernance' }, { label: 'Add policy', active: true }];
  }

  createForm(): void {
    this.policyForm = this.formBuilder.group({
      nom: ['', Validators.required],
      rules: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.policyForm.valid) {
      const policyData: Policy = this.policyForm.value;
      this.policyService.postPolicy(policyData).subscribe(
        response => {
          console.log('La politique a été ajoutée avec succès:', response);
           // Envoyer un e-mail après l'ajout réussi
         // this.router.navigate(['/list-policy']);
        },
        error => {
          console.error('Erreur lors de l\'ajout de la politique:', error);
        }
      );
    } else {
      console.log('Le formulaire est invalide. Veuillez vérifier les champs.');
    }
  }
}

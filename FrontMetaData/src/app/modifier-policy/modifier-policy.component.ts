import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PolicyService } from '../core/services/policy.service';
import {   ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modifier-policy',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modifier-policy.component.html',
  styleUrls: ['./modifier-policy.component.scss']
})
export class ModifierPolicyComponent implements OnInit {
  policyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private policyService: PolicyService
  ) {}
  
  ngOnInit(): void {
    this.policyForm = this.formBuilder.group({
      idPolicy: [''],
      nom: ['', Validators.required],
      rules: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      const idPolicy = +params['id'];
      this.loadPolicyData(idPolicy);
    });
  }
  
  loadPolicyData(idPolicy: number): void {
    this.policyService.getPolicyById(idPolicy).subscribe((policy) => {
      this.policyForm.patchValue({
        idPolicy: policy.idPolicy,
        nom: policy.nom,
        rules: policy.rules
      });
    });
  }

  onSubmit() {
    if (this.policyForm.valid) {
      const updatedPolicy = this.policyForm.value;
      this.policyService.updatePolicy(updatedPolicy).subscribe(
        (response) => {
          console.log('Politique mise à jour avec succès:', response);
          // Afficher un message de réussite ou rediriger l'utilisateur vers une autre page, etc.
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la politique:', error);
          // Gérer l'erreur, afficher un message d'erreur à l'utilisateur, etc.
        }
      );
    } else {
      console.error('Le formulaire n\'est pas valide.');
      // Afficher un message d'erreur à l'utilisateur pour lui indiquer qu'il doit remplir correctement le formulaire.
    }
  }
}

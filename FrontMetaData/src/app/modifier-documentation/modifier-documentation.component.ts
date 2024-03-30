import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentationService } from '../core/services/documentation.service'; // Assurez-vous de corriger le chemin
import {   ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Documentation } from '../core/models/Documentation';
@Component({
  selector: 'app-modifier-documentation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modifier-documentation.component.html',
  styleUrls: ['./modifier-documentation.component.scss']
})
export class ModifierDocumentationComponent implements OnInit {
  documents: Documentation[]; // Liste des documents
  editing: boolean = false; // Indicateur de mode édition
  documentationForm: FormGroup; // Formulaire de modification
  selectedDocument: Documentation; // Document sélectionné pour modification

  constructor(
    private formBuilder: FormBuilder,
    private documentationService: DocumentationService
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire
    this.documentationForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required]
    });

    // Récupération des documents depuis le service
    this.documentationService.getAllDocuments().subscribe(
      (data) => {
        this.documents = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des documents:', error);
      }
    );
  }

  // Méthode pour activer le mode édition
  editDocument(document: Documentation): void {
    this.editing = true;
    this.selectedDocument = document;
    this.documentationForm.patchValue({
      nom: document.nom,
      description: document.description
    });
  }

  // Méthode pour enregistrer les modifications
  saveChanges(): void {
    if (this.documentationForm.valid && this.selectedDocument) {
      const updatedDocument = this.documentationForm.value as Documentation;
      updatedDocument.idDoc = this.selectedDocument.idDoc; // Assurez-vous de passer l'ID du document modifié
      this.documentationService.updateDocument(updatedDocument).subscribe(
        (response) => {
          console.log('Document mis à jour avec succès:', response);
          this.editing = false; // Désactiver le mode édition après la mise à jour réussie
          this.selectedDocument = null;
          // Actualiser la liste des documents après la mise à jour
          this.documentationService.getAllDocuments().subscribe(
            (data) => {
              this.documents = data;
            },
            (error) => {
              console.error('Erreur lors de la récupération des documents après la mise à jour:', error);
            }
          );
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du document:', error);
          // Gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
        }
      );
    } else {
      console.error('Le formulaire n\'est pas valide.');
      // Gérer le cas où le formulaire n'est pas valide, par exemple, afficher un message à l'utilisateur
    }
  }
}

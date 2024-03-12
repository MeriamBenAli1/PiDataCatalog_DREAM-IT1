import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Documentation } from '../core/models/Documentation'; // Assurez-vous que le chemin d'importation est correct
import { DocumentationService } from '../core/services/documentation.service'; // Assurez-vous que le chemin d'importation est correct

@Component({
  selector: 'app-list-documentation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-documentation.component.html',
  styleUrls: ['./list-documentation.component.scss'] // Correction ici : styleUrl -> styleUrls et c'est un tableau
})
export class ListDocumentationComponent implements OnInit {
  listDocumentation: Documentation[] = [];

  constructor(private documentationService: DocumentationService, private router: Router) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.documentationService.getAllDocuments().subscribe((data: Documentation[]) => { // Correction : Ajout des parenthèses après getAllDocuments
      this.listDocumentation = data;
    });
  }

  deleteDocument(id: number): void {
    if(confirm("Êtes-vous sûr de vouloir supprimer ce document ?")) {
      this.documentationService.deleteDocument(id).subscribe(() => {
        console.log('Document supprimé avec succès');
        this.loadDocuments(); // Recharger la liste après la suppression
      }, error => {
        console.error('Erreur lors de la suppression du document', error);
      });
    }
  }

  editDocument(documentation: any): void {
    documentation.editing = true;
  }
  cancelEdit(document: any): void {
    document.editing = false;
  }

  saveChanges(documentation: any): void {
    documentation.editing = false;
    this.documentationService.updateDocument(documentation).subscribe({
      next: (response) => {
        console.log('Documentation modified successfully:', response);
        this.loadDocuments(); // Optionally reload the documents to reflect the changes
      },
      error: (error) => {
        console.error('Error modifying documentation:', error);
      }
    });
  }
}

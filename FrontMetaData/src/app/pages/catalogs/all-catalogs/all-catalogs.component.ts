<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importer MatSnackBar
import { AddFolderDialogComponent } from '../add-folder-dialog/add-folder-dialog.component';
import { Router } from '@angular/router';
import { FolderServiceService } from '../metadata-imports/service/folder-service.service';
import { Folder } from '../metadata-imports/models/FolderModel';
=======
import { Component } from '@angular/core';
>>>>>>> 87a445450 (integration user cleaned)

@Component({
  selector: 'app-all-catalogs',
  templateUrl: './all-catalogs.component.html',
<<<<<<< HEAD
  styleUrls: ['./all-catalogs.component.scss'] // Corriger styleUrl en styleUrls
})
export class AllCatalogsComponent implements OnInit {
  folderImagePath: string = 'assets/images/folderrr.png';
  allFolders: Folder[] = []; // Ajouté pour stocker tous les dossiers
  folders: Folder[] = []; // Pour affichage après filtrage

  constructor(
    private dialog: MatDialog, 
    private snackBar: MatSnackBar,
    private router: Router,
    private folderService: FolderServiceService
  ) { }
  
  ngOnInit(): void {
    this.loadFolders();
  }

  loadFolders(): void {
    this.folderService.getAllFolders().subscribe({
      next: (data) => {
        this.allFolders = data; // Initialiser allFolders avec tous les dossiers récupérés
        this.folders = [...this.allFolders]; // Utiliser allFolders pour initialiser folders
      },
      error: (err) => {
        console.error('Error loading folders:', err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue !== "") {
      this.folders = this.allFolders.filter(item => 
        item.name.toLowerCase().includes(filterValue.toLowerCase()));
    } else {
      this.folders = [...this.allFolders]; // Réinitialiser folders avec allFolders quand la recherche est effacée
    }
  }

  // Méthode pour ouvrir le dialogue d'ajout de dossier
  openAddFolderDialog(): void {
    const dialogRef = this.dialog.open(AddFolderDialogComponent, {
      width: '500px',
      data: {}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Utilisez le service pour ajouter le dossier
        this.folderService.addFolder(result).subscribe({
          next: (response) => {
            // Rechargez vos dossiers ici si nécessaire ou ajoutez le dossier à la liste localement
            this.folders.push(response); // Suppose que la réponse est le dossier ajouté
            this.snackBar.open('Folder added successfully!', 'Close', {
              duration: 4000
            });
          },
          error: (err) => {
            console.error('Error adding folder:', err);
            this.snackBar.open('Folder added successfully!', 'Close', {
              duration: 4000
            });
          }
        });
      }
    });
  }
  

  // Méthode pour supprimer un dossier
 // Assurez-vous d'avoir un champ 'id' dans votre modèle de dossier
 deleteFolder(folder: Folder): void {
  const folderName = folder.name;
const confirmationMessage = 'Are you sure you want to delete the folder "${folderName}"?';

const confirmation = confirm(confirmationMessage);

if (!confirmation) {
  return;
}


  this.folderService.deleteFolder(folder.idFolder).subscribe({
    next: () => {
      this.snackBar.open('Folder deleted successfully!', 'Close', { duration: 2000 });
      this.loadFolders(); // Recharger les dossiers pour refléter la suppression
    },
    error: (err) => {
      console.error('Error deleting folder:', err);
      this.snackBar.open('Error deleting folder', 'Close', { duration: 2000 });
    }
  });
  
}


  

 
  

  redirectToTables() {
    this.router.navigate(['/tables']);
  
}
}
=======
  styleUrl: './all-catalogs.component.scss'
})
export class AllCatalogsComponent {

}
>>>>>>> 87a445450 (integration user cleaned)

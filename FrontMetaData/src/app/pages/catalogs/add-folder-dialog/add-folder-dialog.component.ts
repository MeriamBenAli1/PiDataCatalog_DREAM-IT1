import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FolderServiceService } from '../metadata-imports/service/folder-service.service';

@Component({
  selector: 'app-add-folder-dialog',

  templateUrl: './add-folder-dialog.component.html',
  styleUrl: './add-folder-dialog.component.scss'
})
export class AddFolderDialogComponent implements OnInit{

  folderName: string = '';
  folderDescription: string = '';
 

  
  constructor(
    private folderService: FolderServiceService,
    public dialogRef: MatDialogRef<AddFolderDialogComponent>
  ) {}
  ngOnInit(): void {
  
  }

  // Fonction pour ajouter un nouveau dossier
  addFolder(){
  {
      const folderData = new FormData();
      //const folderData = { name: this.folderName, description: this.folderDescription };


      folderData.append("description", this.folderDescription);
      folderData.append("name",this.folderName );
      

      this.folderService.addFolder(folderData).subscribe(response=> {

        console.log(Response);
          // Fermer le dialogue et transmettre les données saisies
          this.dialogRef.close(response);
          console.log('Folder added Successfully !');

        });
        (error: any) => {
          console.log('Folder added Successfully !');
          // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
        }
     
    }
  }

  // Fonction pour annuler l'ajout de dossier et fermer le dialogue
  cancel(): void {
    this.dialogRef.close();
  }

  handleAddFolderResponse(response: any): void {
    this.dialogRef;
    console.log(response); // Affiche la réponse dans la console
    // Fermer le dialogue et transmettre les données saisies
    this.dialogRef.close(response);
  }
  
}

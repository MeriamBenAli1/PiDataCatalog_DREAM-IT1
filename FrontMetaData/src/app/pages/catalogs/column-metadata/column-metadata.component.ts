import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Column } from '../metadata-imports/models/metadata';
import { UploadService } from '../metadata-imports/service/upload.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableService } from '../metadata-imports/service/data-table.service';
import { DataTable, TypeFile } from '../metadata-imports/models/DataTable';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddMetadataDialogComponent } from '../add-metadata-dialog/add-metadata-dialog.component';
import { EditColumnDialogComponent } from '../edit-column-dialog/edit-column-dialog.component';
import { Policy } from 'src/app/core/models/Policy';

@Component({
  selector: 'app-column-metadata',
  templateUrl: './column-metadata.component.html',
  styleUrl: './column-metadata.component.scss'
})
export class ColumnMetadataComponent implements OnInit, OnDestroy  {
  columns: Column[] = [];
  tableName: string = '';
  tableSource: string = '';
  tableSize: number;
  tableDescription: string = ''; 
  tableCreator: string = ''; 
  tableCreationDate: string = ''; 
  isDescriptionEditable = false;

  tableData: DataTable | null = null;
  tableId: number;
  newLabels: string = '';
  showEditIcon: boolean[] = [];
  editMode: boolean[] = [];
  isTableNameEditable: boolean = false;
  private subscriptions = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataTableService: DataTableService,
    public dialog: MatDialog)
   {
    
   }
  ngOnInit(): void {
    
  
    this.subscriptions.add(
      this.route.params.subscribe(params => {
        const tableId = +params['id']; // Plus sign (+) converts string to number
        this.fetchTableDetails(tableId); // Fetch table details
        this.fetchColumns(tableId);
      })
    );
  }
  fetchTableDetails(tableId: number): void {
    this.tableId = tableId;
    this.dataTableService.getDataTable(tableId).subscribe(
      details => {
        this.tableName = details.title; 
        this.tableDescription = details.description;
        this.tableCreator = details.creator;
        this.tableCreationDate = details.creationDate;
        this.tableSource = details.source;
        this.tableSize = details.size
        // Assuming 'description' is the property for the table description
      },
      error => console.error('Error retrieving table details', error)
    );
  }
  fetchColumns(tableId: number): void {
    this.dataTableService.getMetaDataForTable(tableId).subscribe(
      data => this.columns = data,
      error => console.error('Error retrieving columns', error)
    );
  }
  toggleEditTableName() {
    this.isTableNameEditable = !this.isTableNameEditable; 
  }
  toggleEditDescription(): void {
    this.isDescriptionEditable = !this.isDescriptionEditable;
  }

  saveDescription(): void {
    if(this.tableDescription.trim() !== '') {
        this.dataTableService.updateDescription(this.tableId, this.tableDescription).subscribe({
            next: () => {
                console.log('Description updated successfully');
                this.toggleEditDescription(); // Assuming this method toggles your isDescriptionEditable flag
                // Optionally, refresh the component/view to show the updated description
            },
            error: (error) => {
                console.error('Error updating description', error);
                // Handle error, perhaps show a user-friendly message
            }
        });
    }
}
saveTableName() : void {
  if(this.tableName.trim() !== '') {
    this.dataTableService.updateName(this.tableId, this.tableName).subscribe({
        next: () => {
            console.log('Name updated successfully');
            this.toggleEditTableName(); 
        },
        error: (error) => {
            console.error('Error updating name', error);
            // Handle error, perhaps show a user-friendly message
        }
    });
}
}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMetadataDialogComponent, {
      
      data: { tableId: this.tableId } // Pass the tableId to the dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Optionally, do something on close
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
 
  isReadOnly = true;
  //Labels Methods

  
 
  cancelEdit(): void {
    // Handle cancelation logic here, if necessary
  }
  openEditDialog(column: Column): void {
    const dialogRef = this.dialog.open(EditColumnDialogComponent, {
      width: '250px',
      data: { description: column.description }
    });

    this.subscriptions.add(
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          column.description = result;
          this.dataTableService.updateColumn(column).subscribe(
            success => console.log('Update successful'),
            error => console.error('Error updating column', error)
          );
        }
      })
    );
  }
  addColumnLabels(column: Column, idx: number): void {
    if (!column.tags) {
      column.tags = []; 
      this.editMode[idx] = false;
    }

    if (this.newLabels) {
      column.tags.push(this.newLabels);
      this.updateColumnLabels(column);
      this.newLabels = ''; 
    }
  }

  removeColumnLabels(column: Column, tagIndex: number): void {
    if (column.tags) {
      column.tags.splice(tagIndex, 1);
      this.updateColumnLabels(column);
    }
  }

  updateColumnLabels(column: Column): void {
   
    this.dataTableService.updateLabels(column.idColumn, column.tags || []).subscribe(
      success => console.log('Labels updated successfully'),
      error => console.error('Error updating Labels', error)
    );
  }

  

  openSchemas(): void {
    // Navigate to the policy user list, assuming 'policy' contains the necessary ID or key
    this.router.navigate(['/List-policyUser']);
  }
 

}
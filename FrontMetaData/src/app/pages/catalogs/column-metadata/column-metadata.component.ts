import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Column } from '../metadata-imports/models/metadata';
import { UploadService } from '../metadata-imports/service/upload.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute } from '@angular/router';
import { DataTableService } from '../metadata-imports/service/data-table.service';
import { DataTable } from '../metadata-imports/models/DataTable';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddMetadataDialogComponent } from '../add-metadata-dialog/add-metadata-dialog.component';

@Component({
  selector: 'app-column-metadata',
  templateUrl: './column-metadata.component.html',
  styleUrl: './column-metadata.component.scss'
})
export class ColumnMetadataComponent implements OnInit, OnDestroy  {
  columns: Column[] = [];
  tableName: string = '';
  tableDescription: string = ''; 
  isDescriptionEditable = false;
  tableData: DataTable | null = null;
  tableId: number;
  private subscriptions = new Subscription();
  constructor(
    private route: ActivatedRoute,
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
        this.tableName = details.title; // Assuming 'name' is the property for the table name
        this.tableDescription = details.description; // Assuming 'description' is the property for the table description
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
}
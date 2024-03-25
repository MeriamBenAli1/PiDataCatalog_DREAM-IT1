import { Component, Inject } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from "@angular/forms"
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataTableService } from '../metadata-imports/service/data-table.service';
// Update with the correct path

@Component({
  selector: 'app-add-metadata-dialog',
  templateUrl: './add-metadata-dialog.component.html',
  styleUrls: ['./add-metadata-dialog.component.scss']
})
export class AddMetadataDialogComponent {
  columnName: string = '';
  columnDescript: string = '';
  columnType: string = '';
  constructor(
    private builder: FormBuilder,
    private dataTableService: DataTableService,
    public dialogRef: MatDialogRef<AddMetadataDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) 
   {console.log(data.tableId);
  }


  onSubmit(): void {
    if (this.metadataForm.valid) {
      // Extract form values directly
      const columnData = {
        name: this.metadataForm.value.columnName,
        description: this.metadataForm.value.columnDescription,
        type: this.metadataForm.value.columnType
      };
  
      this.dataTableService.addMetadata(this.data.tableId, columnData).subscribe({
        next: (response) => {
          console.log('Metadata added successfully', response);
          this.dialogRef.close(true); // Optionally pass back a success indicator
        },
        error: (error) => {
          console.error('Error adding metadata', error);
        }
      });
    }
  }
  
  
    metadataForm = this.builder.group({
      columnDescription: ['', Validators.required],
      columnType: ['', Validators.required],
      columnName: ['', Validators.required]
    });
  }

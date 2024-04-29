import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,  } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-column-dialog',
  templateUrl: './edit-column-dialog.component.html',
  styleUrl: './edit-column-dialog.component.scss'
})
export class EditColumnDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditColumnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { description: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

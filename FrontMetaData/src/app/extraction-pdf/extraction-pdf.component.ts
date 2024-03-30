import { Component } from '@angular/core';
import { ExtractionPdfService } from '../core/services/extraction-pdf.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-extraction-pdf',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './extraction-pdf.component.html',
  styleUrl: './extraction-pdf.component.scss'
})
export class ExtractionPDFComponent {
  selectedFile: File = null;
  uploadResponse: any = null;

  constructor(private policyService: ExtractionPdfService) {}

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.policyService.uploadPdf(this.selectedFile).subscribe(
        response => {
          console.log(response);
          this.uploadResponse = response;
        },
        error => console.log(error)
      );
    }
  }
}

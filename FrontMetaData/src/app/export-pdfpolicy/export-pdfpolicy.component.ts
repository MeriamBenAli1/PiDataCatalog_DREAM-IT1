import { Component } from '@angular/core';
import { PolicyService } from '../core/services/policy.service';

@Component({
  selector: 'app-export-pdfpolicy',
  standalone: true,
  imports: [],
  templateUrl: './export-pdfpolicy.component.html',
  styleUrl: './export-pdfpolicy.component.scss'
})
export class ExportPDFPolicyComponent {
  constructor(private policyService: PolicyService) { }

  downloadPdf(): void {
    this.policyService.downloadPolicyPdf().subscribe(data => {
      const blob = new Blob([data], { type: 'application/pdf' });

      // Créez un lien pour télécharger le blob
      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = "policies.pdf";
      link.click();
    });
  }
}

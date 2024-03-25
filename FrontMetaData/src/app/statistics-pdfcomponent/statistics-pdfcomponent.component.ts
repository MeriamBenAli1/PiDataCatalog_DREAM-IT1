import { Component } from '@angular/core';
import { PolicyService } from '../core/services/policy.service';

@Component({
  selector: 'app-statistics-pdfcomponent',
  standalone: true,
  imports: [],
  templateUrl: './statistics-pdfcomponent.component.html',
  styleUrl: './statistics-pdfcomponent.component.scss'
})
export class StatisticsPDFComponentComponent {
  constructor(private pdfDownloadService: PolicyService) { }

  downloadPdf(): void {
    this.pdfDownloadService.downloadPolicyStatisticsPdf().subscribe(data => {
      const blob = new Blob([data], { type: 'application/pdf' });

      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = "policy_statistics.pdf";
      link.click();
    });
  }

}

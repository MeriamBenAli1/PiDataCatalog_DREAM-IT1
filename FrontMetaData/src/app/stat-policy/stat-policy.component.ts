import { Component, OnInit, ViewChild, ElementRef, Inject , PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto';
import { PolicyService } from '../core/services/policy.service'; // Importez le service PolicyService
import { HttpErrorResponse } from '@angular/common/http';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-stat-policy',
  templateUrl: './stat-policy.component.html',
  styleUrls: ['./stat-policy.component.scss']
})
export class StatPolicyComponent implements OnInit {
  @ViewChild('verticalChart') verticalChart!: ElementRef<HTMLCanvasElement>;

  MapList: any;
  errorMessage: any;
  stats: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private policyService: PolicyService // Injectez votre service ici
  ) {}

  ngOnInit(): void {

   
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
    } else {
      console.log('Skipping chart creation on the server');
    }
  }
  createChart() {
    const ctx = this.verticalChart.nativeElement.getContext('2d');

    if (ctx) {
        this.policyService.getPolicyStatistics().subscribe(
            data => {
                this.MapList = data;
                const labels = Object.keys(data);
                const chartData = Object.values(data);
                chartData.push(100);

                const chart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Statistique Politiques Par ',
                            data: chartData,
                            backgroundColor: [
                              '#34495e', // Couleur foncée pour le premier secteur
                              '#2ecc71', // Couleur foncée pour le deuxième secteur
                              '#3498db', // Couleur foncée pour le troisième secteur
                              // Ajoutez autant de couleurs foncées que nécessaire
                          ],
                          borderColor: [
                              // Vous pouvez laisser les bordures avec les mêmes couleurs ou les modifier selon vos préférences
                              '#34495e',
                              '#2ecc71',
                              '#3498db',
                              // Ajoutez les bordures correspondantes
                          ]

                        }]
                    },
                    options: {
                        aspectRatio: 1, // Permet de définir un ratio de 1:1 pour un graphique circulaire
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            },
            (error: HttpErrorResponse) => {
                this.errorMessage = 'Une erreur s\' ' + error.message;
            }
        );
    } else {
        console.error('Failed to get canvas context');
    }
}

////pdf////
  generatePDF() {
    const canvasElement = this.verticalChart.nativeElement;
  
    if (canvasElement) {
      const imgData = canvasElement.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("statistiques-politiques.pdf");
    } else {
      console.error('Le canvas du graphique est introuvable.');
    }
  
  
  }


}

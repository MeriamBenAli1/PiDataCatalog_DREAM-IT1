import { Component } from '@angular/core';
import {  OnInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto';
import { MeadataService } from 'src/app/core/services/meadata.service';
import { MetaData } from '../core/models/Metadata'; // Importez le service MetaDataService
import { HttpErrorResponse } from '@angular/common/http';
import jsPDF from 'jspdf';
import { CommonModule } from '@angular/common';
import { KeyValuePipe } from '@angular/common';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-stat-metadata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-metadata.component.html',
  styleUrl: './stat-metadata.component.scss'
})
export class StatMetadataComponent implements OnInit {
  @ViewChild('verticalChart') verticalChart!: ElementRef<HTMLCanvasElement>;

  metaDataStatistics: any;
  errorMessage: any;
  chartWidth: number = 400; // Initial width of the chart canvas

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private metaDataService: MeadataService // Injectez votre service ici
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
    const ctx = this.verticalChart.nativeElement;

    if (ctx) {
      this.metaDataService.getMetaDataStatistics().subscribe(
        data => {
          this.metaDataStatistics = data;
          const labels = Object.keys(data);
          const chartData = Object.values(data);

          const chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Statistique metadata Par ',
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
              aspectRatio: 1,
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
}
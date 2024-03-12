import { Component, OnInit, ViewChild, ElementRef, Inject , PLATFORM_ID } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto';
import { PolicyService } from '../core/services/policy.service'; // Importez le service PolicyService
import { HttpErrorResponse } from '@angular/common/http';

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
                                'rgba(255, 99, 132, 0.6)', // Rouge
                                'rgba(54, 162, 235, 0.6)', // Bleu
                                'rgba(255, 206, 86, 0.6)', // Jaune
                                'rgba(75, 192, 192, 0.6)', // Vert
                                'rgba(153, 102, 255, 0.6)', // Violet
                                'rgba(255, 159, 64, 0.6)', // Orange
                                'rgba(199, 199, 199, 0.6)', // Gris
                                'rgba(128, 0, 128, 0.6)', // Pourpre
                                'rgba(0, 128, 0, 0.6)', // Vert foncé
                                'rgba(0, 255, 255, 0.6)', // Cyan
                                'rgba(255, 0, 255, 0.6)', // Magenta
                                'rgba(128, 128, 0, 0.6)', // Olive
                                'rgba(0, 0, 128, 0.6)' // Bleu marine
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)', // Rouge
                                'rgba(54, 162, 235, 1)', // Bleu
                                'rgba(255, 206, 86, 1)', // Jaune
                                'rgba(75, 192, 192, 1)', // Vert
                                'rgba(153, 102, 255, 1)', // Violet
                                'rgba(255, 159, 64, 1)', // Orange
                                'rgba(199, 199, 199, 1)', // Gris
                                'rgba(128, 0, 128, 1)', // Pourpre
                                'rgba(0, 128, 0, 1)', // Vert foncé
                                'rgba(0, 255, 255, 1)', // Cyan
                                'rgba(255, 0, 255, 1)', // Magenta
                                'rgba(128, 128, 0, 1)', // Olive
                                'rgba(0, 0, 128, 1)' // Bleu marine
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


  
  
  


}
















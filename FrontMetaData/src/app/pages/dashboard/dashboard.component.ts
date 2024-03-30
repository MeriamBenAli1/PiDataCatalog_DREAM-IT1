import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { latLng, tileLayer } from 'leaflet';
import {  Stat  } from '../../AdminCharts/dashboard.model';
import { ApiService } from '../../services/api.service'; // Adjust the path

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Dashboard Component
 */
export class DashboardComponent implements OnInit {
  statData: Stat[];

  constructor(private apiService: ApiService) {}

  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.fetchDataFromAPI();
  }

  fetchDataFromAPI() {
    this.apiService.getStats().subscribe(
      (apiData: any) => {
console.log(apiData);

        this.statData = [
          {
            icon: 'ri-stack-line',
            title: 'Number of Users',
            value: apiData
            // Replace 'numberOfUsers' with the actual key in your API response
          }
          // You can add more objects based on your API structure
        ];
      },
      error => {
        console.error('Error fetching data from the API:', error);
      }
    );
  }
}

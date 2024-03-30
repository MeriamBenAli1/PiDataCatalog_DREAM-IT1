import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { latLng, tileLayer } from 'leaflet';
<<<<<<< HEAD

=======
import {  Stat  } from '../../AdminCharts/dashboard.model';
import { ApiService } from '../../services/api.service'; // Adjust the path
>>>>>>> 87a445450 (integration user cleaned)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Dashboard Component
 */
export class DashboardComponent implements OnInit {
<<<<<<< HEAD


  constructor(public formBuilder: UntypedFormBuilder) {
  }

  // bread crumb items
  breadCrumbItems: Array<{}>;

 

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Nazox' }, { label: 'Dashboard', active: true }];
    
  }

  
=======
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
>>>>>>> 87a445450 (integration user cleaned)
}

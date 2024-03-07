import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.scss'
})
export class PoliciesComponent implements OnInit {

  // breadcrumb items
  breadCrumbItems: Array<{}>;
  selectValue = ['Touchscreen', 'Call Function', 'Notifications', 'Fitness', 'Outdoor'];

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Gouvernance' }, { label: 'Add Policie', active: true }];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss'
})
export class RulesComponent  implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;
  selectValue = ['Touchscreen', 'Call Function', 'Notifications', 'Fitness', 'Outdoor'];

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Gouvernance' }, { label: 'Add Rules', active: true }];
  }
}

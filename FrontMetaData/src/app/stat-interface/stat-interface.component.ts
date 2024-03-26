import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stat-interface',
  standalone: true,
  imports: [],
  templateUrl: './stat-interface.component.html',
  styleUrl: './stat-interface.component.scss'
})
export class StatInterfaceComponent {
  constructor(private router: Router) { }

  redirectToPolicies(): void {
    this.router.navigate(['/Statpolicies']);
  }
  redirectToMetaData(): void {
    this.router.navigate(['/referencesData']);
  }
}

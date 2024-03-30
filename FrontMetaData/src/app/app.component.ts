import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { AuthService } from './services/auth.service';
import { ActivatedRoute,NavigationEnd, Router } from '@angular/router';
>>>>>>> 87a445450 (integration user cleaned)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'nazox';
=======
  constructor(private authService: AuthService , private router: Router ) { }

  title = 'Governonce';
  ngOnInit() {
    this.authService.loadToken();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        // Exclude redirection for set-password/:token route
        if (currentRoute !== '/account/login' && !currentRoute.startsWith('/account/set-password/') && !currentRoute.startsWith('/account/signup')&& !currentRoute.startsWith('/account/reset-password')) {
          if (this.authService.getToken() == null || this.authService.isTokenExpired()) {
            this.router.navigate(['/account/login']);
          }
        }
      }
    });
  }
>>>>>>> 87a445450 (integration user cleaned)
}

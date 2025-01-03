import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';
import { LanguageService } from '../../../core/services/language.service';
import { environment } from '../../../../environments/environment';
<<<<<<< HEAD
=======
import { UserService } from '../../../services/user.service';
>>>>>>> 87a445450 (integration user cleaned)

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
<<<<<<< HEAD

  element: any;
  configData: any;
  cookieValue;
=======
  userProfile: any;
  element: any;
  configData: any;
  cookieValue;
  nameuser: any;
>>>>>>> 87a445450 (integration user cleaned)
  flagvalue;
  countryName;
  valueset: string;

  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
    { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
    { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
    { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
    { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
  ];

  // tslint:disable-next-line: max-line-length
<<<<<<< HEAD
  constructor(@Inject(DOCUMENT) private document: any, private router: Router, private authService: AuthenticationService, private authFackservice: AuthfakeauthenticationService, public languageService: LanguageService, public cookiesService: CookieService) { }
=======
  constructor(@Inject(DOCUMENT) private document: any, private router: Router, private authService: AuthenticationService, private authFackservice: AuthfakeauthenticationService, public languageService: LanguageService, public cookiesService: CookieService,private userService :UserService) { }
>>>>>>> 87a445450 (integration user cleaned)

  @Output() mobileMenuButtonClicked = new EventEmitter();
  @Output() settingsButtonClicked = new EventEmitter();

  ngOnInit(): void {
<<<<<<< HEAD
=======
    this.loadUserProfile();
    
>>>>>>> 87a445450 (integration user cleaned)
    this.element = document.documentElement;
    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3
    };

<<<<<<< HEAD
=======
  
>>>>>>> 87a445450 (integration user cleaned)
    this.cookieValue = this.cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/us.jpg'; }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }
<<<<<<< HEAD
=======

   
>>>>>>> 87a445450 (integration user cleaned)
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }
<<<<<<< HEAD

=======
  loadUserProfile() {
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      this.userProfile = JSON.parse(userDetails);
    } else {
      console.error('User details not found in localStorage');
    }
  }
>>>>>>> 87a445450 (integration user cleaned)
  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  /**
   * Translate language
   */
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }


  /**
   * Logout the user
   */
  logout() {
<<<<<<< HEAD
    if (environment.defaultauth === 'firebase') {
      this.authService.logout();
    } else {
      this.authFackservice.logout();
    }
=======
    localStorage.removeItem('jwt');
    localStorage.removeItem('userDetails');
    this.router.navigate(['/login']);
>>>>>>> 87a445450 (integration user cleaned)
    this.router.navigate(['/account/login']);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private baseUrl = 'http://localhost:8080/PIDataCatalog/api/mail'; // URL de base du backend
  constructor(private http: HttpClient) { }

  sendEmail(emailData: any) {
    return this.http.post('http://localhost:8080/api/mail/send-email', emailData);
  }
}
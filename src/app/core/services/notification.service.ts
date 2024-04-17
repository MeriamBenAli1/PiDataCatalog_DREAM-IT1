import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = 'http://localhost:8083/api/Notification'; // Change the port if needed

  constructor(private http: HttpClient) { }

  sendEmailNotification(): Observable<any> {
    // Call the existing API endpoint in your Spring Boot backend to send email notification
    return this.http.post<any>(`${this.baseUrl}/send-email`, {});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private resetUrl = 'http://localhost:8093/GestionUser/auth/forgetpassword'; // Replace with your actual reset endpoint URL
  private apiUrl = 'http://localhost:8093/GestionUser/auth'; // Replace with your actual reset endpoint URL

  constructor(private http: HttpClient) { }

  resetPassword(email: string): Observable<any> {
    // Send data as a query parameter
    const params = new HttpParams().set('email', email);
    
    return this.http.post(this.resetUrl, null, { params });
  }
  setPassword(passwordResetToken: string, Password: string) {
  
    return this.http.post<any>(`${this.apiUrl}/resetPassword/${passwordResetToken}?newPassword=${Password}`, null);
  }
}

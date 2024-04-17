import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../models/Policy';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Stat } from '../models/stat';
@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private baseUrl = 'http://localhost:8083/api/Stat'; // Changez le port si nécessaire

  constructor(private http: HttpClient) { }
  getPolicy(): Observable<Policy[]> {
    return this.http.get<Policy[]>(`${this.baseUrl}/get-policy`);
  }
  getPolicyStatistics(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/policy/statistics`);
  }
  downloadPolicyStatisticsPdf(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/statistics/pdf`, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/pdf')
    });
  }
  ajoutStat(stat: Stat): Observable<Stat> {
    const url = `${this.baseUrl}/add-Stat`; // URL complète de l'endpoint
    return this.http.post<Stat>(url, stat);
  }
}

import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from '../models/Policy';
import { Observable } from 'rxjs';
import { KeyValuePipe } from '@angular/common';
import { Stat } from '../models/stat';
@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private apiUrl = 'http://localhost:8082/PIDataCatalog/api/policy'; // URL de l'API
  private baseUrl = 'http://localhost:8082/PIDataCatalog/api/Stat';
  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les données des politiques
  getPolicy(): Observable<Policy[]> {
    return this.http.get<Policy[]>(`${this.apiUrl}/get-policy`); // Utilisation du nouveau point de terminaison
  }

  // Méthode pour ajouter une politique
  postPolicy(p: Policy): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add-policy`, p);
  }
  ///supp
  deletePolicy(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getPolicyById(id: number): Observable<Policy> {
    return this.http.get<Policy>(`${this.apiUrl}/${id}`);
  }
  

  updatePolicy(policy:  any): Observable<Policy> {
    return this.http.put<any>(`${this.apiUrl}/update-policy/${policy.id}`, policy);
  }
  //pdf
  downloadPolicyPdf(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/export/pdf`, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/pdf')
    });

}


getPolicyStatistics(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/policy/statistics`);
}
///Rima
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
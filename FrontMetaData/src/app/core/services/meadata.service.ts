import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { MetaData } from '../models/Metadata';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MeadataService {

  private baseUrl = 'http://localhost:8082/PIDataCatalog/api/Stat'; // Changez le port si nécessaire

  constructor(private http: HttpClient) { }
  getMetaData(): Observable<MetaData[]> {
    return this.http.get<MetaData[]>(`${this.baseUrl}/get-metadata`);
  }
 /* downloadPolicyStatisticsPdf(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/statistics/pdf`, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/pdf')
    });
  }*/
  getMetaDataStatistics(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/metadata/statistics`);
  }
}

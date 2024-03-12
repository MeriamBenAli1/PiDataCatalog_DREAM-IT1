import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Documentation } from '../models/Documentation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {
  private apiUrl = 'http://localhost:8082/PIDataCatalog/api/Doc';
  
  constructor(private http: HttpClient) { }
  
  postDoc(d: Documentation): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add-doc`, d);
  }

  getAllDocuments(): Observable<Documentation[]> {
    return this.http.get<Documentation[]>(`${this.apiUrl}/`);
  }

  deleteDocument(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-doc/${id}`);
  }

  updateDocument(documentation: Documentation): Observable<Documentation> {
    return this.http.put<Documentation>(`${this.apiUrl}/update-doc/${documentation.idDoc}`, documentation);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Column } from '../models/metadata';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'http://localhost:8082/PIDataCatalog/api';

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }
  
  updateColumn(column: Column): Observable<any> {
    return this.http.put(`${this.baseUrl}/schemas/${column.idColumn}`, column);
  }

  updateTags(idColumn: number, tags: string[]): Observable<any> {
    return this.http.put(`${this.baseUrl}/schemas/${idColumn}/tags`, tags);
  }
  
  

  
  
}
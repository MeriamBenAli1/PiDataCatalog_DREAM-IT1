import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExtractionPdfService {

  
  private apiUrl = 'http://localhost:8082/PIDataCatalog/api/v1/extractor'; // Ajustez selon votre configuration

  constructor(private http: HttpClient) { }

  uploadPdf(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(this.apiUrl, formData);
  }
}

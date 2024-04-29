import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class FolderServiceService {

  private baseUrl = 'http://localhost:8082/PIDataCatalog/api';

  constructor(private http: HttpClient) { }

  getAllFolders(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getFolderById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addFolder(folderData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/createFolder`, folderData);
  }

  deleteFolder(idFolder: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/folders/deleteFolder/${idFolder}`);
  }
  
  // Ajoutez d'autres méthodes pour mettre à jour les dossiers selon vos besoins
}
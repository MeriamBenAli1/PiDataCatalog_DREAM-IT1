import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Stat } from '../models/stat'; // Assurez-vous que le chemin d'importation est correct
@Injectable({
  providedIn: 'root'
})
export class StatService {
  private baseUrl = 'http://localhost:8082/PIDataCatalog/api/Stat'; // Changez le port si nécessaire

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  ajoutStat(stat: Stat): Observable<Stat> {
    const url = `${this.baseUrl}/add-Stat`; // URL complète de l'endpoint
    return this.http.post<Stat>(url, stat);
  }

  // Méthode générique de gestion des erreurs
  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client ou réseau
      errorMessage = `Une erreur est survenue: ${error.error.message}`;
    } else {
      // Le backend a renvoyé un code de réponse d'erreur
      errorMessage = `Le serveur a retourné le code ${error.status}, ` +
                     `le message d'erreur est: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }



 

  




}
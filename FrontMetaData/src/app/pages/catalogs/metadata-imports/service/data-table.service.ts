import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataTable } from '../models/DataTable';
import { Column } from '../models/metadata';


@Injectable({
  providedIn: 'root'
})
export class DataTableService {
 // private apiUrl = 'http://localhost:8082/tables'; // Adjust the URL based on your actual backend endpoint

  private baseUrl = 'http://localhost:8082/PIDataCatalog/api';

  constructor(private http: HttpClient) { }

  getAllDataTables(): Observable<DataTable[]> {
    return this.http.get<DataTable[]>(`${this.baseUrl}/getAllTables`);
  }
  getMetaDataForTable(tableId: number): Observable<Column[]> {
    return this.http.get<Column[]>(`${this.baseUrl}/tables/${tableId}/columns`);
  }
  getDataTable(id: number): Observable<DataTable> {
    return this.http.get<DataTable>(`${this.baseUrl}/tables/${id}`);
  }
  addMetadata(tableId: number, columnData: any): Observable<any> {
    // Create HttpParams and append your data
    let params = new HttpParams()
      .set('name', columnData.name)
      .set('description', columnData.description)
      .set('type', columnData.type);

    return this.http.post(`${this.baseUrl}/tables/${tableId}/metadata`, null, { params });
  }
  updateDescription(tableId: number, description: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/tables/${tableId}/description`, description, {
        headers: { 'Content-Type': 'application/json' }
    });
}

 
}


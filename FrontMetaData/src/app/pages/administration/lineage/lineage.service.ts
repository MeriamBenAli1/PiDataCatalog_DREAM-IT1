// lineage.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColumnMatch, Table } from './lineage.model';

@Injectable({
  providedIn: 'root'
})
export class LineageService {

  private tableWithMetaDataUrl = 'http://localhost:8082/PIDataCatalog/api/TableWithMetaData';
  private tableWithRelationUrl = 'http://localhost:8082/PIDataCatalog/api/TableWithRelation';
  constructor(private http: HttpClient) { }

  getLineageData(): Observable<Table[]> {
    return this.http.get<Table[]>(`${this.tableWithMetaDataUrl}`);
  }
  getTableWithRelation(): Observable<ColumnMatch[]> {
    return this.http.get<ColumnMatch[]>(this.tableWithRelationUrl);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserWithAudits } from './audit-log.model';

@Injectable({
  providedIn: 'root'
})
export class AuditLogService {
  private apiUrl = 'http://localhost:8082/PIDataCatalog/';
  constructor(private http: HttpClient) { }
 
  getUsersWithAudits(): Observable<UserWithAudits[]> {
    return this.http.get<UserWithAudits[]>(`${this.apiUrl}users/UserWithAudit`);
  }
  archiveAudit(auditId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}api/audit-logs/archive/${auditId}`, null);
  }
  deleteAudit(auditId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}api/audit-logs/delete/${auditId}`);
  }
  getArchivedAudits(): Observable<UserWithAudits[]> {
    return this.http.get<UserWithAudits[]>(`${this.apiUrl}users/UserWithAuditArchived`);
  }

}

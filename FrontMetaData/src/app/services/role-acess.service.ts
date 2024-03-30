import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleAcessService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:8082/PIDataCatalog/users/';

  makeRoleDemand(userId: number, role: string, accessApproved: boolean): Observable<any> {
    const url = `${this.apiUrl}role/make-demand`;
    const params = new HttpParams()
    .set('userId', userId)
    .set('role', role)
    .set('accessApproved', accessApproved);
   
    return this.http.post(url,null, { params });
  }

  
  fetchAllDemands(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}role/all`);
  }

  addRoleAndApproveAccess(demandId: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}addRole/${demandId}`, {});
  }
}

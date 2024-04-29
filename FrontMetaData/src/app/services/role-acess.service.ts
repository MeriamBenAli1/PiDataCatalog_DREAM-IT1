import { Injectable } from '@angular/core';
import { HttpClient,HttpParams , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class RoleAcessService {

  constructor(private http: HttpClient , private authService :AuthService) { }
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

    let jwToken =   this.authService.getToken();

    const headers = new HttpHeaders().set('Authorization', jwToken);
    return this.http.get<any[]>(`${this.apiUrl}role/all`, { headers });
  }

  addRoleAndApproveAccess(demandId: number): Observable<string> {
    
    let jwToken =   this.authService.getToken();

    const headers = new HttpHeaders().set('Authorization', jwToken);
    return this.http.post<string>(`${this.apiUrl}addRole/${demandId}`, { }, { headers });
  }
}

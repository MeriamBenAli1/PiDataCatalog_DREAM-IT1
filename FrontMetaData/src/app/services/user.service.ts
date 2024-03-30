// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8082/PIDataCatalog/';

  constructor(private http: HttpClient) {}
  private userId: number; // Store the user ID after authentication

  setUserId(userId: number): void {
    this.userId = userId;
  }


  getUserById(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}`);
  }

  // modifyUserRole(userId: number, newRole: Role): Observable<any> {
  //   const url = `${this.apiUrl}/users/modify-role/${userId}`;
  //   const body = { newRole: newRole }; // Assuming your API expects a body with a 'newRole' property

  //   return this.http.post(url, body).pipe(
  //     catchError((error) => {
  //       console.error('Error modifying role:', error);
  //       throw error; // Rethrow the error to be caught by the calling component
  //     })
  //   );
  // }


  modifyUserRole(userId: number, oldRoleName: string, newRole: string): Observable<any> {
    const url = `${this.apiUrl}users/modify-role/?userId=${userId}&NewRole=${newRole}&oldRoleName=${oldRoleName}`;
    return this.http.post(url, null); // or pass an empty body if required by your backend
  }
  private readonly USER_DETAILS_KEY = 'userDetails';

  setUserDetails(userDetails: any): void {
    localStorage.setItem(this.USER_DETAILS_KEY, JSON.stringify(userDetails));
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/update`, user);
  }
  getUserDetails(): any {
    const userDetailsString = localStorage.getItem(this.USER_DETAILS_KEY);
    return userDetailsString ? JSON.parse(userDetailsString) : null;
  }

  getUserId(): number {
    const userDetails = this.getUserDetails();
    return userDetails ? userDetails.id : null;
  }

  clearUserDetails(): void {
    localStorage.removeItem(this.USER_DETAILS_KEY);
  }

  getFileUrl(filename: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/users/profile/${filename}`, { responseType: 'text' as 'json' });
  }

}

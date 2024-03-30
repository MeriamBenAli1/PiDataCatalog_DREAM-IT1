import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient,HttpParams,HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userDetails: User;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private helper = new JwtHelperService();

  apiURL: string = 'http://localhost:8082/PIDataCatalog/auth';
  apiusers: string = 'http://localhost:8082/PIDataCatalog/users';
  token!:string;
  
  public loggedUser!:string;
  public isloggedIn: Boolean = false;
  public role!:string[];
  private currentUser: User | null = null;

  constructor(private router : Router,
    private http : HttpClient
) { }

login(user: User): Observable<LoginResponse> {
  return this.http.post<LoginResponse>(`${this.apiURL}/login`, user, { observe: 'response' })
    .pipe(map((response: HttpResponse<LoginResponse>) => response.body!));
}

registerUser(user: User): Observable<any> {
  // Set data as query parameters
  const params = new HttpParams()
    .set('email', user.email)
    .set('nom', user.nom)
    .set('prenom', user.prenom)
    .set('password', user.password);

  return this.http.post(`${this.apiURL}/registerUser`, null, { params });
}

getUsers(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiusers}/all`);
}

deleteUser(userId: number): Observable<any> {
  const deleteUrl = `${this.apiusers}/delete/${userId}`;
  return this.http.delete<any>(deleteUrl);
}


saveToken(jwt:string){
localStorage.setItem('jwt',jwt);
this.token = jwt;
this.isloggedIn = true; 
this.decodeJWT();
}

getToken():string {
return this.token;
}

decodeJWT()
{   if (this.token == undefined)
  return;
const decodedToken = this.helper.decodeToken(this.token);
this.role = decodedToken.role;
this.loggedUser = decodedToken.sub;

}

getUserId(): number {
  const tokenPayload = this.parseJwt(this.token);
  return tokenPayload ? tokenPayload.userId : null;
}
private parseJwt(token: string): any {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}

getRole(): string | null {
  const user = this.getUserDetails();
  return user && user.roles ? user.roles : null;
}

 getUserDetails() {
  const user = JSON.parse(localStorage.getItem('userDetails') || '{}');
  console.log('User Details:', user); // Add this line for debugging
  return user;
}
isAdmin(): boolean {
  const user = this.getUserDetails();
  return user && user.roles && user.roles.some(role => role.name === 'ADMIN');
}

isANYALYSTE(): boolean {
  const user = this.getUserDetails();
  return user && user.roles && user.roles.some(role => role.name === 'ANYALYSTE');
}
isRESPONSABLEDONEES(): boolean {
  const user = this.getUserDetails();
  return user && user.roles && user.roles.some(role => role.name === 'RESPONSABLE_DONEES');
}
isAFFAIRE(): boolean {
  const user = this.getUserDetails();
  return user && user.roles && user.roles.some(role => role.name === 'UTLISATEUR_AFFAIRE');
}

/* SignIn(user: User): Boolean {
let validUser: Boolean = false;
this.users.forEach((curUser) => {
if (user.username == curUser.username && user.password == curUser.password) {
validUser = true;
this.loggedUser = curUser.username;
this.isloggedIn = true;
this.roles = curUser.roles;
localStorage.setItem('loggedUser', this.loggedUser);
localStorage.setItem('isloggedIn', String(this.isloggedIn));
}
});
return validUser;
}*/



// isAdmin(): boolean {
//   // Assuming you have user roles and 'admin' is one of them
//   const userRole = this.getCurrentUserRoles();
//   return userRole.includes('ADMIN');
// }

// private getCurrentUserRoles(): string[] {
//   // Replace this with actual logic to get user roles from your authentication service
//   // For example, you might have a property in your AuthService representing the current user
//   // and it has a 'userDetails' field with a 'role' property.
//   if (this.currentUser && this.currentUser.userDetails) {
//     return [this.currentUser.userDetails.role];
//   }

//   return [];
// }

logout() {
this.loggedUser = undefined!;
this.role = undefined!;
this.token= undefined!;
this.isloggedIn = false;
localStorage.removeItem('jwt');
this.router.navigate(['/login']);
}

setLoggedUserFromLocalStorage(login: string) {
this.loggedUser = login;
this.isloggedIn = true;
// this.getUserRoles(login);
}

loadToken() {
this.token = localStorage.getItem('jwt')!;
this.decodeJWT();
}

isTokenExpired(): Boolean
{
return  this.helper.isTokenExpired(this.token);   
}



/*getUserRoles(username: string) {
this.users.forEach((curUser) => {
if (curUser.username == username) {
this.roles = curUser.roles;
}
});
}*/

}
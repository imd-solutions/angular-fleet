import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseURL: string = 'https://api.github.com/'

  constructor(private http: HttpClient) {}

  userLogin(userCredentials: any): Observable<any> {
    return this.http.post(this.baseURL + '', userCredentials)
  }

  userRegister(userCredentials: any): Observable<any> {
    return this.http.post(this.baseURL + '', userCredentials)
  }

  userForgottenPassword(userCredentials: any): Observable<any> {
    return this.http.post(this.baseURL + '', userCredentials)
  }
}

import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../interfaces/auth/loginRequest.interface';
import { RegisterRequest } from '../interfaces/auth/registerRequest.interface';
import { SessionInformation } from '../interfaces/auth/sessionInformation.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pathService = "http://localhost:8080/api/auth";



  constructor(private httpClient: HttpClient) { }

  public register(registerRequest: RegisterRequest): Observable<void> {
    return this.httpClient.post<void>(`${this.pathService}/register`, registerRequest);
  }

  public login(loginRequest: LoginRequest): Observable<SessionInformation> {
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    });


    let options = { headers: headers };


    return this.httpClient.post<SessionInformation>(`http://localhost:8080/api/auth/login`, loginRequest, options);
  }
}
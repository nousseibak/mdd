import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../interfaces/auth/loginRequest.interface';
import { RegisterRequest } from '../interfaces/auth/registerRequest.interface';
import { SessionInformation } from '../interfaces/auth/sessionInformation.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public register(registerRequest: RegisterRequest): Observable<void> {
    return this.httpClient.post<void>(`http://localhost:8080/api/auth/register`, registerRequest);
  }

  public login(loginRequest: LoginRequest): Observable<SessionInformation> {
    return this.httpClient.post<SessionInformation>(`http://localhost:8080/api/auth/login`, loginRequest);
  }
}
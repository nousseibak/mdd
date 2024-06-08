import { HttpClient } from '@angular/common/http';
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

  private pathService = `${environment.baseUrl}auth`;

  constructor(private httpClient: HttpClient) { }

  public register(registerRequest: RegisterRequest): Observable<void> {
    return this.httpClient.post<void>(`${this.pathService}/register`, registerRequest);
  }

  public login(loginRequest: LoginRequest): Observable<SessionInformation> {
    return this.httpClient.post<SessionInformation>(`${this.pathService}/login`, loginRequest);
  }
}
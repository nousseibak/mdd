import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  public getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:8080/api/users/${id}`);
  }

  updateUser(userId: number, userData: any): Observable<User> {
    return this.httpClient.put<User>(`http://localhost:8080/api/users/${userId}`, userData);
  }
}
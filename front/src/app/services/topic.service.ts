import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Topic } from '../interfaces/topic.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  //private apiUrl = `${environment.baseUrl}topics`;

  headers = new HttpHeaders({
    //'Authorization': 'Bearer ' ,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
       'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
  });



  constructor(private http: HttpClient) {}

  getAllTopics(): Observable<Topic[]> {
    const params = new HttpParams();
    return this.http.get<Topic[]>(`http://localhost:8080/api/topics/all`, {
      headers: this.headers,
      params
    });
  }

  createTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(`http://localhost:8080/api/topics/create`, topic);
  }

  subscribeToTopic(topicId: number, userId: number): Observable<any> {
    return this.http.post<void>(`http://localhost:8080/api/topics/${topicId}/subscribe/${userId}`, {});
  }

  unsubscribeFromTopic(topicId: number, userId: number): Observable<void> {
    return this.http.post<void>(`http://localhost:8080/api/topics/${topicId}/unsubscribe/${userId}`, {});
  }

  getUserSubscriptions(userId: number): Observable<Topic[]> {
    return this.http.get<Topic[]>(`http://localhost:8080/api/topics/${userId}/subscriptions`);
  }
}

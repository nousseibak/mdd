import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Topic } from '../interfaces/topic.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl = `${environment.baseUrl}topics`;

  constructor(private http: HttpClient) {}

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.apiUrl}/all`);
  }

  createTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(`${this.apiUrl}/create`, topic);
  }

  subscribeToTopic(topicId: number, userId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${topicId}/subscribe/${userId}`, {});
  }

  unsubscribeFromTopic(topicId: number, userId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${topicId}/unsubscribe/${userId}`, {});
  }

  getUserSubscriptions(userId: number): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.apiUrl}/${userId}/subscriptions`);
  }
}

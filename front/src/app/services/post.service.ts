import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = `${environment.baseUrl}posts`;

  constructor(private http: HttpClient) { }

  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${postId}`);
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/all`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/create`, post);
  }

  getPostsByTopic(topicId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/byTopic/${topicId}`);
  }

  getPostsByUserSubscriptions(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/byUserSubscriptions/${userId}`);
  }
}

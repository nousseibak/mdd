import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200/',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
  });

  options = { headers: this.headers };

  constructor(private http: HttpClient) { }

  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:8080/api/posts/` + postId);
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:8080/api/posts/all`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`http://localhost:8080/api/posts/create`, post);
  }

  getPostsByTopic(topicId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:8080/api/posts/byTopic/` + topicId);
  }

  getPostsByUserSubscriptions(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:8080/api/posts/byUserSubscriptions/` + userId);
  }
}

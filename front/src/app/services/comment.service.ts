import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/interfaces/comment.interface';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) {}

  getAllCommentsByAuthor(userId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/allByAuthor/${userId}`);
  }

  getAllCommentsByPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/allByPost/${postId}`);
  }

  addCommentToPost(userId: number, postId: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiUrl}/add/${userId}/${postId}`, comment);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';
import { Comment } from 'src/app/interfaces/comment.interface';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {

  post: Post | undefined;
  newCommentContent: string = '';
  userId: number | undefined;



  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private sessionService: SessionService,

  ) { }

  ngOnInit(): void {
    this.userId = this.sessionService.sessionInformation?.id;

    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getPostById(postId).subscribe((post: Post) => {
      this.post = post;
    });

  }



  addComment(): void {
    if (this.newCommentContent.trim() === '') {
      return; // Ne rien faire si le contenu du commentaire est vide
    }

    let comment: Comment = {
      content: this.newCommentContent,
      author: this.post?.author,
      postId: this.post!.id
    };

    this.commentService.addCommentToPost(this.userId!, this.post?.id!, comment).subscribe((comment: Comment) => {
      // Ajouter le commentaire à la liste des commentaires du post
      if (!this.post!.comments) {
        this.post!.comments = [];
      }
      this.post!.comments.push(comment);
      // Effacer le champ de saisie du commentaire
      this.newCommentContent = '';
    });
  }


}

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

  // post: Post = {
  //   id: 1,
  //   title: "The Future of Quantum Computing",
  //   content: "Quantum computing is set to revolutionize technology. It will change how we solve complex problems...",
  //   author: {
  //     id: 1,
  //     username: "tech_guru",
  //     email: "tech_guru@example.com",
  //     createdAt: new Date('2024-01-15'),
  //     updatedAt: new Date('2024-01-15')
  //   },
  //   topic: {
  //     id: 1,
  //     name: "Technology",
  //     description: "Discussion about the latest technologies and innovations.",
  //     createdAt: new Date('2024-01-01'),
  //     updatedAt: new Date('2024-01-02'),
  //     subscribers: [
  //       {
  //         id: 2,
  //         username: "user1",
  //         email: "user1@example.com",
  //         createdAt: new Date('2024-01-01'),
  //         updatedAt: new Date('2024-01-01')
  //       }
  //     ]
  //   },
  //   comments: [
  //   ],
  //   dateCreated: new Date('2024-01-15'),
  //   createdAt: new Date('2024-01-15'),
  //   updatedAt: new Date('2024-01-16')
  // };


  // constructor() { }

  // ngOnInit(): void {
  // }

  post: Post| undefined;
  newCommentContent: string = '';
  userId: number | undefined;



  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private sessionService: SessionService,

  ) {}

  ngOnInit(): void {
    this.userId = this.sessionService.sessionInformation?.id;

    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getPostById(postId).subscribe((post: Post) => {
      this.post = post;
      console.log("author: "+ this.post.author?.username)
      console.log("theme: "+ this.post.topic?.name)
      console.log("comments: "+ this.post.comments)
      console.log("comments: "+ this.post.comments?.at(1)?.author)

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

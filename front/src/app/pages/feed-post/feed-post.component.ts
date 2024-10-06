import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-feed-post',
  templateUrl: './feed-post.component.html',
  styleUrls: ['./feed-post.component.scss']
})
export class FeedPostComponent implements OnInit {
  userId: number | undefined; // ID de l'utilisateur connecté

  posts: Post[] = [];

  constructor(private postService: PostService, private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.sessionService.sessionInformation?.id; // Obtenir l'ID de l'utilisateur connecté
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPostsByUserSubscriptions(this.userId!).subscribe(posts => {
      // Trier les posts par date de création, du plus récent au plus ancien
      this.posts = posts.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA; // ordre décroissant
      });
    });
  }



  createArticle() {
    // Rediriger vers une page de création d'article
    this.router.navigate(['/createPost']);
  }
}

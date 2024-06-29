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
//   posts: Post[] = [

//   {
//     id: 1,
//     title: 'First Post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     author: 1,
//     createdAt: new Date('2024-06-10'),
//     updatedAt: new Date('2024-06-10'),
//     topic: {
//       id: 1,
//       name: 'Science',
//       description: 'Discussion about scientific discoveries and research.',
//       createdAt: new Date('2024-06-10'),
//       updatedAt: new Date('2024-06-12'),
//     }
//   },
//   {
//     id: 2,
//     title: 'First Post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     author:  1,
//     createdAt: new Date('2024-06-10'),
//     updatedAt: new Date('2024-06-10'),
//     topic: {
//       id: 1,
//       name: 'Science',
//       description: 'Discussion about scientific discoveries and research.',
//       createdAt: new Date('2024-06-10'),
//       updatedAt: new Date('2024-06-12'),
//     }
//   },
//   {
//     id: 3,
//     title: 'First Post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     author:  1,
//     createdAt: new Date('2024-06-10'),
//     updatedAt: new Date('2024-06-10'),
//     topic: {
//       id: 1,
//       name: 'Science',
//       description: 'Discussion about scientific discoveries and research.',
//       createdAt: new Date('2024-06-10'),
//       updatedAt: new Date('2024-06-12'),
//     }
//   },
//   {
//     id: 4,
//     title: 'First Post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     author: 1,
    
//     createdAt: new Date('2024-06-10'),
//     updatedAt: new Date('2024-06-10'),
//     topic: {
//       id: 1,
//       name: 'Science',
//       description: 'Discussion about scientific discoveries and research.',
//       createdAt: new Date('2024-06-10'),
//       updatedAt: new Date('2024-06-12'),
//     }
//   },
// ];


  constructor(private postService: PostService,  private sessionService : SessionService, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.sessionService.sessionInformation?.id; // Obtenir l'ID de l'utilisateur connecté
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPostsByUserSubscriptions(this.userId!).subscribe(posts => {
      this.posts = posts;
    });
  }

  createArticle() {
    // Rediriger vers une page de création d'article
    this.router.navigate(['/createPost']);
  }
}

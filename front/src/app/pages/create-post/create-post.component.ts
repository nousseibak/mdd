import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { Topic } from 'src/app/interfaces/topic.interface';
import { User } from 'src/app/interfaces/user.interface';
import { PostService } from 'src/app/services/post.service';
import { SessionService } from 'src/app/services/session.service';
import { TopicService } from 'src/app/services/topic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  userId: number | undefined; // ID de l'utilisateur connecté
  topics: Topic[] = [];
  article: Partial<Post> = {};
  author!: User ; 

  constructor(
    private topicService: TopicService,
    private postService: PostService,
    private router: Router,
    private sessionService : SessionService,
    private userService : UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.sessionService.sessionInformation?.id; // Obtenir l'ID de l'utilisateur connecté
    this.loadUser();
    this.loadTopics();
  }

  loadUser(): void {
    if (this.userId) {
      this.userService.getById(this.userId).subscribe({
        next: (user: User) => {
          this.article.author = user; 
        },
        error: (error) => {
          console.error('Échec du chargement de l\'utilisateur :', error);

        }
      });
    }
  }

  loadTopics(): void {
    this.topicService.getAllTopics().subscribe((topics: Topic[]) => {
      this.topics = topics;
    });
  }

  onSubmit(): void {

    if (this.userId && this.article.title && this.article.content && this.article.topic) {
      
      //this.article.topicId=this.article.topic.id;
      console.log("author: " + this.article.author?.email)
      console.log("post: " + this.article.content)
      console.log("title: " + this.article.title)

      this.postService.createPost(this.article as Post).subscribe(() => {
        this.router.navigate(['/feedPost']); // Redirige vers la page principale après création
      });
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { Topic } from 'src/app/interfaces/topic.interface';
import { PostService } from 'src/app/services/post.service';
import { SessionService } from 'src/app/services/session.service';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  userId: number | undefined; // ID de l'utilisateur connecté
  topics: Topic[] = [];
  article: Partial<Post> = {};

  constructor(
    private topicService: TopicService,
    private postService: PostService,
    private router: Router,
    private sessionService : SessionService,
  ) {}

  ngOnInit(): void {
    this.userId = this.sessionService.sessionInformation?.id; // Obtenir l'ID de l'utilisateur connecté
    this.article.author= this.userId;
    this.loadTopics();
  }

  loadTopics(): void {
    this.topicService.getAllTopics().subscribe((topics: Topic[]) => {
      this.topics = topics;
    });
  }

  onSubmit(): void {
    if (this.article.title && this.article.content && this.article.topic) {
      this.postService.createPost(this.article as Post).subscribe(() => {
        this.router.navigate(['/']); // Redirige vers la page principale après création
      });
    }
  }
}
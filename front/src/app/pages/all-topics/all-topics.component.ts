import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic.interface';
import { SessionService } from 'src/app/services/session.service';
import { TopicService } from 'src/app/services/topic.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-topics',
  templateUrl: './all-topics.component.html',
  styleUrls: ['./all-topics.component.scss']
})
export class AllTopicsComponent implements OnInit {
  topics: Topic[] = [];
  userId: number | undefined;

  constructor(
    private topicService: TopicService,
    private userService: UserService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.userId = this.sessionService.sessionInformation?.id;
    this.loadTopics();
  }


  loadTopics(): void {
    this.topicService.getAllTopics().subscribe((topics: Topic[]) => {
      this.topics = topics;
    });
  }

  toggleSubscription(topic: Topic): void {

    if (this.userId) {
      if (topic.subscribers && !topic.subscribers.some(subscriber => subscriber.id === this.userId)) {
        this.topicService.subscribeToTopic(topic.id!, this.userId).subscribe(() => {
          this.loadTopics(); // Rafraîchir la liste après la souscription
        });
      } else if (topic.subscribers && topic.subscribers.some(subscriber => subscriber.id === this.userId)) {
        this.topicService.unsubscribeFromTopic(topic.id!, this.userId).subscribe(() => {
          this.loadTopics(); // Rafraîchir la liste après le désabonnement
        });
      }
    }
  }

  isUserSubscribed(topic: Topic): boolean {
    if (topic.subscribers && this.userId) {
      return topic.subscribers.some(subscriber => subscriber.id === this.userId);
    }
    return false;
  }


}




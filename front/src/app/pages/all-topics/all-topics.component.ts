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
  //topics: Topic[] = [];

  userId: number | undefined; // ID de l'utilisateur connecté

   topics: Topic[] = [
    {
      id: 1,
      name: 'Science',
      description: 'Discussion about scientific discoveries and research.',
      createdAt: new Date('2024-06-10'),
      updatedAt: new Date('2024-06-12'),
      isSubscribed: true,
      posts: [
        {
          id: 1,
          title: 'New Discoveries in Quantum Mechanics',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          createdAt: new Date('2024-06-10'),
          updatedAt: new Date('2024-06-11'),
          author:  1
          
  
        },
        // Other posts related to science topic
      ],
      subscribers: [
        {
          id: 1,
          username: 'user1',
          email: 'user1@example.com',
          createdAt: new Date('2024-06-10'),
          updatedAt: new Date('2024-06-10'),
        },
        // Other subscribers of the science topic
      ]
    },
    {
      id: 3,
      name: 'Technology',
      description: 'Discussion about the latest technologies and innovations.',
      createdAt: new Date('2024-06-11'),
      updatedAt: new Date('2024-06-12'),
      isSubscribed: false,
      posts: [
        {
          id: 2,
          title: 'Artificial Intelligence and Machine Learning',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          createdAt: new Date('2024-06-11'),
          updatedAt: new Date('2024-06-12'),
          author: 2,
        },
        // Other posts related to technology topic
      ],
      subscribers: [
        {
          id: 2,
          username: 'user2',
          email: 'user2@example.com',
          createdAt: new Date('2024-06-11'),
          updatedAt: new Date('2024-06-11'),
        },
        // Other subscribers of the technology topic
      ]
    },
    {
      id: 4,
      name: 'Technology',
      description: 'Discussion about the latest technologies and innovations.',
      createdAt: new Date('2024-06-11'),
      updatedAt: new Date('2024-06-12'),
      isSubscribed: false,
      posts: [
        {
          id: 2,
          title: 'Artificial Intelligence and Machine Learning',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          createdAt: new Date('2024-06-11'),
          updatedAt: new Date('2024-06-12'),
          author: 2
        },
      ],
      subscribers: [
        {
          id: 2,
          username: 'user2',
          email: 'user2@example.com',
          createdAt: new Date('2024-06-11'),
          updatedAt: new Date('2024-06-11'),
        },
        // Other subscribers of the technology topic
      ]
    },
    {
      id: 2,
      name: 'Technology',
      description: 'Discussion about the latest technologies and innovations.',
      createdAt: new Date('2024-06-11'),
      updatedAt: new Date('2024-06-12'),
      isSubscribed: false,
      posts: [
        {
          id: 2,
          title: 'Artificial Intelligence and Machine Learning',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          createdAt: new Date('2024-06-11'),
          updatedAt: new Date('2024-06-12'),
          author: 2
        },
        // Other posts related to technology topic
      ],
      subscribers: [
        {
          id: 2,
          username: 'user2',
          email: 'user2@example.com',
          createdAt: new Date('2024-06-11'),
          updatedAt: new Date('2024-06-11'),
        },
        // Other subscribers of the technology topic
      ]
    },
  ];

  constructor(private topicService: TopicService, private userService: UserService, private sessionService : SessionService) { }

  ngOnInit(): void {
    this.userId = this.sessionService.sessionInformation?.id; // Obtenir l'ID de l'utilisateur connecté
    //this.loadTopics();
  }


  // loadTopics(): void {
  //   this.topicService.getAllTopics().subscribe((topics: Topic[]) => {
  //     this.topics = topics.map(topic => {
  //       // Vérifiez si l'utilisateur actuel est dans la liste des abonnés au sujet
  //       const isSubscribed = this.userId ? topic.subscribers?.some(subscriber => subscriber.id === this.userId) : false;
  //       return { ...topic, isSubscribed };
  //     });
  //   });
  // }

  // toggleSubscription(topic: Topic): void {
  //   // Si l'utilisateur est connecté et n'est pas déjà abonné, abonnez-le
  //   if (this.userId && !topic.isSubscribed) {
  //     this.topicService.subscribeToTopic(topic.id!, this.userId).subscribe(() => {
  //       topic.isSubscribed = true;
  //     });
  //   }
  //   // Si l'utilisateur est connecté et est déjà abonné, désabonnez-le
  //   else if (this.userId && topic.isSubscribed) {
  //     this.topicService.unsubscribeFromTopic(topic.id!,this.userId).subscribe(() => {
  //       topic.isSubscribed = false;
  //     });
  //   }
  // }




  
}

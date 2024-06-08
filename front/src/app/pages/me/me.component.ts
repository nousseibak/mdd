import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Topic } from 'src/app/interfaces/topic.interface';
import { User } from 'src/app/interfaces/user.interface';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  form!: FormGroup;

  public user: User | undefined;

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
          author: 1
  
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

  constructor(private fb: FormBuilder,
              private sessionService: SessionService,
              private userService: UserService) {
  }





  ngOnInit(): void {
    // Initialisation du formulaire avec des valeurs par défaut ou les valeurs de l'utilisateur connecté
    this.form = this.fb.group({
      username: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]]
    });

    // // Récupération des informations de l'utilisateur connecté
    // this.userService
    //   .getById(this.sessionService.sessionInformation!.id.toString())
    //   .subscribe((user: User) => {
    //     this.user = user;
    //     // Pré-remplissage du formulaire avec les informations de l'utilisateur
    //     this.form.patchValue({
    //       username: user.username,
    //       email: user.email
    //     });
    //   });
    // }
  }
  save(): void {
    // Vous pouvez implémenter ici la logique pour sauvegarder les données de l'utilisateur
    console.log('Données sauvegardées :', this.form.value);
  }
}
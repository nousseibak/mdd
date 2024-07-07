import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/interfaces/post.interface';
import { Topic } from 'src/app/interfaces/topic.interface';
import { User } from 'src/app/interfaces/user.interface';
import { PostService } from 'src/app/services/post.service';
import { SessionService } from 'src/app/services/session.service';
import { TopicService } from 'src/app/services/topic.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  form!: FormGroup;
  topics: Topic[] = [];
  public user: User | undefined;
  userId: number | undefined;
  posts: Post[]=[];
  errorMessage: string | undefined;


  constructor(private fb: FormBuilder,
              private sessionService: SessionService,
              private userService: UserService,
              private topicService:TopicService,   
              private router: Router,
          ) {
  }

  ngOnInit(): void {
    this.userId = this.sessionService.sessionInformation?.id;
    console.log("userId :"+this.userId)

    
    // Initialisation du formulaire avec des valeurs par défaut ou les valeurs de l'utilisateur connecté
    this.form = this.fb.group({
      username: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]]
    });


    if(this.userId){
      this.loadTopics();
      this.completeForm();
      }

    }

    loadTopics(): void {
      this.topicService.getUserSubscriptions(this.userId!).subscribe((topics: Topic[]) => {
        this.topics = topics;
        console.log(this.topics);
      });
    }

    completeForm(): void{
        //Récupération des informations de l'utilisateur connecté
        this.userService
          .getById(this.userId!)
          .subscribe((user: User) => {
            this.user = user;
            // Pré-remplissage du formulaire avec les informations de l'utilisateur
            this.form.patchValue({
              username: user.username,
              email: user.email
            });
          });
        }

    

        save(): void {
          if (this.form.valid) {
            const updatedUserData = {
              username: this.form.value.username,
              email: this.form.value.email
            };
        
            this.userService.updateUser(this.userId!, updatedUserData).subscribe(
              (updatedUser: User) => {
                console.log('Données utilisateur mises à jour :', updatedUser);
                this.user = updatedUser;
                this.logout();
              },
              (error) => {
                console.error('Erreur lors de la mise à jour des données utilisateur :', error);
                this.errorMessage = 'Une erreur s\'est produite lors de la mise à jour des informations utilisateur.';
              }
            );
          } else {
            this.errorMessage = 'Veuillez remplir correctement tous les champs du formulaire.';
          }
        }
        




  toggleSubscription(topic: Topic): void {
    console.log('id:', this.userId);
    console.log('topic.subscribers:', topic.subscribers);

    if (this.userId) {
      if (topic.subscribers && !topic.subscribers.some(subscriber => subscriber.id === this.userId)) {
        this.topicService.subscribeToTopic(topic.id!, this.userId).subscribe(() => {
          console.log('Subscribed to topic:', topic);
          this.loadTopics(); // Rafraîchir la liste après la souscription
        });
      } else if (topic.subscribers && topic.subscribers.some(subscriber => subscriber.id === this.userId)) {
        this.topicService.unsubscribeFromTopic(topic.id!, this.userId).subscribe(() => {
          console.log('Unsubscribed from topic:', topic);
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

  public logout(): void {
    this.sessionService.logOut();
    this.router.navigate([''])
  }
}
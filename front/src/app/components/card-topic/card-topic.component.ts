import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-topic',
  templateUrl: './card-topic.component.html',
  styleUrls: ['./card-topic.component.scss']
})
export class CardTopicComponent {

  @Input() title!: string;
  @Input() content!: string;
  @Input() isSubscribed!: boolean;

  toggleSubscription(): void {
    // Mettez ici la logique pour basculer l'abonnement
    // Par exemple, vous pouvez appeler un service pour ajouter ou supprimer le thème des abonnements de l'utilisateur
  }

}

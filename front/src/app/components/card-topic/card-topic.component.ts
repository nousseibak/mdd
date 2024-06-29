import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-topic',
  templateUrl: './card-topic.component.html',
  styleUrls: ['./card-topic.component.scss']
})
export class CardTopicComponent {

  @Input() title!: string;
  @Input() content!: string;
  @Output() subscriptionToggle = new EventEmitter<void>();
  @Input() isSubscribed: boolean | undefined;



  toggleSubscription(): void {
    console.log('Button clicked'); 
    this.subscriptionToggle.emit();
  }

}

import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent {

  @Input() post!: Post;

  constructor(private router: Router) { }

  navigateToDetail() {
    this.router.navigate(['/detailPost', this.post.id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {

  // post: Post = {
  //   id: 1,
  //   title: "The Future of Quantum Computing",
  //   content: "Quantum computing is set to revolutionize technology. It will change how we solve complex problems...",
  //   author: {
  //     id: 1,
  //     username: "tech_guru",
  //     email: "tech_guru@example.com",
  //     createdAt: new Date('2024-01-15'),
  //     updatedAt: new Date('2024-01-15')
  //   },
  //   topic: {
  //     id: 1,
  //     name: "Technology",
  //     description: "Discussion about the latest technologies and innovations.",
  //     createdAt: new Date('2024-01-01'),
  //     updatedAt: new Date('2024-01-02'),
  //     subscribers: [
  //       {
  //         id: 2,
  //         username: "user1",
  //         email: "user1@example.com",
  //         createdAt: new Date('2024-01-01'),
  //         updatedAt: new Date('2024-01-01')
  //       }
  //     ]
  //   },
  //   comments: [
  //   ],
  //   dateCreated: new Date('2024-01-15'),
  //   createdAt: new Date('2024-01-15'),
  //   updatedAt: new Date('2024-01-16')
  // };


  // constructor() { }

  // ngOnInit(): void {
  // }

  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getPostById(postId).subscribe((post: Post) => {
      this.post = post;
    });
  }





}

import { Component, OnInit } from '@angular/core';

import { PostService } from './../../services/post.service';

import { Post } from './../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post;
  isEdit: boolean;

  constructor(private postService: PostService) {
    this.currentPost = {
      id: 0,
      title: '',
      body: ''
    };
    this.isEdit = false;
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }
}

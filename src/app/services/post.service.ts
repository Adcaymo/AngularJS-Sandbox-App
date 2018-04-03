import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from './../models/Post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PostService {
  postsUrl: string;

  constructor(private http: HttpClient) {
    this.postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`;

    return this.http.put<Post>(url, post, httpOptions);
  }

  removePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
  }
}

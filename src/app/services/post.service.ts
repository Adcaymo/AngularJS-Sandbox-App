import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from './../models/Post';

@Injectable()
export class PostService {
  postsUrl: string;

  constructor(private http: HttpClient) {
    this.postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}

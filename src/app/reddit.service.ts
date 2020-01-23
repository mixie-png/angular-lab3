import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  apiUrl = 'https://www.reddit.com/r/aww/.json';
  // apiUrl = 'https://www.reddit.com/r/aww/.json?limit=10';
  constructor(private http: HttpClient){}
  fetchAwwSubreddit(){
  return this.http.get(`${this.apiUrl}`);
  

  }
}

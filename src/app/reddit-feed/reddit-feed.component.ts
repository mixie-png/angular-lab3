import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.css'],
  providers: [RedditService]
})
export class RedditFeedComponent implements OnInit {

  constructor(private redditService: RedditService) {}
  data = this.redditService.fetchAwwSubreddit().subscribe((data) => this.data = { ...data });

  ngOnInit() {
  }

}
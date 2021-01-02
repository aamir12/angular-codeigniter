import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css'],
})
export class BlogpostRecentComponent implements OnInit {
  constructor(private blogService: BlogpostService) {}

  recentPosts: Blogpost[] = [];
  ngOnInit() {
    this.blogService.getRecentBlogs().subscribe((data) => {
      this.recentPosts = data;
    });
  }
}

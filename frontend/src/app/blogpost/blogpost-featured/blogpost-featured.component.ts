import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css'],
})
export class BlogpostFeaturedComponent implements OnInit {
  blogs: Blogpost[] = [];
  error: {} = null;
  constructor(private blogService: BlogpostService) {}

  ngOnInit() {
    this.blogService.getFeaturedBlogs().subscribe(
      (data) => {
        this.blogs = data;
      },
      (error) => {
        this.error = error;
      }
    );
  }
}

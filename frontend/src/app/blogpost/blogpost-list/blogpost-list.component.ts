import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Blogpost } from '../blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css'],
})
export class BlogpostListComponent implements OnInit {
  title = 'Blogs';
  blogs: Blogpost[] = [];
  error: {} = null;
  constructor(
    private blogService: BlogpostService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.blogService.getBlogs().subscribe(
      (data) => {
        this.blogs = data;
      },
      (error) => (this.error = error)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css'],
})
export class ManageBlogsComponent implements OnInit {
  blogs: Blog;
  error: string;
  title = 'Manage Blogs';
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogs().subscribe(
      (blogs) => {
        this.blogs = blogs;
      },
      (error) => {
        this.error = error;
      }
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.blogService.deleteBlog(+id).subscribe(
        (res) => {
          console.log(res);
          this.ngOnInit();
        },
        (error) => (this.error = error)
      );
    }
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { exhaustMap, switchMap } from 'rxjs/operators';
import { Blogpost } from '../blogpost';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css'],
})
export class BlogpostDetailComponent implements OnInit, OnDestroy {
  blog: Blogpost = null;
  blogError: {} = null;
  blogSub: Subscription = null;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogpostService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.initData(+params['id']);
    });
  }

  initData(id) {
    this.blogError = null;
    //loading
    if (this.blogSub) {
      this.blogSub.unsubscribe();
    }
    this.blogSub = this.blogService.getBlog(id).subscribe(
      (data: Blogpost) => {
        this.blog = data;
        this.titleService.setTitle(this.blog.title);
      },
      (error) => {
        this.blogError = error;
      }
    );
  }

  ngOnDestroy() {
    this.blogSub.unsubscribe();
  }
}

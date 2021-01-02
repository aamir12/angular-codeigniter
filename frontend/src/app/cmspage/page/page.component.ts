import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CmspageService } from '../cmspage.service';
import { Page } from '../page';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit, OnDestroy {
  pageSub: Subscription = null;
  page: Page;
  pageError: {} = null;
  constructor(
    private route: ActivatedRoute,
    private cmspageService: CmspageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.pageSub = this.cmspageService.getPage(params['slug']).subscribe(
        (page) => {
          this.page = page;
        },
        (error) => (this.pageError = error)
      );
    });
  }

  ngOnDestroy() {
    this.pageSub.unsubscribe();
  }
}

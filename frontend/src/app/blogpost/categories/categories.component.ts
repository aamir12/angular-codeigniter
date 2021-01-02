import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogpostService } from '../blogpost.service';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  catSub: Subscription = null;
  categories: Category[] = [];
  constructor(private blogService: BlogpostService, private router: Router) {}

  ngOnInit() {
    this.catSub = this.blogService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  ngOnDestroy() {}
}

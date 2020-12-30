import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostFeaturedComponent } from './blogpost-featured.component';

describe('BlogpostFeaturedComponent', () => {
  let component: BlogpostFeaturedComponent;
  let fixture: ComponentFixture<BlogpostFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

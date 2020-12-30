import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostRecentComponent } from './blogpost-recent.component';

describe('BlogpostRecentComponent', () => {
  let component: BlogpostRecentComponent;
  let fixture: ComponentFixture<BlogpostRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogpostRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

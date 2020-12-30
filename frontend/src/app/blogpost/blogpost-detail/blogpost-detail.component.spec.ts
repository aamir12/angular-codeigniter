import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostDetailComponent } from './blogpost-detail.component';

describe('BlogpostDetailComponent', () => {
  let component: BlogpostDetailComponent;
  let fixture: ComponentFixture<BlogpostDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogpostDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

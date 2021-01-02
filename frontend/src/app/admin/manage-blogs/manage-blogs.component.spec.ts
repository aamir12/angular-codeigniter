import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlogsComponent } from './manage-blogs.component';

describe('ManageBlogsComponent', () => {
  let component: ManageBlogsComponent;
  let fixture: ComponentFixture<ManageBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

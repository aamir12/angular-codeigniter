import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css'],
})
export class BlogFormComponent implements OnInit {
  pageTitle: string;
  error: string;
  uploadError: string;
  imagePath: string;
  blogForm: FormGroup;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.blogForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      is_featured: ['0'],
      is_active: ['1'],
      image: [''],
    });

    const id = this.route.snapshot.params['id'];
    if (id) {
      this.pageTitle = 'Edit Blog';
      this.blogService.getBlog(+id).subscribe(
        (res) => {
          this.blogForm.patchValue({
            title: res.title,
            description: res.description,
            is_featured: res.is_featured,
            is_active: res.is_active,
            id: res.id,
          });
          this.imagePath = res.image;
        },
        (error) => {
          this.error = error;
        }
      );
    } else {
      this.pageTitle = 'Create Blog';
    }
  }

  get title() {
    return this.blogForm.get('title');
  }
  get description() {
    return this.blogForm.get('description');
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.blogForm.get('image').setValue(file);
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.blogForm.get('title').value);
    formData.append('description', this.blogForm.get('description').value);
    formData.append('is_featured', this.blogForm.get('is_featured').value);
    formData.append('is_active', this.blogForm.get('is_active').value);
    formData.append('image', this.blogForm.get('image').value);

    const id = this.blogForm.get('id').value;
    if (id) {
      this.blogService.updateBlog(formData, id).subscribe(
        (res) => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/admin/blogs']);
          }
        },
        (error) => {
          this.error = error;
        }
      );
    } else {
      this.blogService.createBlog(formData).subscribe(
        (res) => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/admin/blogs']);
          }
        },
        (error) => (this.error = error)
      );
    }
  }
}

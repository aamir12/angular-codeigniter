import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CmspageService } from '../cmspage.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  model = new Contact();
  submitted = false;
  error: {} = null;
  @ViewChild('contactForm') form: NgForm;
  constructor(private cmsPageService: CmspageService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    return this.cmsPageService.contactForm(this.model).subscribe(
      (data: any) => {
        this.form.reset();
        this.model = data;
      },
      (error) => (this.error = error)
    );
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}

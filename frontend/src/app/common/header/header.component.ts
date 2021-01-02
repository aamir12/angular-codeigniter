import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private titleService: Title, private authService: AuthService) {}

  ngOnInit(): void {}

  setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}

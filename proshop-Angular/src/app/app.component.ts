import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './_service/auth.service';
import {User} from './_model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proshop-Angular';
  currentUser: User;

  constructor(private router: Router,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

}

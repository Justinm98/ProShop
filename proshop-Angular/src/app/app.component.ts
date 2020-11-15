import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {User} from './_model/user';
import {AuthService} from './_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proshop-Angular';
  currentUser: User;

  constructor() {

  }


}

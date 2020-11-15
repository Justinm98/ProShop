import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../_service/auth.service';
import {User} from '../_model/user';


@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {

  currentUser: User;
  opened: boolean;
  constructor(private router: Router,
              private authService: AuthService)
  {  this.authService.currentUser.subscribe(x => this.currentUser = x); }

  ngOnInit(): void {
    this.opened = false;

    console.log(this.authService.currentUser);
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}

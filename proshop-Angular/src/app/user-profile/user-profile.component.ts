import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../_service/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {JobService} from '../_service/job.service';
import {NotificationService} from '../_service/notification.service';
import {User} from '../_model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  opened: boolean;
  currentUser: User;

  constructor(private router: Router,
              private authService: AuthService,
              public dialog: MatDialog,
              public jobService: JobService,
              public notifService: NotificationService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.opened = false;
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onHomeBtn(){
    this.router.navigate(['user/homepage']);
  }

}

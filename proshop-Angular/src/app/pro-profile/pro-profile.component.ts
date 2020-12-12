import { Component, OnInit } from '@angular/core';
import {User} from '../_model/user';
import {proInfo} from '../_model/proInfo';
import {Job} from '../_model/job';
import {Router} from '@angular/router';
import {AuthService} from '../_service/auth.service';
import {UserService} from '../_service/user.service';
import {NotificationService} from '../_service/notification.service';
import {JobService} from '../_service/job.service';
import {FormBuilder} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {CreateListingComponent} from '../create-listing/create-listing.component';
import {ProInfoDialogComponent} from '../pro-info-dialog/pro-info-dialog.component';

@Component({
  selector: 'app-pro-profile',
  templateUrl: './pro-profile.component.html',
  styleUrls: ['./pro-profile.component.css']
})
export class ProProfileComponent implements OnInit {
  currentUser: User;
  proData: proInfo;
  jobs: Job[];
  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService,
              private notifService: NotificationService,
              private jobService: JobService,
              public dialog: MatDialog) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);

  }



  ngOnInit(): void {
    this.userService.getProInfo(this.currentUser._id).subscribe(
      data => {
        console.log(data);
        this.proData = data;
      },
      err => {console.log(err)});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProInfoDialogComponent, {
      width: '400px',
    });
    dialogRef.componentInstance.proData = this.proData;

    dialogRef.beforeClosed().subscribe(data => {
      this.proData = dialogRef.componentInstance.req;
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  onHomeBtn(){
    this.router.navigate(['pro/homepage']);
  }
}

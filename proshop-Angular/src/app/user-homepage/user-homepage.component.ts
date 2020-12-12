import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../_service/auth.service';
import {User} from '../_model/user';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateListingComponent } from '../create-listing/create-listing.component';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JobService} from '../_service/job.service';
import {Job} from '../_model/job';
import {NotificationService} from '../_service/notification.service';
import {ViewJobInfoComponent} from '../view-job-info/view-job-info.component';
import {CreateProposalComponent} from '../create-proposal/create-proposal.component';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
  currentUser: User;
  opened: boolean;
  jobs: Job[] = [];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              public dialog: MatDialog,
              public jobService: JobService,
              public notifService: NotificationService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.loadAllClasses();
    this.opened = false;
    console.log(this.authService.currentUser);
  }

  private loadAllClasses() {

    this.jobService.getAll().subscribe(
      jobs => {this.jobs = jobs; },
      error => {this.notifService.showNotif(error, 'error'); });
  }

  openDialogAddJob(): void {
    const dialogRef = this.dialog.open(CreateListingComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  profile(){
    this.router.navigate(['/profile']);
  }

  viewJobInfo(id: string) {

    //this.router.navigate(['/studentattendances', {courseID: id, studentID: this.currentUser._id}]);
  }

  // TODO:  use Router's navigate function to pass courseID to the 'classattendances' component.
  viewJobProposals(id: string) {
    //this.router.navigate(['/classattendances', {courseID: id}]);
  }

  onProfileBtn(){
    this.router.navigate(['user/profile']);
  }

  deleteJob(id: string) {
    this.jobService.delete(id).pipe(first()).subscribe(() => {
      this.jobs = null;
      this.loadAllClasses();
    });
  }
}

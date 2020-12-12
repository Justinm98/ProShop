import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../_service/auth.service';
import {NotificationService} from '../_service/notification.service';
import {User} from '../_model/user';
import {UserService} from '../_service/user.service';
import {proInfo} from '../_model/proInfo';
import {JobService} from '../_service/job.service';
import {Job} from '../_model/job';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {CreateListingComponent} from '../create-listing/create-listing.component';
import {CreateProposalComponent} from '../create-proposal/create-proposal.component';


@Component({
  selector: 'app-pro-homepage',
  templateUrl: './pro-homepage.component.html',
  styleUrls: ['./pro-homepage.component.css']
})
export class ProHomepageComponent implements OnInit {

  opened: boolean;
  currentUser: User;
  proData: proInfo;
  jobs: Job[];
  searchForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService,
              private dialog: MatDialog,
              private notifService: NotificationService,
              private jobService: JobService,
              private formBuilder: FormBuilder) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    this.userService.getProInfo(this.currentUser._id).subscribe(
      data => {
          console.log(data);
          this.proData = data;
      },
        err => {console.log(err)});
  }

  ngOnInit(): void {
    this.loadAllClasses();
    this.opened = false;
    this.searchForm = this.formBuilder.group({
      searchString: ['', [Validators.required]]
    });
  }

  openDialogMakeProposal(id: string): void {
    const dialogRef = this.dialog.open(CreateProposalComponent, {
      width: '400px',
    });
    dialogRef.componentInstance.job = id;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  makeProposal(id: string) {
    this.openDialogMakeProposal(id);
    return "";
  }


  private loadAllClasses() {
    this.jobService.getAll().subscribe(
      jobs => {this.jobs = jobs; },
      error => {this.notifService.showNotif(error, 'error'); });
  }

  onSubmit(){
    this.jobService.jobSearch(this.searchForm.value.searchString).subscribe(
      data => {
        this.jobs = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onRecommenedBtn(){
    this.jobService.recommenedJobSearch(this.proData).subscribe(
      data => {
        console.log("num of jobs found: " + data.length);
        this.jobs = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onProfileBtn(){
    this.router.navigate(['pro/profile']);
  }

  onCurrentProposals(){

  }
}

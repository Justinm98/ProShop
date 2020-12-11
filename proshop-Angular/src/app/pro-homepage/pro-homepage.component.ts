import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../_service/auth.service';
import {NotificationService} from '../_service/notification.service';
import {User} from '../_model/user';
import {UserService} from '../_service/user.service';
import {proInfo} from '../_model/proInfo';
import {JobService} from '../_service/job.service';
import {Job} from '../_model/job';


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
  constructor(private route: Router,
              private authService: AuthService,
              private userService: UserService,
              private notifService: NotificationService,
              private jobService: JobService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    this.userService.getProInfo(this.currentUser._id).subscribe( data => this.proData = data);
  }

  ngOnInit(): void {
    this.loadAllClasses();
    this.opened = false;
  }

  makeProposal(id: string) {
    return "";
  }


  private loadAllClasses() {

    this.jobService.getAll().subscribe(
      jobs => {this.jobs = jobs; },
      error => {this.notifService.showNotif(error, 'error'); });
  }

}

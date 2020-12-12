import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {Job} from '../_model/job';
import {AuthService} from '../_service/auth.service';
import {NotificationService} from '../_service/notification.service';
import {Role} from '../_model/role';
import {ViewJobInfoComponent} from '../view-job-info/view-job-info.component';
import {MatDialog} from '@angular/material/dialog';
import {JobProposalListComponent} from '../job-proposal-list/job-proposal-list.component';
import {JobService} from '../_service/job.service';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {

  @Input() job: Job;
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() viewJobInfoEvent = new EventEmitter<string>();
  @Output() viewProposalsEvent = new EventEmitter<string>();
  userRole = '';

  constructor(private notifService: NotificationService,
              private authService: AuthService,
              public dialog: MatDialog,
              private jobService: JobService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => {
      if (x) {
        this.userRole = x.role;
      }}

    );
  }

  delete(id): void {
    this.deleteEvent.emit(id);
  }

  viewJobInfo(id): void {
    this.viewJobInfoEvent.emit(id);
  }

  viewProposals(id): void {
    this.viewProposalsEvent.emit(id);
  }

  get isUser() {
    return this.userRole && this.userRole === Role.client;
  }

  openDialogJobInfo(): void {
    const dialogRef = this.dialog.open(ViewJobInfoComponent, {
      width: '400px',
    });
    dialogRef.componentInstance.job = this.job;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  openDialogJobProposals(): void {
    const dialogRef = this.dialog.open(JobProposalListComponent, {
      width: '400px',
    });

    this.jobService.getProposalsForJob(this.job._id).subscribe(proposals => {
      dialogRef.componentInstance.proposals = proposals;
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}

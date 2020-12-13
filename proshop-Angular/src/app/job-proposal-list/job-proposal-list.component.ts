import { Component, OnInit } from '@angular/core';
import {Proposal} from '../_model/proposal';
import {MatDialogRef} from '@angular/material/dialog';
import {ViewJobInfoComponent} from '../view-job-info/view-job-info.component';
import {NotificationService} from '../_service/notification.service';
import {JobService} from '../_service/job.service';

@Component({
  selector: 'app-job-proposal-list',
  templateUrl: './job-proposal-list.component.html',
  styleUrls: ['./job-proposal-list.component.css']
})
export class JobProposalListComponent implements OnInit {

  proposals: [Proposal];

  constructor(public dialogRef: MatDialogRef<ViewJobInfoComponent>,
              public notifService: NotificationService,
              private jobService: JobService) { }

  ngOnInit(): void {
  }

  chooseProposal(id: string) {

  }


}

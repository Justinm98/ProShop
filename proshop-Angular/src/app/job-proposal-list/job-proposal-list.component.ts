import { Component, OnInit } from '@angular/core';
import {Proposal} from '../_model/proposal';
import {MatDialogRef} from '@angular/material/dialog';
import {ViewJobInfoComponent} from '../view-job-info/view-job-info.component';

@Component({
  selector: 'app-job-proposal-list',
  templateUrl: './job-proposal-list.component.html',
  styleUrls: ['./job-proposal-list.component.css']
})
export class JobProposalListComponent implements OnInit {

  proposals: [Proposal];

  constructor(public dialogRef: MatDialogRef<ViewJobInfoComponent>) { }

  ngOnInit(): void {
  }

}

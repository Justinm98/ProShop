import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Job} from '../_model/job';

@Component({
  selector: 'app-view-job-info',
  templateUrl: './view-job-info.component.html',
  styleUrls: ['./view-job-info.component.css']
})
export class ViewJobInfoComponent implements OnInit {

  job: Job;
  delete = false;

  constructor(public dialogRef: MatDialogRef<ViewJobInfoComponent>) { }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteJob(id: string) {
    this.delete = true;
  }


}

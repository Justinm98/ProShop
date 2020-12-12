import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Proposal} from '../_model/proposal';
import {User} from '../_model/user';
import {UserService} from '../_service/user.service';
import {JobService} from '../_service/job.service';

@Component({
  selector: 'app-pro-proposal-dialog',
  templateUrl: './pro-proposal-dialog.component.html',
  styleUrls: ['./pro-proposal-dialog.component.css']
})
export class ProProposalDialogComponent implements OnInit {

  proposals: Proposal[];
  currentUser: User;

  constructor(private dialogRef: MatDialogRef<ProProposalDialogComponent>,
              private userService: UserService,
              private jobService: JobService) { }

  getProposals(){
    this.jobService.getProposalByProID(this.currentUser._id).subscribe(
      data => {
        console.log(data);
        this.proposals = data;
      }, err => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.getProposals();
  }

  onDelete(id: string){
    this.jobService.deleteProposal(id).subscribe(
      success => {
        console.log(success);
        this.proposals = null;
        this.getProposals();
      }, err => {
        console.log(err);
      }
    );
  }

}

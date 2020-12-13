import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Proposal} from '../_model/Proposal';
import {JobService} from '../_service/job.service';
import {NotificationService} from '../_service/notification.service';

@Component({
  selector: 'app-proposal-item',
  templateUrl: './proposal-item.component.html',
  styleUrls: ['./proposal-item.component.css']
})
export class ProposalItemComponent implements OnInit {
  @Input() proposal: Proposal;
  @Output() chooseProposalEvent = new EventEmitter<string>();

  constructor(private jobService: JobService,
              private notifService: NotificationService) { }

  ngOnInit(): void {
  }

  chooseProposal(id: string){
    console.log(id);
    this.jobService.selectProposal(id).subscribe(data => {
        this.notifService.showNotif('You have selected a proposal!', 'Okay');
      },
      error => {
        console.log(error);
      });
  }


}

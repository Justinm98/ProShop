import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Proposal} from '../_model/Proposal';

@Component({
  selector: 'app-proposal-item',
  templateUrl: './proposal-item.component.html',
  styleUrls: ['./proposal-item.component.css']
})
export class ProposalItemComponent implements OnInit {
  @Input() proposal: Proposal;
  @Output() chooseProposalEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  chooseProposal(id: string){
    this.chooseProposalEvent.emit(id);
  }


}

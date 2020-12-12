import { Component, OnInit, Input} from '@angular/core';
import {Proposal} from '../_model/Proposal';

@Component({
  selector: 'app-proposal-item',
  templateUrl: './proposal-item.component.html',
  styleUrls: ['./proposal-item.component.css']
})
export class ProposalItemComponent implements OnInit {
  @Input() proposal: Proposal;

  constructor() { }

  ngOnInit(): void {
  }



}

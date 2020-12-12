import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Job} from '../_model/job';
import {JobService} from '../_service/job.service';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.css']
})
export class SearchResultItemComponent implements OnInit {
  @Input() job: Job;
  @Output() makeProposalEvent = new EventEmitter<string>();
  @Output() deleteProposalEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }

  makeProposal(id): void {
    this.makeProposalEvent.emit(id);
  }

  deleteProposal(id: string){
    this.deleteProposalEvent.emit(id);
  }
}

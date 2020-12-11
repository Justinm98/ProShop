import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {Job} from '../_model/job';
import {AuthService} from '../_service/auth.service';
import {NotificationService} from '../_service/notification.service';
import {Role} from '../_model/role';

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

  constructor(private notifService: NotificationService, private authService: AuthService) { }

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

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../_model/user';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {JobService} from '../_service/job.service';
import {NotificationService} from '../_service/notification.service';
import {AuthService} from '../_service/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.css']
})
export class CreateProposalComponent implements OnInit {
  createProposalForm: FormGroup;
  currentUser: User;
  closeResult = '';
  loading = false;
  submitted = false;
  job: string;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<CreateProposalComponent>,
              private jobService: JobService,
              private notifService: NotificationService,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }

  ngOnInit(): void {
    this.createProposalForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      cost: ['', [Validators.required, Validators.pattern('^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$')]],
      writeup: ['', Validators.required],
      id: [''],
      estimatedCompletionDate: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get f() { return this.createProposalForm.controls; }

  submit() {
    this.submitted = true;

    if (!this.createProposalForm.valid) {
      return;
    }
    this.createProposalForm.value.job = this.job;
    this.jobService.createProposal(this.createProposalForm.value)
      .pipe(first())
      .subscribe(
        data => {
          //  this.alertService.success('Registration successful', true);
          console.log('Listing was successfully created');
        },
        error => {
          console.log('Error:', error);
          this.notifService.showNotif(error);
          this.loading = false;
        });
  }
}

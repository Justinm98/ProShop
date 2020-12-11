import { Component, OnInit } from '@angular/core';
import {JobService} from '../_service/job.service';
import {AuthService} from '../_service/auth.service';
import {User} from '../_model/user';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {NotificationService} from '../_service/notification.service';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css']
})
export class CreateListingComponent implements OnInit {
  createListingForm: FormGroup;
  currentUser: User;
  closeResult = '';
  loading = false;
  submitted = false;
  private skillsArray: string[] = [];

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<CreateListingComponent>,
              private jobService: JobService,
              private notifService: NotificationService,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }

  ngOnInit(): void {
    this.createListingForm = this.formBuilder.group({
      title: ['', Validators.required],
      budget: ['', [Validators.required, Validators.pattern('^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$')]],
      description: ['', Validators.required],
      completionDate: ['', Validators.required],
      programming: [null],
      webDev: [null],
      graphicDesign: [null],
      digitalMarketing: [null],
      business: [null],
      musicAudio: [null],
      video: [null],
      skills: [null]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // tslint:disable-next-line:typedef
  createSkillsArray(){

    if (this.createListingForm.value.programming != null && this.createListingForm.value.programming !== false){
      this.skillsArray.push('Programming');
    }
    if (this.createListingForm.value.webDev != null && this.createListingForm.value.webDev !== false){
      this.skillsArray.push('Web Development');
    }
    if (this.createListingForm.value.graphicDesign != null && this.createListingForm.value.graphicDesign !== false){
      this.skillsArray.push('Graphic Design');
    }
    if (this.createListingForm.value.digitalMarketing != null && this.createListingForm.value.digitalMarketing !== false){
      this.skillsArray.push('Digital Marketing');
    }
    if (this.createListingForm.value.business != null && this.createListingForm.value.business !== false){
      this.skillsArray.push('Business');
    }
    if (this.createListingForm.value.musicAudio != null && this.createListingForm.value.musicAudio !== false){
      this.skillsArray.push('Music / Audio');
    }
    if (this.createListingForm.value.video != null && this.createListingForm.value.video !== false) {
      this.skillsArray.push('Video');
    }
    return this.skillsArray;
  }

  get f() { return this.createListingForm.controls; }

  submit() {
    this.submitted = true;

    if (!this.createListingForm.valid) {
      return;
    }

    this.createListingForm.value.skills = this.createSkillsArray();
    this.jobService.createJob(this.createListingForm.value)
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

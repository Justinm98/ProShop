import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../_model/user';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {JobService} from '../_service/job.service';
import {NotificationService} from '../_service/notification.service';
import {AuthService} from '../_service/auth.service';
import {proInfo} from '../_model/proInfo';
import {UserService} from '../_service/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-pro-info-dialog',
  templateUrl: './pro-info-dialog.component.html',
  styleUrls: ['./pro-info-dialog.component.css']
})

export class ProInfoDialogComponent implements OnInit {
  proInfoForm: FormGroup;
  currentUser: User;
  proData: proInfo;
  closeResult = '';
  loading = false;
  submitted = false;
  private skillsArray: string[] = [];
  programming: boolean;
  webDev: boolean;
  graphicDesign: boolean;
  digitalMarketing = false;
  business = false;
  musicAudio = false;
  video = false;
  req: proInfo;


  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private userService: UserService,
              public dialogRef: MatDialogRef<ProInfoDialogComponent>,
              private jobService: JobService,
              private notifService: NotificationService,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });

  }

  initSkills(){
    for(let i = 0; i < this.proData.skills.length; i++){
      if (this.proData.skills[i] === 'Web Development'){
        this.webDev = true;
      }else if (this.proData.skills[i] === 'Programming'){
        this.programming = true;
      }else if (this.proData.skills[i] === 'Graphic Design'){
        this.graphicDesign = true;
      }else if (this.proData.skills[i] === 'Digital Marketing'){
        this.digitalMarketing = true;
      }else if (this.proData.skills[i] === 'Business'){
        this.business = true;
      }else if (this.proData.skills[i] === 'Music / Audio'){
        this.musicAudio = true;
      }else if (this.proData.skills[i] === 'Video'){
        this.video = true;
      }
    }
  }


  ngOnInit(): void {
    this.initSkills();
    this.proInfoForm = this.formBuilder.group({
      link1: [this.proData.links[0]],
      link2: [this.proData.links[1]],
      link3: [this.proData.links[2]],
      description: [this.proData.personalDes],
      programming: [this.programming],
      webDev: [this.webDev],
      graphicDesign: [this.graphicDesign],
      digitalMarketing: [this.digitalMarketing],
      business: [this.business],
      musicAudio: [this.musicAudio],
      video: [this.video],
      otherSkill: [this.proData.otherSkills],
    });
  }

  createSkillsArray(){
    if (this.proInfoForm.value.programming != null && this.proInfoForm.value.programming !== false){
      this.skillsArray.push('Programming');
    }
    if (this.proInfoForm.value.webDev != null && this.proInfoForm.value.webDev !== false){
      this.skillsArray.push('Web Development');
    }
    if (this.proInfoForm.value.graphicDesign != null && this.proInfoForm.value.graphicDesign !== false){
      this.skillsArray.push('Graphic Design');
    }
    if (this.proInfoForm.value.digitalMarketing != null && this.proInfoForm.value.digitalMarketing !== false){
      this.skillsArray.push('Digital Marketing');
    }
    if (this.proInfoForm.value.business != null && this.proInfoForm.value.business !== false){
      this.skillsArray.push('Business');
    }
    if (this.proInfoForm.value.musicAudio != null && this.proInfoForm.value.musicAudio !== false){
      this.skillsArray.push('Music / Audio');
    }
    if (this.proInfoForm.value.video != null && this.proInfoForm.value.video !== false) {
      this.skillsArray.push('Video');
    }
    return this.skillsArray;
  }

  formRequest() {
    this.req = {
      links: [this.proInfoForm.value.link1,
        this.proInfoForm.value.link2,
        this.proInfoForm.value.link3],
      personalDes: this.proInfoForm.value.description,
      skills: this.createSkillsArray(),
      otherSkills: this.proInfoForm.value.otherSkill,
      proUser: this.currentUser._id,
      createdDate: new Date()
    };
  }

  submit() {
    this.submitted = true;
    if (!this.proInfoForm.valid) {
      console.log('Something went wrong, the login/register form is not valid');
      return;
    }
    this.formRequest();
    console.log('CURRENT USER: ' + this.currentUser);
    this.userService.updateProInfo(this.req).pipe(first()).subscribe(
      data => {
        console.log('Success:');
        this.dialogRef.close();
      },
      error => {
        console.log('Error:', error);
        this.loading = false;
      });
  }
}
